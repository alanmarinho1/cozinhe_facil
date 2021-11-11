import React from 'react';
import {Text,
  View,
  StatusBar,
  FlatList,
} from 'react-native';
import {ImageTopo} from './styles'

export default function Preparo(){
    return(
        <View style={{backgroundColor: '#FFF5EB'}}>
            <StatusBar backgroundColor= 'transparent'/>
            <ImageTopo source={require('../../assets/macarronada.jpg')}/>
            

        </View>
    )
}