import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/theme';



export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: getStatusBarHeight() + 25,
    paddingHorizontal: 25,
    height: '45%'
  },
  iconsArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameArea: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontFamily: theme.fonts.text600,
    fontSize: 36,
    color: theme.colors.primary,
    textTransform: 'capitalize',
  },
  order: {
    fontSize: 18,
    fontFamily: theme.fonts.text600,
    color: theme.colors.primary,
    marginRight: 15,
  },
  content: {
    backgroundColor: theme.colors.primary,
    height: '60%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -35
  },
  typesArea: {
    flexDirection: 'row',
    marginTop: 15
  },
  type: {
    marginRight: 10,
    paddingVertical: 5,
    paddingHorizontal:10,
    opacity: 0.5,
    borderRadius: 15
  },
  typeText: {
    textTransform: 'capitalize',
    color: theme.colors.primary
  },
  imageArea: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -150
  },
  additionalsInfo: {
    marginTop: 20,
    height: 55,
    width: '100%',
    // backgroundColor: theme.colors.dark,
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between'

  },
  aboutArea: {
    height: '100%',
    justifyContent: 'space-between',
  },
  weightArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  weightText: {
    alignSelf: 'center',
    color: theme.colors.mediumGray
  },
  aboutText: {
    fontFamily: theme.fonts.text600,
    marginLeft: 5,
    marginRight: 3
  },
  divisor: {
    width: 2,
    height: 60,
    backgroundColor: theme.colors.primaryGray
  },
  mainAbility:{
    fontFamily: theme.fonts.text600,
    fontSize: 14,
    textTransform: 'capitalize',
  },
  statsArea: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  statsTitle: {
    fontFamily: theme.fonts.text600,
    fontSize: 18,
  },
  stats: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between'
  }
});