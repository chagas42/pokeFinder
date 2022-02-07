import axios from 'axios';


export const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export interface PokemonInfoList {
  name: string;
  url: string;
}

interface Types {
  slot: number,
  type: {
      name: string,
      url: string,
  }
}


interface Abilities {
  ability: {
    name: string,
    url: string;
  },
  slot:number,
}

export interface Stats {
  base_stat: number,
  effort: number,
  stat: {
      name: string,
      url: string,
  }
}

export interface PokemonDTO {
  abilities:Abilities[],
  height: number,
  id: number,
  name: string,
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      }
    }
  },
  weight: number,
  order: number,
  stats: Stats[],
  types: Types[],
}




async function getAllPokemons() {

  const { data } = await api.get('/pokemon?limit=4&offset=0');


  const result =  await createPokemonDTO(data.results);

  return {
    next: data.next,
    result,
  };
}

async function createPokemonDTO(result: PokemonInfoList[]):Promise<any> {

  return result.forEach( async (pokemon) => {
    const {data, status } = await api.get(`/pokemon/${pokemon.name}`);
    return data;
  })
}


const services = {
 getAllPokemons,
}



export default services;