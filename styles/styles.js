import React from "react";
import { View, Image, TouchableOpacity, TextInput } from "react-native";
import styled, { css } from "styled-components/native";
import { Component } from "react";


export const Screen = styled.View`
  background-color: #FFF5EB;
  flex: auto;
  margin-bottom: -100px;
`;

export const DivButtonRegister = styled.View`
  background-color: #FFF5EB;
  width: 180px;
  height: 100px;
  left: 180px;
  top: 100px;
`

export const DivButtonLogin = styled.View`
background-color: #FFF5EB;
width: 180px;
height: 100px;
`

export const Logo = styled.Image`
  position: absolute;
  width: 191px;
  height: 207px;
  top: 150px;
  left: 85px;
`;

export const InputText = styled.TextInput`
  width: 320px;
  height: 45px;
  background-color: #FFF;
  align-self: stretch;
  border-color: #EEE;
  border-width: 1px;
  padding: 0 0 0 20px;
  margin-bottom: 10px;
  top: 350px;
  left: 20px;
`
export const InputTextField = ({placeholder, secureTextEntry, value, onChangeText}) => (
    <InputText placeholder={placeholder} secureTextEntry={secureTextEntry} value={value} onChangeText={onChangeText}></InputText>
  
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