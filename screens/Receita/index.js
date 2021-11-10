import React from 'react';
import {Text,
  View,
  StatusBar,
} from 'react-native';
import {ImageTopo, DivIngredients, RecipeName, Ing, DivItens, PressableInitRecipeButton} from './styles'
import database from '@react-native-firebase/database'

export default function Receita(){
    return(
        <View style={{backgroundColor: '#FFF5EB'}}>
            <StatusBar backgroundColor= 'transparent'/>
            <ImageTopo source={require('../../assets/macarronada.jpg')}/>
            <DivIngredients>
                <RecipeName>Nome da receita</RecipeName>
                <Ing>Ingredientes</Ing>

                <DivItens>
                    <Text>1 pêra 1 banana prata 1 caixa de kiwi 1 maçã 1 caixa de morango 1 cacho de uva verde Um pouco de chantilly Um pouco de suco de pêssego ou laranja Del Vale Um pouco de açúcar
</Text>
                </DivItens>
                <PressableInitRecipeButton
                 onPress={() => console.log('Ir para receita')}
                 title='INICIAR RECEITA'
                 bgColor='#00663D'/>

            </DivIngredients>
        </View>
        
    )

}