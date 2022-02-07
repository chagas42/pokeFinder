import React from 'react';

import {
  FlatList,
  View
} from 'react-native';
import { PokemonCard } from '../PokemonCard';

import { styles } from './styles';
import { PokemonDTO } from '../../services/api';
import { useNavigation } from '@react-navigation/native';

interface Props {
  pokemonsList: PokemonDTO[],
  getAllPokemons: () => Promise<void>
}

export const PokemonList = ({ pokemonsList, getAllPokemons }: Props) => {

  const navigation = useNavigation();

  function handleSelectedPokemon(pokemonInfo: PokemonDTO) {
    navigation.navigate('Profile' as never, { pokemonInfo } as never);
  }

  return (
    <FlatList
          data={pokemonsList}
          contentContainerStyle={{ paddingHorizontal: 20,  }}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          numColumns={2}
          keyExtractor={(_, index) => String(index)}
          onEndReached={getAllPokemons}
          onEndReachedThreshold={0}
          renderItem={(item) => (
            <PokemonCard
              onPress={() => handleSelectedPokemon(item.item)}
              item={item.item}
            />
          )}
        /> 
  );
}