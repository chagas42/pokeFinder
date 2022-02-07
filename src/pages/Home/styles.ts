import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginVertical: 25,
    paddingHorizontal: 22,
    fontSize: 24,
    fontWeight: '500',
    color: theme.colors.dark,
  },
  footer: {
    width: '100%',
    alignItems: 'center',
    alignSelf: 'flex-end',
    paddingBottom: 40,
  },
  textInputArea: {
    paddingHorizontal: 22,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    height: 30,
    backgroundColor: theme.colors.primaryGray,
    width: '90%',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  bySeach: {
    height: 100,
    alignItems: 'center',
    marginBottom: 50,
    width: '100%'
  }
});