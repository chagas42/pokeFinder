import React, { useEffect, useState } from 'react';

import {
  Alert,
  FlatList,
  Image,
  Text,
  TextInput,
  View
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';

import { PokemonCard } from '../../components/PokemonCard';
import { api, PokemonDTO, PokemonInfoList } from '../../services/api';
import { Header } from '../../components/Header';

import LogoImg from '../../assets/logo.png';
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';
import { theme } from '../../global/theme';


import { RootStackParamList } from '../../routes/stack.routes';
import { PokemonList } from '../../components/PokemonList';


type Props = StackScreenProps<RootStackParamList, 'Home'>


export const Home = ({ navigation  }: Props) => {
  const [pokemonsList, setPokemonsList] = useState<PokemonDTO[]>([]);
  const [pokemonResultSearch, setPokemonResultSearch] = useState<PokemonDTO>({} as PokemonDTO);
  const [hasQuery, setHasQuery] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const [nextPage, setNextPage] = useState<string>('/pokemon?limit=6&offset=0');
  

  function createPokemonDTO(result: PokemonInfoList[]) {
    result.forEach(async (pokemon) => {
      const { data } = await api.get(`/pokemon/${pokemon.name}`);
      setPokemonsList((oldState) => [...oldState, data]);
    });
  }

  const getAllPokemons = async () => {
    const { data } = await api.get(nextPage);
    const next = data.next.slice(25)
    setNextPage((oldState) => next);
    createPokemonDTO(data.results);
  };


  async function handleSearchQuery(value: string) {
    if (value != '') {
      try {  
        const { data, status } = await api.get(`/pokemon/${value.toLowerCase()}`);
        if (status == 200) {
  
          setPokemonResultSearch((...oldState)=> data);
          setHasQuery(true)
        } else if (status == 404) {
          setHasQuery(false);
        }
      } catch (error) {
        Alert.alert('Not found Pokemon, typing a valid Pokemon name 🥲',);
      }
    }
    return;
  }

  function handleCloseActionButton () {
    setSearchValue((oldState)=> '');
    setHasQuery(false);
  }

  function handleSelectedPokemon(pokemonInfo: PokemonDTO) {
    navigation.navigate('Profile' as never, { pokemonInfo } as never);
  }

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>
        Which Pokemon would {'\n'}
        you choose?
      </Text>
      <View style={styles.textInputArea}>
        <TextInput
          style={styles.input}
          placeholder="Search here..."
          keyboardType='web-search'
          autoCorrect={false}
          onChangeText={setSearchValue}
        />

        {hasQuery == false ?
          <TouchableOpacity
            onPress={() => handleSearchQuery(searchValue)}
          >
            <AntDesign
              name="search1"
              size={22}
              color={theme.colors.mediumGray}
            />
          </TouchableOpacity>
          :
          <TouchableOpacity
            onPress={handleCloseActionButton}
          >
            <AntDesign
              name="close"
              size={24}
              color={theme.colors.mediumGray}
            />
          </TouchableOpacity>
        }
      </View>

      {(hasQuery != true) &&
        <PokemonList
          getAllPokemons={() => getAllPokemons()}
          pokemonsList={pokemonsList}
        />
      }

      {(hasQuery == true && pokemonResultSearch.id != undefined) &&
        <View style={styles.bySeach}>  
          <PokemonCard
            onPress={() => handleSelectedPokemon(pokemonResultSearch)}
            item={pokemonResultSearch}
          />
        </View>
      }
      <View style={styles.footer}>
        <Image
          source={LogoImg}
        />
      </View>
    </View>
  );
}