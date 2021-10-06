import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';
import {Screen, Logo, DivButtonRegister, DivButtonLogin } from '../styles/styles'
import {PressableLoginButton, PressableRegisterButton} from '../components/Button';

export default function Login(){
  return(

    <><Screen>
      <Logo source={require('../assets/logo.png')} />
    </Screen>
    <DivButtonRegister>
    <PressableRegisterButton
      onPress={() => alert('Tela de Registro')}
      title='REGISTRAR'
      bgColor='#FF9C33' />
    </DivButtonRegister>

    <DivButtonLogin>
    <PressableLoginButton
        onPress={() => alert('Tela de Login')}
        title='ENTRAR'
        bgColor='#00663D' />
    </DivButtonLogin>
    {/* <DivButton>
        <Text>Teste</Text>
    </DivButton> */}
    </>

  )
}



// export default class Login extends Component(){
  
//   render(){
//     return(

//       <><Screen>
//         <Logo source={require('../assets/logo.png')} />
//       </Screen>
//       <DivButtonRegister>
//       <PressableRegisterButton
//         onPress={() => true}
//         title='REGISTRAR'
//         bgColor='#FF9C33' />
//       </DivButtonRegister>

//       <DivButtonLogin>
//       <PressableLoginButton
//           onPress={() => alert('You tapped the button!')}
//           title='ENTRAR'
//           bgColor='#00663D' />
//       </DivButtonLogin>
//       {/* <DivButton>
//           <Text>Teste</Text>
//       </DivButton> */}
//       </>

//     )
//   }
// }

