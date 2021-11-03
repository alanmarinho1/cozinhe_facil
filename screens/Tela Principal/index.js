import React, { Component, useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
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
  IconFood,
  RecipeName,
  RecipeType } from './styles'
import {PressableMenuButton, PressableRegisterButton} from '../../components/Button';
import database from '@react-native-firebase/database'

export default function TelaPrincipal({navigation}){
  
  const [pesquisa, setPesquisa] = useState("")
  const [carregando, setCarregando] = useState(true)
  const [dados, setDados] = useState({})
  const [value, setValue] = useState([])

  function readFunction(){
    database().ref("/0/_id").on('value', snapshot => {
      const main=[];
      snapshot.forEach((child) => {
        console.log(child.val());
        main.push({
          key:child.val()
        })
      })
      setValue(main)
    });
  }
  
  function AcessoReceita(){
    return(

      // <DivRecipeScreen>
      //   <IconFood source={require('../../assets/macarronada.jpg')} />
      //   <RecipeName>Nome da Receita</RecipeName>
      //   <RecipeType>Tipo da receita</RecipeType>
      // </DivRecipeScreen>
          <FlatList 
            data={value}
            keyExtractor={(item) => item.key}
            renderItem={({item}) => (
              <DivRecipeScreen>
                <IconFood source={require('../../assets/macarronada.jpg')} />
                <RecipeName>{item.key}</RecipeName>
                <RecipeType>Tipo da receita</RecipeType>
              </DivRecipeScreen>
            )}
          />

    )
  }

      

  useEffect(
    () => {
      // fetch('https://raw.githubusercontent.com/adrianosferreira/afrodite.json/master/afrodite.json')
      //   .then((resp) => resp.json())
      //   .then((json) => setDados(json))
      //   .catch(() => (alert('Erro ao carregar')))
      //   .finally(() => setCarregando(false))
    readFunction()
    
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