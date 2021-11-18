import React, {useState} from 'react';
import {Text,
  View,
  StatusBar,
  FlatList,
  StyleSheet, 
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {ImageTopo, DivTitle, Title, Icon, DivContainerCheck, PressableEndRecipeButton, PressableCancelRecipeButton, DivCheck, StepText} from './styles'
import { abs } from 'react-native-reanimated';


export default function Preparo({route, navigation}){
    const [isSelected, setSelection] = useState(false)
    const {nome, conteudo} = route.params

    return(

        <View style={{backgroundColor: '#FFF5EB', flex: 1}}>
            <StatusBar backgroundColor= 'transparent' translucent={true}/>
            <View>
                <ImageTopo source={require('../../assets/macarronada.jpg')}/>
            </View>
            <DivTitle>
                <Title>{nome}</Title>
                <Icon source={require('../../assets/Modo-de-Preparo2.png')} />
            </DivTitle>
            <DivContainerCheck>
                    <FlatList 
                            data={conteudo}
                            keyExtractor={(item) => item}
                            overScrollMode= 'auto'
                            renderItem={({item}) => {
                                return(
                                    <DivCheck>
                                        <StepText>{item}</StepText>
                                        <CheckBox
                                            style={styles.checkbox}
                                            disabled={false}
                                            value={isSelected}
                                            onValueChange={setSelection}
                                            
                                        />
                                    </DivCheck>
                                )
                            }}
                        />
            </DivContainerCheck>
            <PressableEndRecipeButton 
            onPress={() => alert('Finalizou a receita')}
            title='FINALIZAR RECEITA'
            bgColor='#00663D'
            />
            <PressableCancelRecipeButton 
            onPress={() => navigation.goBack()}
            title='CANCELAR RECEITA'
            bgColor='#B32B19'
            />
                
        </View>
    )
}

const styles = StyleSheet.create({

    checkbox: {
        position: "absolute",
        // width: 40,
        // height: 35,
        left: 10,
        top: 5,
        borderWidth: 4,
        borderColor: 'red',
    },
  });