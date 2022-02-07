import { Dimensions, StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  status: {
    flexDirection: 'row',
    marginTop: 18,
    justifyContent: 'space-between'
  },
  statsName: {
    width:( Dimensions.get('window').width / 10 ) * 3,
    textTransform: 'capitalize',
  },
  statsNumber: {
    marginRight: 20,
  }
});