import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';
import {Screen, Logo, DivButtonRegister, DivButtonLogin } from '../styles/styles'
import {PressableLoginButton, PressableRegisterButton} from '../components/Button';

export default function TelaPrincipal(){
  return(

    <Screen>
      <Logo source={require('../assets/logo.png')} />
    </Screen>

  )
}