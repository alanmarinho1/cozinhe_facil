import React, { Component, useState, useEffect } from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {Screen, InputTextField, Logo} from './styles'
import PressableEnterButton from '../../components/Button';
import { firebase } from '@react-native-firebase/auth';
import Autenticacao from '../../components/Autenticacao';


export default function Entrar({navigation}){
 
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [errorLogin, setErrorLogin] = useState("")

    const loginFirebase = () => {
        firebase.auth()
            .signInWithEmailAndPassword(email, senha)
            .then(() => {
                alert("Login realizado");
                navigation.navigate('TelaPrincipal')
            })
            .catch(error => {
                setErrorLogin(true)
                if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
                alert('Email/senha invalidos');
                }

                if (error.code === 'auth/invalid-email') {
                alert("Formato de email inválido");
                }

                console.error(error);
            });
    } 

    useEffect(() => {

    }, []);
    return(
        <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#FFF5EB'}} behavior="position">
            <Screen>
                <Logo source={require('../../assets/logo.png')} />  
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
                    
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.backButtonText}>VOLTAR</Text>
                </TouchableOpacity>
                {errorLogin === true ? true : false}
                {email === "" || senha === "" ? <TouchableOpacity style={styles.enterButton2} disabled={true}>
                    <Text style={styles.enterButtonText}>LOGIN</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.enterButton2} onPress={loginFirebase}>
                    <Text style={styles.enterButtonText}>LOGIN</Text>
                </TouchableOpacity>}
                
                {/* {this.state.isAuthenticated ? () => navigation.navigate('TelaPrincipal'): null} */}
            
            </Screen>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    enterButton: {
        left: 22,
        width: 150,
        height: 45,
        padding: 10,
        borderRadius: 10,
        top: 180,
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
        top: 145,
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
    },
    enterButton2: {
        left: 22,
        width: 150,
        height: 45,
        padding: 10,
        borderRadius: 10,
        top: 100,
        alignItems:'center',
        backgroundColor: '#00663D'
    },
})