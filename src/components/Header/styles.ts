import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 25,
    paddingLeft: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.secondary,
    height: 155,
    width: '100%',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  greetingArea: {
    flexDirection: 'column',
    marginTop: 20
  },
  greetingText: {
    fontSize: 20,
    fontFamily: theme.fonts.text400,
    color: theme.colors.primary,
  },
  greetingTextBold: { 
    fontSize: 20, 
    fontFamily: theme.fonts.text600,
    color: theme.colors.primary,
    marginLeft: 7 
  },
  nameArea: {
    flexDirection: 'row',
  },
  imgArea:{
    width:147,
    height: 147,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pictureArea:{
    height: 50,
    width: 50,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginTop: 10, 
    backgroundColor: theme.colors.primary,
  },
  picture: {
    height:47,
    width:47,
    borderRadius: 10,
  }
});