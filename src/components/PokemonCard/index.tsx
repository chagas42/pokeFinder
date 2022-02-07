import React, { useEffect, useState } from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View
} from 'react-native';

import { SvgUri } from 'react-native-svg';

import { styles } from './styles';
import { PokemonDTO } from '../../services/api';
import { ColorsProps, getColors } from '../../utils/getColors';
interface PokemonCardProps extends TouchableOpacityProps {
  bySeach?: boolean;
  item: PokemonDTO;
}

export const PokemonCard = ({ bySeach, item, ...rest }:PokemonCardProps) => {

  const [ colors, setColors ] = useState<ColorsProps>({} as ColorsProps);

  useEffect(() => {
    setInterval(() => {
      setColors(getColors(item));
    }, 1000)
  }, [])

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.container, { backgroundColor:colors.primary }]}
      {...rest}
    >
      <Text style={[styles.textId, { color:colors.secondary}]} testID="pokemon-id">
        {`#00${item.id}`}
      </Text>
      <Text style={styles.textName} testID="pokemon-name">{item.name}</Text>
      <View style={styles.contentArea}>
        <View style={{paddingTop: 10}}>
          {item.types.map((type) =>(
            <View key={type.type.name} style={[styles.typeArea, {backgroundColor: colors.secondary}]}>
              <Text style={styles.type}>{type.type.name}</Text>
            </View>
          ))}
        </View>
        <SvgUri
          testID="pokemon-svg-image"
          uri={item.sprites.other.dream_world.front_default}
          width={79}
          height={70}
        />
      </View>
    </TouchableOpacity>
  );
}