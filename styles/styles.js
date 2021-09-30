import React from "react";
import { View, Image, Button } from "react-native";
import styled from "styled-components";

export const Screen = styled.View`
  background-color: #FFF5EB;
  flex: auto;
  /*border: 1px solid red;*/
`;

export const Logo = styled.Image`
  position: absolute;
  width: 191px;
  height: 207px;
  top: 170px;
  left: 87px;
  border: 1px red;
`;

export const EnterButtom = styled.Button`
  position: absolute;
  width: 167px;
  height: 52px;
  left: 20px;
  top: 737px;
  color: green;
  background-color: red;
`



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