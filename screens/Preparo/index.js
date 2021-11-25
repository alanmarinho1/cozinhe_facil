import React, {useEffect, useState, useReducer} from 'react';
import {Text,
  View,
  StatusBar,
  FlatList,
  StyleSheet, 
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {ImageTopo, DivTitle, Title, Icon, DivContainerCheck, PressableEndRecipeButton, PressableCancelRecipeButton, DivCheck, StepText} from './styles'
import {FlatlistMultipleChoose} from 'react-native-flatlist-multiple-choose'
import database from '@react-native-firebase/database'


export default function Preparo({route, navigation}){
    const [isSelected, setSelection] = useState(false)
    const [retornoBool, setRetornoBool] = useState(false)
    const [listaPreparo, setListaPreparo] = useState([])
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    const {nome, conteudo} = route.params


    function carregaLista(conteudo){
        const lista = []

        for(let i = 0; i < conteudo.length; i = i + 1){
            lista.push({"descrição": conteudo[i], "checked": false})
        }
        // conteudo.forEach(() => {
        //     lista.push({"descrição": conteudo, i, "checked": false})
        // });

        setListaPreparo(lista)
    }

    useEffect(() => {
        carregaLista(conteudo)
    }, []);
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
                            data={listaPreparo}
                            keyExtractor={(item) => item}
                            overScrollMode= 'auto'
                            renderItem={({item}) => {
                                return(

                                    <DivCheck>
                                        
                                        <StepText>{item.descrição}</StepText>
                                        <CheckBox
                                            style={styles.checkbox}
                                            value={item.checked}
                                            onValueChange={() => {

                                                forceUpdate()
                                                
                                                console.log('retorno elemento antes de alterar: ' + item.checked)
                                                
                                                
                                                
                                                if(item.checked == true){
                                                    item.checked = false
                                                    
                                                }else{
                                                    item.checked = true
                                                    
                                                }
                                                xupeta = listaPreparo.every(elemento => elemento.checked === true)
                                                setRetornoBool(xupeta);
                                                console.log('todos os elementos são true? ' + xupeta)
                                                console.log('retorno elemento depois de alterar: ' + item.checked)
                                                console.log(retornoBool)
                                                console.log(listaPreparo)
                                                
                                                
                                                
                                                if(retornoBool){
                                                    console.log("retornobool true")
                                                }
                                                
                                                
                                                // item.checked ? item.checked = false : item.checked = true
                                            }}
                                            
                                        />
                                    </DivCheck>
                                )
                            }}
                        />
                    {/* <FlatlistMultipleChoose itemStyle={styles.checkbox}  
                    extraData={(item) => item} 
                    data={conteudo}
                    onChangeDatasChoosed={() => setSelection(true)} 
                    customItem={({item}) => {
                        return(
                            <DivCheck>
                                <StepText>{item}</StepText>
                            </DivCheck>
                        )
                    }} 
                    /> */}
                    
            </DivContainerCheck>
            {console.log('botão ' + retornoBool)}
            
            {retornoBool == false ? <PressableEndRecipeButton 
            // onPress={() => alert('Finalizou a receita')}
            title='FINALIZAR RECEITA'
            bgColor='#E0E0E0'
            disabled={true}
            />
            :
            <PressableEndRecipeButton 
            onPress={() => alert('Finalizou a receita')}
            title='FINALIZAR RECEITA'
            bgColor='#00663D'
            />}
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