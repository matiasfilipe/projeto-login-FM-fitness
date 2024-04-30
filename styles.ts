import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: 'blue',
    paddingHorizontal: 15,
    paddingTop: 40,
  },
  container: {
    alignItems: 'center'
  },
  snack: {
    width: 150,
    height: 150,
  },
  h1: { 
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  h2: {
    color: '#fff',
    fontSize: 15,
  },
  inputArea: {
    width: '100%',
    paddingTop: 40,
  },
  inputLabel: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
    paddingBottom: 7,
  },
  inputField: {
    color: '#fff',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#000',
    fontSize: 15,
    padding: 10,
  },
  aditionals: {
    width: '100%',
  },
  forgotBtnArea: {
    paddingVertical: 20,
    alignSelf: 'flex-end',
  },
  forgotBtnText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff'
  },
  botao: {
    backgroundColor: '#000',
    width: '100%',
    padding: 10,
    marginVertical: 30,
    borderRadius: 5,
  },
  buttonText: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
  },
  signUpArea: {
    flexDirection: 'row',
    marginTop: 30,
  },
  signUpText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
  },
  signUpBtnText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 5,
  },
  footerArea: {
    marginVertical: 30,
  },
  footerText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
  },
 
  cadastro:{
    backgroundColor: '#000',
    width: '100%',
    padding: 10,
    borderRadius: 5,
    marginVertical: 40
  },
  textResetPassword:{
    color: '#FFF',
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingVertical: 120
  }
})