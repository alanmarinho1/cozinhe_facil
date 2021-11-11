import React from 'react';
import {Text,
  View,
  StatusBar,
  FlatList,
} from 'react-native';
import {ImageTopo, DivIngredients, RecipeName, Ing, DivItens, PressableInitRecipeButton, ListIng} from './styles'


export default function Receita({route, navigation}){
    const {nome, secao, _id} = route.params
    return(
        <View style={{backgroundColor: '#FFF5EB'}}>
            <StatusBar backgroundColor= 'transparent'/>
            <ImageTopo source={require('../../assets/macarronada.jpg')}/>
            <DivIngredients>
                <RecipeName>{nome}</RecipeName>
                <Ing>{secao[0].nome}</Ing>

                <DivItens contentContainerStyle={{alignItems: 'center'}}>
                   <FlatList 
                        data={secao[0].conteudo}
                        keyExtractor={(item) => item}
                        overScrollMode= 'auto'
                        renderItem={({item}) => {
                            return(
                                <ListIng>{item}</ListIng>
                            )
                        }}
                    />
                </DivItens>
                <PressableInitRecipeButton
                 onPress={() => navigation.navigate('Preparo')}
                 title='INICIAR RECEITA'
                 bgColor='#00663D'/>

            </DivIngredients>
        </View>
        
    )

}