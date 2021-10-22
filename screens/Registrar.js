import React, { Component, useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert
} from 'react-native';
import {Screen, InputTextField, Logo, DivButtonBack} from '../styles/styles'
import {PressableBackButton} from '../components/Button';
import { firebase } from '@react-native-firebase/auth';


export default function Registrar({navigation}){
    
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [errorLogin, setErrorLogin] = useState("")

    const registerFirebase = () => {
        firebase.auth()
            .createUserWithEmailAndPassword(email, senha)
            .then(() => {
                alert("Conta criada com sucesso, favor realizar login");
                navigation.navigate('Entrar')
            })
            .catch(error => {
                setErrorLogin(true)
                if (error.code === 'auth/email-already-in-use') {
                    alert("Email já em uso");
                }

                if (error.code === 'auth/invalid-email') {
                alert("Formato de email inválido");
                }

                if (error.code === 'auth/weak-password') {
                    alert("Favor inserir senha de no minimo 6 caracteres");
                }

                console.error(error);
            });
    } 

    useEffect(() => {

    }, []);
        return(
            <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#FFF5EB'}} behavior="position">
                <Screen>
                    <Logo source={require('../assets/logo.png')} />
                    <InputTextField 
                    placeholder='Digite seu e-mail'
                    type="text"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    />
                    <InputTextField 
                    placeholder='Digite sua senha'
                    type="text"
                    value={senha}
                    onChangeText={(text) => setSenha(text)}
                    />
                    <TouchableOpacity style={styles.registerButton} onPress={registerFirebase}>
                        <Text style={styles.registerButtonText}>REGISTRAR</Text>
                    </TouchableOpacity>
                    <DivButtonBack>
                        <PressableBackButton
                        onPress={() => navigation.goBack()}
                        title='VOLTAR'
                        bgColor='#FF9C33' />
                    </DivButtonBack>
                    {/* {this.state.isAuthenticated ? <Text>Registrado com sucesso</Text>: null} */}
                </Screen>
            </KeyboardAvoidingView>
        )
}

const styles = StyleSheet.create({
    registerButton: {
        left: 22,
        width: 150,
        height: 45,
        padding: 10,
        borderRadius: 10,
        top: 145,
        alignItems:'center',
        backgroundColor: '#00663D'
    },
    registerButtonText:{
        width: 115,
        height: 35,
        alignSelf: 'center',
        bottom: 5,
        fontSize: 22,
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