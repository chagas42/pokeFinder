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

interface Stats {
  base_stat: number,
  effort: number,
  stat: {
      name: string,
      url: string,
  }
}

export interface PokemonDTO {
  abilities:Abilities[],
  base_experience: number,
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

  const next = data.next;

  let result = [];

  try { 
   result =  await createPokemonDTO(data.results);
  } catch (error) {
    console.log(error);
  }

  return result;
}

async function createPokemonDTO(result: PokemonInfoList[]):Promise<any> {

  const lista: any[] = [ ];

  result.forEach( async (pokemon) => {
    const {data, status } = await api.get(`/pokemon/${pokemon.name}`);
    lista.push(data);
  })

  return lista;
}


const services = {
 getAllPokemons,
 createPokemonDTO
}



export default services;