import React, { Component, useEffect, useState, useReducer } from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  StatusBar,
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
import database from '@react-native-firebase/database'

export default function TelaPrincipal({navigation}){
  
  const [pesquisa, setPesquisa] = useState("")
  const [carregando, setCarregando] = useState(true)
  const [dados, setDados] = useState([])
  const [value, setValue] = useState([])
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  function readFunction(){

    database().ref("/").on('value', snapshot => {
      const main=[];
      snapshot.forEach((child) => {
        main.push({
          key:child.val()
        })
      })
      setValue(main)
      setDados(main)
      
      return () => database().ref('/').off('value', onValueChange);
    });
  }
  
  function AcessoReceita({value}){
    
    return(
      <FlatList 
        data={value}
        keyExtractor={(item) => item.indice}
        renderItem={({item}) => <ListItem data={item} />}
      />
    )
  }

  const ListItem = ({data}) => {
    return(
      <DivRecipeScreen>
        <TouchableOpacity
         style={{height: '100%', width: '100%'}}
         onPress={() => navigation.navigate('Receita', {key: data.key, indice: data.key.indice})}>
          <IconFood source={{
          uri: data.key.imagem,
        }} />
          <RecipeName>{data.key.nome}</RecipeName>
          <RecipeType>Tipo da receita</RecipeType>
        </TouchableOpacity>
      </DivRecipeScreen>
    );
  }

  useEffect(() => {
    readFunction()
    setDados(value)
  }, [])
      

  useEffect(
    () => {
      if(pesquisa === ''){
        readFunction()
      }else{
        const newValue = dados.filter(item => {
          if (item.key.nome.toLowerCase().includes(pesquisa.toLowerCase())) {
            return true
          } else {
            return false
          }
        }) 
        setValue(newValue)
      }
    
  }, [pesquisa]);
  
  return(
    <View>
      <StatusBar backgroundColor= 'transparent' translucent={true}/>
      <DivTopo>
        <DivSearch>
          <Lupa source={require('../../assets/lupa.png')}/>
          <InputSearchField
          placeholder='Pesquisar receitas'
          style={{height:35}}
          type="text"
          value={pesquisa}
          onChangeText={(text) => setPesquisa(text) }
          />
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
        <AcessoReceita value={value} />
      </ViewReceitas>
    </View>
  )
}