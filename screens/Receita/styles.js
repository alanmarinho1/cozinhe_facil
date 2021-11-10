import React from "react";
import styled from "styled-components/native";

export const ImageTopo = styled.Image`

    position: absolute;
    width: 375px;
    height: 145px;
    box-shadow: 0px 47px 11px rgba(255, 255, 255, 0.5);
    border-radius: 1px;
`;

export const DivIngredients = styled.View`
    position: absolute;
    width: 340px;
    height: 400px;
    left: 10px;
    top: 165px;

    background: #FFFFFF;
    border: 1px solid #FFBA70;
    box-sizing: border-box;
    border-radius: 13px;

`

export const RecipeName = styled.Text`

    position: absolute;
    width: 326px;
    height: 50px;
    left: 10px;
    top: 10px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    letter-spacing: 2px;

    color: #04251D;

`

export const Ing = styled.Text`
    position: absolute;
    width: 150px;
    height: 20px;
    left: 100px;
    top: 60px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    letter-spacing: 3.16667px;

    color: #04251D;
`

export const DivItens = styled.View`

    flex: auto;
    position: absolute;
    width: 299px;
    height: 220px;
    left: 20px;
    top: 100px;
    border: 1px solid red;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    display: flex;
    align-items: center;
    letter-spacing: 2.16667px;

    color: #04251D;

`

const InitRecipeButton = styled.TouchableOpacity`
  position: absolute;
    width: 299px;
    height: 52px;
    left: 20px;
    top: 330px;
    align-items: center;
    border-radius: 6px;
    background-color: ${props => props.bgColor};
`;
const InitRecipeText = styled.Text`

    position: absolute;
    width: 200px;
    height: 20px;
    top: 20px;
    align-self: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: 3px;

    color: #FFFFFF;
`;

export const PressableInitRecipeButton = ({ onPress, bgColor, title }) => (
    <InitRecipeButton onPress={onPress} bgColor={bgColor}>
      <InitRecipeText>{title}</InitRecipeText>
    </InitRecipeButton>
  );