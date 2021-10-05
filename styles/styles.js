import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";


export const Screen = styled.View`
  background-color: #FFF5EB;
  flex: auto;
  margin-bottom: -100px;
`;

export const DivButtonRegistrar = styled.View`
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
  top: 170px;
  left: 87px;
`;

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