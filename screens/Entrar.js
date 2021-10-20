import React, { Component, useState, useEffect } from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  KeyboardAvoidingViewBase,
  KeyboardAvoidingViewComponent
} from 'react-native';
import {Screen, InputTextField, Logo} from '../styles/styles'
import PressableEnterButton from '../components/Button';
import { firebase } from '@react-native-firebase/auth';


export default function Entrar({navigation}){
 
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [errorLogin, setErrorLogin] = useState("")

    const loginFirebase = () => {

    } 

    useEffect(() => {

    }, []);
    return(
        <Screen>
            <Logo source={require('../assets/logo.png')} />
            <KeyboardAvoidingView>  
                <InputTextField 
                placeholder='Digite seu e-mail'
                type="text"
                onChangeText={(text) => setEmail(text)}
                value={email}
                />
                <InputTextField
                placeholder='Digite sua senha'
                secureTextEntry={true}
                type="text"
                onChangeText={(text) => setSenha(text)}
                value={senha}
                />
                <TouchableOpacity style={styles.enterButton} onPress={() => true}>
                    <Text style={styles.enterButtonText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.backButtonText}>VOLTAR</Text>
                </TouchableOpacity>
                {errorLogin === true ? alert("email ou senha inválidos") : false}

                {/* {this.state.isAuthenticated ? () => navigation.navigate('TelaPrincipal'): null} */}
            </KeyboardAvoidingView>
        </Screen>
    )
}

// export default function Entrar({navigation}){

//     // state = {
//     //     email: '',
//     //     password: '',
//     //     isAuthenticated: false,
//     // };
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const [isAuthenticated, setIsAuthenticated] = useState(false)
    
//     // login = async() => {
//     //     //const {email, password} = this.state
        


//     //     try{
//     //         const user = await firebase.auth().signInWithEmailAndPassword(email, password)

//     //         setIsAuthenticated(true)
//     //         console.log(user)
//     //     } catch(err) {
//     //         alert('Email/senha incorretos')
//     //     } 
//     // }
 
//     return(
//         <Screen>
//             <KeyboardAvoidingView>
//                 <Logo source={require('../assets/logo.png')} />
//                 <InputTextField 
//                 placeholder='Digite seu e-mail'
//                 type="text"
//                 value={email}
//                 onChangeText={(text) => setEmail(text)}
//                 />
//                 <InputTextField
//                 secureTextEntry={true}
//                 placeholder='Digite sua senha'
//                 type="text"
//                 value={password}
//                 onChangeText={text => setPassword(text)}
//                 />
//                 <TouchableOpacity style={styles.enterButton} onPress={() => true}>
//                     <Text style={styles.enterButtonText}>LOGIN</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
//                     <Text style={styles.backButtonText}>VOLTAR</Text>
//                 </TouchableOpacity>
//                 {/* {this.state.isAuthenticated ? () => navigation.navigate('TelaPrincipal'): null} */}
//             </KeyboardAvoidingView>
//         </Screen>
        
//     )
// }

const styles = StyleSheet.create({
    enterButton: {
        left: 22,
        width: 150,
        height: 45,
        padding: 10,
        borderRadius: 10,
        top: 380,
        alignItems:'center',
        backgroundColor: '#00663D'
    },
    enterButtonText:{
        width: 80,
        height: 35,
        alignSelf: 'center',
        bottom: 5,
        fontSize: 23,
        color: '#FFF'
    },
    backButton: {
        left: 190,
        width: 150,
        height: 45,
        padding: 10,
        borderRadius: 10,
        top: 335,
        alignItems:'center',
        backgroundColor: '#FF9C33'
    },
    backButtonText:{
        width: 82,
        height: 35,
        alignSelf: 'center',
        bottom: 5,
        fontSize: 23,
        color: '#000'
    }
})