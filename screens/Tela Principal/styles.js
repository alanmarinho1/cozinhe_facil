import React from "react";
import { View, Image, TouchableOpacity, TextInput } from "react-native";
import styled, { css } from "styled-components/native";
import { Component } from "react";


export const Screen = styled.View`
  background-color: #FFF5EB;
  flex: 1;
`;

export const ViewReceitas = styled.View`
  background-color: #FFF5EB;
  flex: 100%;

`;

export const DivRecipeScreen = styled.View`
  
  width: 341px;
  height: 123px;
  background: #FFFFFF;
  margin: 10px 0 0 10px;
  border: 1px solid #FFBA70;
  border-radius: 10px;
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

export const DivUserDrawer = styled.View`
  width: 283px;
  height: 100px;
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

export const Lupa = styled.Image`
  
  width: 25px;
  height: 25px;
  position: absolute;
  right: 10px;
  top: 15px;
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
export const IconFood = styled.Image`
  
  position: absolute;
  width: 105px;
  height: 100px;
  left: 10px;
  top: 10px;
  border-radius: 11px;
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

export const RecipeName = styled.Text`
  width: 170px;
  height: 70px;
  left: 140px;
  top: 40px;
  
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #04251D;
`

export const RecipeType = styled.Text`
  position: absolute;
  width: 200px;
  height: 20px;
  left: 130px;
  top: 5px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  text-align: center;
  color: #04251D;
`

export const TitleScreenText = ({texto}) => (
  <TitleScreen>{texto}</TitleScreen>
);

export const InputSearchField = ({placeholder, style, value, onChangeText}) => (
  <InputSearch placeholder={placeholder} style={style} value={value} onChangeText={onChangeText}></InputSearch>

);
