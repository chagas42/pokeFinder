import React, { useEffect, useState } from 'react';

import {  
  FlatList,
  Image,
  Text,
  View
} from 'react-native';

import { Header } from '../../components/Header';

import { styles } from './styles';
import { api, PokemonDTO, PokemonInfoList } from '../../services/api';
import { PokemonCardPrimary } from '../../components/PokemonCardPrimary';

import LogoImg from '../../assets/logo.png';


export const Home = () => {
 
  const [ pokemonsList, setPokemonsList ] = useState<PokemonDTO[]>([]);



  const getAllPokemons = async () => {
    const { data } = await api.get('/pokemon?limit=6&offset=0');

    function createPokemonDTO(result:PokemonInfoList[]){
      result.forEach(async (pokemon) => {
        const { data } = await api.get(`/pokemon/${pokemon.name}`);
        setPokemonsList((oldState) => [...oldState, data]);
      });
    }

    createPokemonDTO(data.results);
    await console.log(pokemonsList);

  };

  //get-data
  useEffect(() => {
    let isMonted = true;
    
    if(isMonted) {
      getAllPokemons();
    }

    return () => { isMonted = false};


  },[]);



  return (
    <View style={styles.container}>
      
      <Header/>

      <Text style={styles.title}>
        Qual pokémon você {'\n'}
        escolheria?
      </Text>

      <FlatList
        data={pokemonsList}
        contentContainerStyle={{paddingHorizontal: 20,alignContent: 'space-around' }}
        columnWrapperStyle={{justifyContent:'space-between'}}
        numColumns={2}
        keyExtractor={(item) => String(item.name)}
        renderItem={(item) => (
          <PokemonCardPrimary
            item={item.item}
          />
        )}
      />

      <View style={styles.footer}>
        <Image
          source={LogoImg}
        />      
      </View>

    </View>
  );
}