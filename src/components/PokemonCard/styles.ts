import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    height:120,
    width: '50%',
    maxWidth:'48%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10,
    marginBottom: 20,
    padding: 15,
  },
  textId: {
    fontSize: 16,
    fontFamily: theme.fonts.text600,
    alignSelf: 'flex-end',
  },
  textName: {
    fontFamily: theme.fonts.text600,
    fontSize: 14,
    color: theme.colors.primary,
    alignSelf: 'flex-start',
    textTransform: 'capitalize',
  },
  contentArea: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },
  typeArea: {
    paddingVertical: 3,
    opacity: 0.6,
    paddingHorizontal: 11,
    borderRadius: 30,
    marginBottom: 5,
  },
  type: {
    fontSize:10,
    fontFamily: theme.fonts.text600,
    textTransform: 'capitalize',
    textAlign: 'center',
    color: theme.colors.primary,
    fontWeight: 'bold',
    zIndex: 3,
  }
});