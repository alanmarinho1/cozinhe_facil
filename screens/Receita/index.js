import React from 'react';
import {Text,
  View,
  StatusBar,
  FlatList,
} from 'react-native';
import {ImageTopo, DivIngredients, RecipeName, Ing, DivItens, PressableInitRecipeButton, ListIng} from './styles'


export default function Receita({route, navigation}){
    const {key, indice} = route.params
    return(
        <View style={{backgroundColor: '#FFF5EB'}}>
            <StatusBar backgroundColor= 'transparent'/>
            <ImageTopo source={{
          uri: key.imagem,
        }}/>
            <DivIngredients>

                <RecipeName>{key.nome}</RecipeName>
                <Ing>{key.secao[0].nome}</Ing>

                <DivItens contentContainerStyle={{alignItems: 'center'}}>
                   <FlatList 
                        data={key.secao[0].conteudo}
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
                 onPress={() => navigation.navigate('Preparo', {preparo: key, indice: indice})}
                 title='INICIAR RECEITA'
                 bgColor='#00663D'/>

            </DivIngredients>
        </View>
        
    )

}