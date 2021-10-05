import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';
import {Screen, Logo, DivButtonRegistrar, DivButtonLogin } from '../styles/styles'
import PressableButtonLogin from '../components/ButtonLogin';
import PressableButton from '../components/Button';


export default function Login(){
  return(

    <><Screen>
      <Logo source={require('../assets/logo.png')} />
      {/* <PressableButtonLogin
        onPress={() => true}
        title='ENTRAR'
        bgColor='#00663D' /> */}



      {/* <PressableButton
      onPress={() => true}
      title='REGISTRAR'
      bgColor='#FF9C33' /> */}
    </Screen>
    <DivButtonRegistrar>
    <PressableButton
      onPress={() => true}
      title='REGISTRAR'
      bgColor='#FF9C33' />
    </DivButtonRegistrar>
    <DivButtonLogin>
    <PressableButtonLogin
        onPress={() => alert('You tapped the button!')}
        title='ENTRAR'
        bgColor='#00663D' />
    </DivButtonLogin>
    {/* <DivButton>
        <Text>Teste</Text>
    </DivButton> */}
    </>

  )
}

