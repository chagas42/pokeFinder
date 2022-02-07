import React from 'react';
import { render, waitFor } from '@testing-library/react-native'
import  'cross-fetch/polyfill';
import { Header } from '../../components/Header';
import { PokemonCard } from '../../components/PokemonCard/index';
import  PokemonDtoExample from '../../utils/pokemonDTO.json';

//pokemon-id
//pokemon-name
//pokemon-svg-image


describe('PokemonCard Component:', () => {

  it('should render pokemon name correctly', async () => {

    const { getByTestId } = await render(<PokemonCard item={PokemonDtoExample}/>)


    await waitFor(() => {
      const pokemonName = getByTestId('pokemon-name');
    })


  })

  it('should render image pokemon id correctly', async () => {

    const { getByTestId } = await render(<PokemonCard item={PokemonDtoExample}/>);

    await waitFor(() => {

      const pokemonId = getByTestId('pokemon-id');
    })


  })

});