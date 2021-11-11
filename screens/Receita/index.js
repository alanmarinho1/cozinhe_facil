import React from 'react';
import {Text,
  View,
  StatusBar,
  FlatList,
} from 'react-native';
import {ImageTopo, DivIngredients, RecipeName, Ing, DivItens, PressableInitRecipeButton} from './styles'
import database from '@react-native-firebase/database'

export default function Receita({route, navigation}){
    const {nome, secao, _id, conteudo} = route.params
    return(
        <View style={{backgroundColor: '#FFF5EB'}}>
            <StatusBar backgroundColor= 'transparent'/>
            <ImageTopo source={require('../../assets/macarronada.jpg')}/>
            <DivIngredients>
                <RecipeName>Nome da receita</RecipeName>
                <Ing>Ingredientes</Ing>

                <DivItens>
                   {/* {console.log(JSON.stringify(secao[0].conteudo))} */}
                   <FlatList 
                        data={secao}
                        keyExtractor={(item) => item}
                        renderItem={({item}) => {
                            {console.log(item)}
                        }}
                    />
                </DivItens>
                <PressableInitRecipeButton
                 onPress={() => console.log('Ir para receita')}
                 title='INICIAR RECEITA'
                 bgColor='#00663D'/>

            </DivIngredients>
        </View>
        
    )

}