import React, { Component } from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  MainScreen, 
  DivTopo, 
  DivTitleScreen, 
  DivRecipeScreen, 
  InputSearchField, 
  DivSearch, 
  Lupa, 
  DivMenu,
  TitleScreenText,
  IconTitle,
  MenuImage } from '../styles/styles'
import {PressableMenuButton, PressableRegisterButton} from '../components/Button';

export default function TelaPrincipal({navigation}){
  return(
    <MainScreen>
      <DivTopo>
        <DivSearch>
          <Lupa source={require('../assets/lupa.png')} />
          <InputSearchField
          placeholder='Pesquisar receitas'
          style={{height:35}}
          type="text"
          onChangeText={(text) => true}
          value={true}
          ></InputSearchField>
        </DivSearch>
        <DivMenu>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <MenuImage source={require('../assets/drawer.png')}/>
          </TouchableOpacity>
        </DivMenu>
      </DivTopo>
      <DivTitleScreen>
        <TitleScreenText texto="RECEITAS"/>
        <IconTitle source={require('../assets/livro-receitas.png')} />
      </DivTitleScreen>
      <ScrollView>
        <DivRecipeScreen>
          <Text>CONTEUDO1</Text>
          <Text>CONTEUDO2</Text>
          <Text>CONTEUDO3</Text>
          <Text>CONTEUDO4</Text>
          <Text>CONTEUDO5</Text>
          <Text>CONTEUDO6</Text>
          <Text>CONTEUDO7</Text>
          <Text>CONTEUDO8</Text>
          <Text>CONTEUDO9</Text>
          <Text>CONTEUDO0</Text>
          <Text>CONTEUDO</Text>
          <Text>CONTEUDO</Text>
          <Text>CONTEUDO</Text>
          <Text>CONTEUDO</Text>
          <Text>CONTEUDO</Text>
          <Text>CONTEUDO</Text>
          <Text>CONTEUDO</Text>
          <Text>CONTEUDO</Text>
          <Text>CONTEUDO</Text>
          <Text>CONTEUDO</Text>
          <Text>CONTEUDO</Text>
          <Text>CONTEUDO</Text>
          <Text>CONTEUDO</Text>
          <Text>CONTEUDO</Text>
          <Text>CONTEUDO</Text>
          <Text>CONTEUDO</Text>
          <Text>CONTEUDO</Text>
          <Text>CONTEUDO</Text>
          <Text>CONTEUDO</Text>
          <Text>CONTEUDO</Text>
          <Text>CONTEUDO</Text>
          <Text>CONTEUDO</Text>
          <Text>CONTEUDO</Text>
          <Text>CONTEUDO</Text>
          <Text>CONTEUDO</Text>
          <Text>CONTEUDO</Text>
          <Text>CONTEUDO</Text>
          <Text>CONTEUDO</Text>
          
        </DivRecipeScreen>
      </ScrollView>
    </MainScreen>
  )
}