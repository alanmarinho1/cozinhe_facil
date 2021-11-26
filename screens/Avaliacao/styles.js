import React from "react";
import styled, { css } from "styled-components/native";

export const DivTopo = styled.View`
  
  width: 360px;
  height: 60px;
  margin-bottom: 2px;
  background: #FF9C33;
  border-radius: 1px;
`

export const DivTitleScreen = styled.View`

  width: 360px;
  height: 40px;
  align-items: center;
  background: #FF9C33;
  border-radius: 1px;
`
export const DivEvaluation = styled.View`

    width: 340px;
    height: 450px;
    left: 10px;
    top: 10px;
    background: #FFFFFF;
    border: 1px solid #FFBA70;
    box-sizing: border-box;
    border-radius: 13px;
`

export const DivTexts = styled.View`

    width: 335px;
    height: 55px;
    top: 30px;
    border: 1px solid red;

`

export const TitleScreen = styled.Text`

  width: 100px;
  height: 21px;
  top: 10px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #04251D;
`

export const TextOne = styled.Text`


    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 29px;
    text-align: center;
    letter-spacing: -0.333333px;
    color: #04251D;

`

export const TextTwo = styled.Text`

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    letter-spacing: -0.333333px;

    color: #04251D;

`

export const TitleScreenText = ({texto}) => (
    <TitleScreen>{texto}</TitleScreen>
  );