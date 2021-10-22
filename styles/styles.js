import React from "react";
import { View, Image, TouchableOpacity, TextInput } from "react-native";
import styled, { css } from "styled-components/native";
import { Component } from "react";


export const Screen = styled.View`
  background-color: #FFF5EB;
  flex: 1;
  border: 1px solid red;
`;

export const MainScreen = styled.View`
  background-color: #FFF5EB;

`;

export const DivRecipeScreen = styled.View`
  
  
`;

export const DivTopo = styled.View`
  
  width: 360px;
  height: 60px;
  margin-bottom: 2px;
  background: #FF9C33;
  border-radius: 1px;
`
export const DivMenu = styled.View`
  width: 50px;
  height: 60px;
  position: absolute;
`
export const DivSearch = styled.View`
  
  width: 300px;
  height: 50px;
  left: 50px;
  margin-top: 5px;
  align-items: flex-end;

`
export const DivTitleScreen = styled.View`
  width: 360px;
  height: 40px;
  background: #FF9C33;
  border-radius: 1px;
`

export const DivButtonRegister = styled.View`
  
  width: 180px;
  height: 100px;
  left: 180px;
  top: 250px;
`
export const DivButtonBack = styled.View`
  background-color: #FFF5EB;
  width: 180px;
  height: 100px;
  left: 180px;
  top: 100px;
`

export const DivButtonLogin = styled.View`

width: 180px;
height: 100px;
top: 150px;
`
export const DivUserDrawer = styled.View`
  width: 283px;
  height: 100px;
  /* background-color: rgba(255,255,255,0.5); */
  border-bottom-width: 1px;
  border-bottom-color: rgba(255,255,255,0.5);
`

export const DivUserData = styled.View`
  width: 200px;
  height: 60px;
  left: 80px;
  top: 15px;
`

export const DrawerUserNoImage = styled.Image`
  width: 60px;
  height: 60px;
  bottom: 40px;
  margin-left: 10px;

`
export const DrawerUserImage = styled.Image`
  width: 60px;
  height: 60px;
  bottom: 40px;
  margin-left: 10px;
  border-radius: 30px;

`

export const Logo = styled.Image`
  
  width: 191px;
  height: 207px;
  top: 40px;
  left: 85px;
`;

export const Lupa = styled.Image`
  
  width: 25px;
  height: 25px;
  position: absolute;
  right: 10px;
  top: 15px;
  z-index: 1px;
`;

export const IconTitle = styled.Image`
  position: absolute;
  width: 30px;
  height: 30px;
  left: 234px;
  top: 5px;
`

export const MenuImage = styled.Image`
  height: 50px;
  width: 30px;
  top: 7px;
  left: 8px;
`

export const InputText = styled.TextInput`
  width: 320px;
  height: 45px;
  background-color: #FFF;
  align-self: stretch;
  border-color: #EEE;
  border-width: 1px;
  padding: 0 0 0 20px;
  margin-bottom: 10px;
  top: 130px;
  left: 20px;
`
export const InputSearch = styled.TextInput`
  
  position: absolute;
  background: #FFBA70;
  width: 300px;
  height: 30px;
  top: 10px;
  align-items: center;
  text-align: center;
  border-color: #EEE;
  border-radius: 50px;
`
export const TitleScreen = styled.Text`
  position: absolute;
  width: 81px;
  height: 21px;
  left: 142px;
  top: 10px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #04251D;
`

export const TitleScreenText = ({texto}) => (
  <TitleScreen>{texto}</TitleScreen>
);
export const InputTextField = ({placeholder, secureTextEntry, value, onChangeText}) => (
    <InputText placeholder={placeholder} place secureTextEntry={secureTextEntry} value={value} onChangeText={onChangeText}></InputText>
  
);

export const InputSearchField = ({placeholder, style, value, onChangeText}) => (
  <InputSearch placeholder={placeholder} style={style} value={value} onChangeText={onChangeText}></InputSearch>

);

// const styles = StyleSheet.create({
//     container: {
//       backgroundColor: '#FFF5EB'
//     },
//     sectionTitle: {
//       fontSize: 24,
//       fontWeight: '600',
//     },
//     sectionDescription: {
//       marginTop: 8,
//       fontSize: 18,
//       fontWeight: '400',
//     },
//     highlight: {
//       fontWeight: '700',
//     },
//   });