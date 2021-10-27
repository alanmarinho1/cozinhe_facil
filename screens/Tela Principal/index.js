import React, { Component, useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  ViewReceitas, 
  DivTopo, 
  DivTitleScreen,
  DivRecipeScreen, 
  InputSearchField, 
  DivSearch, 
  Lupa, 
  DivMenu,
  TitleScreenText,
  IconTitle,
  MenuImage,
  IconFood } from './styles'
import {PressableMenuButton, PressableRegisterButton} from '../../components/Button';

export default function TelaPrincipal({navigation}){
  
  const [pesquisa, setPesquisa] = useState("")


  function AcessoReceita(){
    return(
      <DivRecipeScreen>
        <IconFood source={require('../../assets/macarronada.jpg')}/>
      </DivRecipeScreen>
    )
  }

  useEffect(() => {
    AcessoReceita()
    
  }, []);
  
  return(
    <View>
      <DivTopo>
        <DivSearch>
          <Lupa source={require('../../assets/lupa.png')} />
          <InputSearchField
          placeholder='Pesquisar receitas'
          style={{height:35}}
          type="text"
          onChangeText={(text) => setPesquisa(text)}
          value={pesquisa}
          ></InputSearchField>
        </DivSearch>
        <DivMenu>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <MenuImage source={require('../../assets/drawer.png')}/>
          </TouchableOpacity>
        </DivMenu>
      </DivTopo>
      <DivTitleScreen>
        <TitleScreenText texto="RECEITAS"/>
        <IconTitle source={require('../../assets/livro-receitas.png')} />
      </DivTitleScreen>
      <ViewReceitas contentContainerStyle={{alignItems: 'center'}}>
        <AcessoReceita />
      </ViewReceitas>
    </View>
  )
}