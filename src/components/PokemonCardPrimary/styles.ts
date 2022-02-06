import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#48D0B0',
    height:120,
    width: 169,
    maxWidth:'48%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10,
    marginBottom: 20,
    // borderWidth: 2,
    // borderRadius: 5,
    // borderColor: '#000',
    padding: 15,
  },
  textId: {
    fontSize: 16,
    color: '#3E8570',
    fontWeight: 'bold',
    alignSelf: 'flex-end',

  },
  textName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFF',
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
    textTransform: 'capitalize',
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold',
    zIndex: 3,
  }
});