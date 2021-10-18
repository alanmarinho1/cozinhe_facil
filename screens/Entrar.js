import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {Screen, InputTextField, Logo} from '../styles/styles'
import PressableEnterButton from '../components/Button';
import { firebase } from '@react-native-firebase/auth';
import Login from './Login';



export default function Entrar({navigation}){

    state = {
        email: '',
        password: '',
        isAuthenticated: false,
    };
    login = async() => {
        const {email, password} = this.state

        try{
            const user = await firebase.auth().signInWithEmailAndPassword(email, password)

            this.setState({isAuthenticated: true})
            console.log(user)
        } catch(err) {
            console.log(err)
        } 
    }
 
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
                <TouchableOpacity style={styles.enterButton} onPress={this.login}>
                    <Text style={styles.enterButtonText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.backButtonText}>VOLTAR</Text>
                </TouchableOpacity>
                {this.state.isAuthenticated ? alert('Login realizado com sucesso'): null}
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