import { useState } from 'react';

import {ScrollView,View,Text,Image,TouchableOpacity,TextInput,} from 'react-native';

import { styles } from './styles';


export default function App() {
  const [emailField, setEmailField] = useState<string>('');
  const [email, setEmail] = useState('');
  const [passwordField, setPasswordField] = useState<string>('');
  const [password, setPassword] = useState('');
  const [resetPasswordField, setResetPasswordField] = useState('');
  const [resetPassword, setResetPassword] = useState('');
  const [confirmResetPasswordField, setConfirmResetPasswordField] = useState('');
  const [confirmResetPassword, setConfirmResetPassword] = useState('');
  const [botaoEntrar, setBotaoEntrar] = useState('false')
  const [inicial, setInicial] = useState('true') 
  const [resetPage, setResetPage] = useState('false')
  const [restoredPage, setRestoredPage] = useState('false')
  const [signUpPage, setSignUpPage] = useState('false')
  const [emailRegisterField, setEmailRegisterField] = useState('')
  const [passwordRegisterField, setPasswordRegisterField] = useState('')
  //Função do Esqueci minha senha
  const handleForgotButton = () => {
    setResetPage('true'); 
    setInicial('false')  
  };
  //Função do botao Entrar
  const handleLoginButton = () => {  
    setEmail(emailField);     
    setPassword(passwordField);  
    if(emailField == '' && passwordField != ''){
      alert('Você não digitou o email')
    } else if (emailField != '' && passwordField == ''){ 
      alert('Você não digitou a senha')
    }else if(emailField == '' && passwordField == ''){
      alert('Você não digitou o Email e a senha') 
    }  else {
      alert('Seus dados estão certo')
    }
  };    

  //Função do Cadastre-se  
  const handleSignUpButton = () => {
    setInicial('false') 
    setSignUpPage('true')
     
  };
  
  const handlePasswordReset = () => { 
    setResetPassword(resetPasswordField)
    setConfirmResetPassword(confirmResetPasswordField)
  
      setRestoredPage('true')
      setResetPage('false');
     
  } 
  const handleRegisterButton = () =>{
    if(passwordRegisterField == '' && emailRegisterField != '' ){
      alert('Digite a senha')
  } else if (emailRegisterField == '' && passwordRegisterField != ''){
      alert('Digite o email')
  }  else if (passwordRegisterField == '' && emailRegisterField == ''){
      alert('Digite o email e a senha')
  } else if (emailRegisterField == '' && passwordRegisterField == ''){
    alert('Digite as informações')
  } else{ 
    alert('Cadastrado')
  }
  }
  return (
    <ScrollView style={styles.scrollview}>
      { inicial == 'true' &&  
        <>
          <View style={styles.container}>
            <Image
              style={styles.snack} 
              source={require('./assets/snack-icon.png')}
            />
            <Text style={styles.h1}>FM Fitness</Text>
            <Text style={styles.h2}>
              Bem vindo(a)! Digite seus dados abaixo.
            </Text>

            <View style={styles.inputArea}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.inputField}
                placeholder="Digite seu email"
                placeholderTextColor="#fff"
                value={emailField}
                onChangeText={(t) => setEmailField(t)}
                autoCapitalize="none"
                keyboardType="email-address"
              />
            </View>

            <View style={styles.inputArea}>
              <Text style={styles.inputLabel}>Senha</Text>
              <TextInput
                style={styles.inputField}
                placeholder="**********" 
                placeholderTextColor="#fff"
                value={passwordField}
                onChangeText={(s) => setPasswordField(s)} 
                autoCapitalize="none"
                secureTextEntry
              />
            </View>

            <View style={styles.aditionals}>
              <TouchableOpacity
                style={styles.forgotBtnArea} 
                onPress={handleForgotButton}> 
                <Text style={styles.forgotBtnText}>Esqueci minha senha</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.botao} onPress={handleLoginButton}> 
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <View style={styles.signUpArea}>
              <Text style={styles.signUpText}>Não tem conta?</Text>
              <TouchableOpacity onPress={handleSignUpButton}>
                <Text style={styles.signUpBtnText}>Cadastre-se</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.footerArea}>
              <Text style={styles.footerText}>Criado por Filipe</Text>
            </View>
          </View>
        </> 
      } 
      {resetPage == 'true' && 
        <>
          <View style={styles.container}>
              <Image
                style={styles.snack}
                source={require('./assets/snack-icon.png')}
              />
              <Text style={styles.h1}>Recuperar senha</Text>
              <Text style={styles.h2}>
                Bem vindo(a)! Digite seus dados abaixo.
              </Text>
          </View>
 
          <View style={styles.inputArea}>
            <Text style={styles.inputLabel}>Digite sua nova senha</Text>
            <TextInput
              style={styles.inputField}
              placeholder="**********" 
              placeholderTextColor="#fff"
              value={resetPasswordField} 
              onChangeText={(s) => setResetPasswordField(s)}
              autoCapitalize="none"
              secureTextEntry 
            />
          </View>  

          <View style={styles.inputArea}> 
            <Text style={styles.inputLabel}>Redigite sua nova senha</Text> 
            <TextInput 
              style={styles.inputField}
              placeholder="**********"  
              placeholderTextColor="#fff"
              value={confirmResetPasswordField} 
              onChangeText={(s) => setConfirmResetPasswordField(s)}
              autoCapitalize="none"  
              secureTextEntry
            />
          </View>
          <TouchableOpacity style={styles.cadastro} onPress={handlePasswordReset}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </>
      }
      
      {signUpPage == 'true' &&
        <>
           <View style={styles.container}>
              <Image
                style={styles.snack}
                source={require('./assets/snack-icon.png')}
              />
              <Text style={styles.h1}>Sistema de Cadastro</Text>
              <Text style={styles.h2}>
                Bem vindo(a)! Digite seus dados abaixo.
              </Text>
          </View> 

          <View style={styles.inputArea}>
            <Text style={styles.inputLabel}>Digite seu Email</Text>
            <TextInput 
              style={styles.inputField}
              placeholder="Digite seu email" 
              placeholderTextColor="#fff"
              value={emailRegisterField} 
              onChangeText={(s) => setEmailRegisterField(s)}
              autoCapitalize="none"
              
            />
          </View>  

          <View style={styles.inputArea}> 
            <Text style={styles.inputLabel}>Digite sua senha</Text> 
            <TextInput 
              style={styles.inputField}
              placeholder="**********"   
              placeholderTextColor="#fff" 
              value={passwordRegisterField} 
              onChangeText={(s) => setPasswordRegisterField(s)}
              autoCapitalize="none"  
              secureTextEntry 
            />
          </View>
          <TouchableOpacity style={styles.cadastro} onPress={handleRegisterButton}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </>
      }
     
    </ScrollView> 
  
  )
}

