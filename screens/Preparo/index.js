import React, {useState} from 'react';
import {Text,
  View,
  StatusBar,
  FlatList, 
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {ImageTopo} from './styles'


export default function Preparo(){
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return(
        <View style={{backgroundColor: '#FFF5EB'}}>
            <StatusBar backgroundColor= 'transparent'/>
            <ImageTopo source={require('../../assets/macarronada.jpg')}/>
            <CheckBox
                style={{top: 200}}
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                

            />
            
            

        </View>
    )
}