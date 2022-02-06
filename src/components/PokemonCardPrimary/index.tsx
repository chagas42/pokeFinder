import React, { useEffect, useState } from 'react';

import {
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { SvgFromUri } from 'react-native-svg';

import { PokemonDTO } from '../../services/api';




import { styles } from './styles';

interface PokemonCardPrimaryProps {
  item: PokemonDTO;
}

interface ColorsProps {
  primary:string,
  secondary:string
}


export const PokemonCardPrimary = ({item}:PokemonCardPrimaryProps) => {

  const [ colors, setColors ] = useState<ColorsProps>({} as ColorsProps);

  function getColors () {
    switch (item.types[0].type.name) {
      case 'grass':
        setColors({
          primary:'#48D0B0',
          secondary:'#3E8570',
        })
        break;
      case 'water':
        setColors({
          primary:'#77BDFE',
          secondary:'#4689C7',
        })
        break;
      case 'fire':
        setColors({
          primary:'#FB6C6C',
          secondary:'#DE5050',
        })
        break;
      case 'electric':
        setColors({
          primary:'#FFCE4B',
          secondary:'#BF8400',
        })
        break;
      default:
        setColors({
          primary:'#48D0B0',
          secondary:'#3E8570',
        })
    }
  }

  useEffect(() => {
    getColors();
  }, [])


  return (
    <TouchableOpacity style={[styles.container, { backgroundColor:colors.primary }]}>

      <Text style={[styles.textId, { color:colors.secondary}]}>
        {`#00${item.id}`}
      </Text>

      <Text style={styles.textName}>{item.name}</Text>

      <View style={styles.contentArea}>


        <View style={{paddingTop: 10}}>
          {item.types.map((type) =>(
            <View key={type.type.name} style={[styles.typeArea, {backgroundColor: colors.secondary}]}>
              <Text style={styles.type}>{type.type.name}</Text>
            </View>
          ))}
        </View>

        <SvgFromUri
          uri={item.sprites.other.dream_world.front_default}
          width={79}
          height={70}
        />
      </View>

    </TouchableOpacity>
  );
}