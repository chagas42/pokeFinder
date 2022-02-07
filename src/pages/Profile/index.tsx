import { FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';

import {
  Dimensions,
  FlatList,
  Text,
  View
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { SvgUri } from 'react-native-svg';
import { Status } from '../../components/Stats';
import { theme } from '../../global/theme';
import { RootStackParamList } from '../../routes/stack.routes';
import { PokemonDTO } from '../../services/api';
import { ColorsProps, getColors } from '../../utils/getColors';


import { styles } from './styles';

type Props = StackScreenProps<RootStackParamList, 'Profile'>


export const Profile = ({ navigation, route }:Props) => {

const [ colors, setColors ] = useState<ColorsProps>({} as ColorsProps);


function handleSelectedPokemon(pokemonInfo: PokemonDTO) {
  navigation.navigate('Profile' as never, { pokemonInfo } as never);
}

useEffect(() => {
  setColors(getColors(route.params.pokemonInfo));
}, []);

  return (
    <View style={styles.container}>
      <View style={[
        styles.header,
        {backgroundColor: colors.primary}
      ]}>
        
        <View style={styles.iconsArea}>

          <RectButton
            onPress={() => navigation.goBack()}
            activeOpacity={0}
          >
            <MaterialIcons 
              name="arrow-back-ios"
              size={24}
              color={theme.colors.primary}
            />
          </RectButton>

          <FontAwesome5
            name="heart"
            size={24}
            color={theme.colors.primary}
          />
        </View>
        
        <View style={styles.nameArea}>
          <Text style={styles.name}>{route.params.pokemonInfo.name}</Text>
          <Text style={styles.order}>
            {`#00${route.params.pokemonInfo.order}`}
          </Text>
        </View>

        <View style={styles.typesArea}>
          {route.params.pokemonInfo.types.map(type => (
            <View key={type.type.name} style={[styles.type, { backgroundColor: colors.secondary }]}>
              <Text style={styles.typeText}>{type.type.name}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.imageArea}>
              <SvgUri
                uri={route.params.pokemonInfo.sprites.other.dream_world.front_default}
                width={309}
                height={189}
              />
        </View>

        <View style={styles.additionalsInfo}>
          <View style={styles.aboutArea}>
            <View style={styles.weightArea}>
              <MaterialCommunityIcons
                name="scale-bathroom"
                size={24}
              />
              <Text style={styles.aboutText}>{route.params.pokemonInfo.weight / 10}</Text>
              <Text>kg</Text>
            </View>

            <Text style={styles.weightText}>Weight</Text>
          </View>

          <View style={styles.divisor}/>

          <View style={styles.aboutArea}>
            <View style={styles.weightArea}>
              <FontAwesome5
                name="ruler-vertical"
                size={24}
              />
              <Text style={styles.aboutText}>{route.params.pokemonInfo.height / 10}</Text>
              <Text>m</Text>
            </View>

            <Text style={styles.weightText}>Height</Text>
          </View>

          <View style={styles.divisor}/>

          <View style={styles.aboutArea}>
            <View style={styles.weightArea}>
              <Text style={styles.mainAbility}>{route.params.pokemonInfo.abilities[0].ability.name}</Text>
            </View>

            <Text style={styles.weightText}>Main Skill</Text>
          </View>
        </View>

        <View style={styles.statsArea}>
          <Text style={styles.statsTitle}>Your Stats</Text>
          <FlatList
            data={route.params.pokemonInfo.stats}
            keyExtractor={(item) => item.stat.name}
            renderItem={({item})=> (
              <Status data={item}/>
            )}
          />
        </View>

      </View>
    </View>
  );
}