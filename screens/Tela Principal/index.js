import React, { Component, useEffect, useState } from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
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
  const [carregando, setCarregando] = useState(true)
  const [dados, setDados] = useState({})

  // function renderizandoItens(item){
  //   <>
  //   <IconFood source={require('../../assets/macarronada.jpg')} />
  //   <Text>{item.nome}</Text>
  //   </>

  // }
  
  function AcessoReceita(){
    return(

      <DivRecipeScreen>
        <IconFood source={require('../../assets/macarronada.jpg')} />
      </DivRecipeScreen>
    //   <DivRecipeScreen>
    //   {
    //     carregando ? <ActivityIndicator /> : (
    //       <FlatList 
    //         data={dados}
    //         keyExtractor={({_id}, index) => _id}
    //         renderItem={({item}) => (
    //           <><IconFood source={require('../../assets/macarronada.jpg')} />
    //           <Text>{item.nome}</Text></>
    //         )}
    //       />
    //     )
    //   }
    // </DivRecipeScreen>

    )
  }

      

  useEffect(
    () => {
      // fetch('https://raw.githubusercontent.com/adrianosferreira/afrodite.json/master/afrodite.json')
      //   .then((resp) => resp.json())
      //   .then((json) => setDados(json))
      //   .catch(() => (alert('Erro ao carregar')))
      //   .finally(() => setCarregando(false))
    
    
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