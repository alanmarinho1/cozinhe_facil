import React from "react";
import { View, Image, TouchableOpacity, TextInput } from "react-native";
import styled, { css } from "styled-components/native";
import { Component } from "react";


export const Screen = styled.View`
  background-color: #FFF5EB;
  flex: 1;
`;

export const Logo = styled.Image`
  
  width: 191px;
  height: 207px;
  top: 40px;
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
  top: 130px;
  left: 20px;
`

export const InputTextField = ({placeholder, secureTextEntry, value, onChangeText}) => (
    <InputText placeholder={placeholder} place secureTextEntry={secureTextEntry} value={value} onChangeText={onChangeText}></InputText>
  
);
