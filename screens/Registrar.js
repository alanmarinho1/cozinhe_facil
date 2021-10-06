import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native';
import {Screen, InputTextField, Logo} from '../styles/styles'
import firebase from '@react-native-firebase/app';


export default function Entrar(){
    state = {
        email: '',
        password: '',
        isAuthenticated: false,
    };
        return(
            <Screen>
                <Logo source={require('../assets/logo.png')} />
                <InputTextField 
                placeholder='Digite seu e-mail'
                value={this.state.email}
                onChangeText={email => this.setState({email})}
                />
                <InputTextField 
                placeholder='Digite sua senha'
                value={this.state.password}
                onChangeText={password => this.setState({password})}
                />
                <TouchableOpacity style={styles.enterButton} onPress={() => alert('Insira seu email e senha')}>
                    <Text style={styles.enterButtonText}>REGISTRAR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.backButton} onPress={() => alert('Tela Inicial')}>
                    <Text style={styles.backButtonText}>VOLTAR</Text>
                </TouchableOpacity>
                {this.state.isAuthenticated ? <Text>Registrado com sucesso</Text>: null}
            </Screen>
        )
}

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