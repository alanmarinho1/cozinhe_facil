import React from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';
import {Screen, Logo, EnterButtom} from '../styles/styles'

export default function Login(){
  return(
    <Screen>
      <Logo source={require('../assets/logo.png') }/>
      <EnterButtom title="ENTRAR" color="green"/>
    </Screen>
  )
}

