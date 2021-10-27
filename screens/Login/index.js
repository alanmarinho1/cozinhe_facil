import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';
import {Screen, Logo, DivButtonRegister, DivButtonLogin } from './styles'
import {PressableLoginButton, PressableRegisterButton} from '../../components/Button';

export default function Login({navigation}){
  
  return(

    <Screen>
      <Logo source={require('../../assets/logo.png')} />
      <DivButtonRegister>
        <PressableRegisterButton
          onPress={() => navigation.navigate('Registrar')}
          title='REGISTRAR'
          bgColor='#FF9C33' />
      </DivButtonRegister>
      <DivButtonLogin>
        <PressableLoginButton
            onPress={() => navigation.navigate('Entrar')}
            title='ENTRAR'
            bgColor='#00663D' />
      </DivButtonLogin>
    </Screen>

  )
}