import React from 'react';
import {Text,
  View,
  StatusBar,
} from 'react-native';
import {DivEvaluation, 
    DivTopo, 
    DivTitleScreen, 
    TitleScreenText, 
    TextOne, 
    TextTwo,
    DivTexts} from './styles'

export default function Avaliacao(){
    return (
        <View style={{backgroundColor: '#FFF5EB'}}>
            <StatusBar backgroundColor= '#FF9C33'/>
            <DivTopo>
            </DivTopo>
            <DivTitleScreen>
                <TitleScreenText texto="AVALIAÇÃO"/>
            </DivTitleScreen>
            <DivEvaluation>
                <DivTexts>
                    <TextOne>O QUE ACHOU DO TUTORIAL?</TextOne>
                    <TextTwo>AVALIE!</TextTwo>
                </DivTexts>
                
                

            </DivEvaluation>
        </View>
    )
}