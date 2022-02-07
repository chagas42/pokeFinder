import React, { useEffect, useState } from 'react';

import {
  View,
  Text,
  Dimensions
} from 'react-native';

import * as Progress from 'react-native-progress';
import { theme } from '../../global/theme';
import { Stats } from '../../services/api';

import { styles } from './styles';

interface StatusProps {
  data: Stats,
}

export const Status = ({data}:StatusProps) => {

  const [color, setColor] = useState<string>('');

  useEffect(() => {
    if(data.base_stat >= 50 && data.base_stat < 80){
      setColor(theme.colors.elements.electric.primary);
    } else if( data.base_stat >= 80) {
      setColor(theme.colors.elements.grass.primary);
    } else {
      setColor(theme.colors.elements.fire.primary);
    }
  },[]);

  return (
  <View style={styles.status}>
    <Text style={styles.statsName}>{data.stat.name}</Text>

    <Text style={styles.statsNumber}>{data.base_stat}</Text>

    <Progress.Bar
      progress={data.base_stat / 100}
      width={(Dimensions.get('window').width / 10) * 5.7}
      // style={{}}
      borderWidth={0}
      color={color}
    />
  </View>
  );
}