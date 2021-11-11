import React, { Component, useEffect, useState } from 'react';
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
  const [dados, setDados] = useState({})
  const [value, setValue] = useState([])

  function readFunction(){

    database().ref("/").on('value', snapshot => {
      const main=[];
      snapshot.forEach((child) => {
        main.push({
          key:child.val()
        })
      })
      setValue(main)
      console.log(main)
      return () => database().ref('/').off('value', onValueChange);
    });
  }
  
  function AcessoReceita(){
    return(
      <FlatList 
        data={value}
        keyExtractor={(item) => item._id}
        renderItem={({item}) => <ListItem data={item} />}
      />
    )
  }

  const ListItem = ({data}) => {
    return(

      <DivRecipeScreen>
        {/* {console.log(data.key.secao[0].conteudo)} */}
        <TouchableOpacity
         style={{height: '100%', width: '100%'}}
         onPress={() => navigation.navigate('Receita', data.key)}>
          <IconFood source={require('../../assets/macarronada.jpg')} />
          <RecipeName>{data.key.nome}</RecipeName>
          <RecipeType>Tipo da receita</RecipeType>
        </TouchableOpacity>
      </DivRecipeScreen>
    )
  }
      

  useEffect(
    () => {
      readFunction()
      if(pesquisa === ''){
        setValue(pesquisa)
      }else{
        setValue(
          value.filter(item => {
            if (item.key.nome.toLowerCase().indexOf(pesquisa.toLowerCase()) > -1) {
              console.log('ta procurando')
              return true
            } else {
              console.log('deu em nada')
              return false
            }
          })
        )
      }
    
  }, [pesquisa]);
  
  return(
    <View>
      <StatusBar backgroundColor= '#FF9C33'/>
      <DivTopo>
        <DivSearch>
          <Lupa source={require('../../assets/lupa.png')}/>
          <InputSearchField
          placeholder='Pesquisar receitas'
          style={{height:35}}
          type="text"
          onChangeText={(text) => setPesquisa(text)}
          value={pesquisa}
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
        <AcessoReceita />
      </ViewReceitas>
    </View>
  )
}