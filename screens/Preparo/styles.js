import React from "react";
import styled from "styled-components/native";

export const ImageTopo = styled.Image`

    position: absolute;
    width: 375px;
    height: 145px;
    box-shadow: 0px 47px 11px rgba(255, 255, 255, 0.5);
    border-radius: 1px;
`;

export const DivTitle = styled.View`
    width: 200px;
    height: 55px;
    top: 150px;
    left: 80px;
    align-items: center;

`

export const Title = styled.Text`

    position: absolute;
    width: 201px;
    height: 19px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 4.16667px;

    color: #04251D;
`

export const Icon = styled.Image`

    width: 45px;
    height: 40px;
    top: 25px;

`

export const DivContainerCheck = styled.View`


    width: 350px;
    height: 260px;
    top: 180px;
    left: 5px;
    align-items: center;

`

export const DivCheck = styled.View`

    width: 335px;
    height: 45px;
    margin: 5px;
    background: #FFFFFF;
    border: 1px solid #FFBA70;
    box-sizing: border-box;
    border-radius: 8px;

`

export const StepText = styled.Text`

    width: 290px;
    height: auto;
    left: 50px;
    top: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 15px;
    letter-spacing: 1.66667px;
    color: #04251D;

`

const EndRecipeButton = styled.TouchableOpacity`

    width: 300px;
    height: 40px;
    top: 185px;
    left: 30px;
    align-items: center;
    border-radius: 6px;
    background-color: ${props => props.bgColor};
`;
const EndRecipeText = styled.Text`


    width: 215px;
    height: 20px;
    top: 12px;
    left: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 3px;
    color: #FFFFFF;
`;

const CancelRecipeButton = styled.TouchableOpacity`

    width: 300px;
    height: 40px;
    top: 190px;
    left: 30px;
    align-items: center;
    border-radius: 6px;
    background-color: ${props => props.bgColor};
`;
const CancelRecipeText = styled.Text`


    width: 215px;
    height: 20px;
    top: 12px;
    left: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 3px;
    color: #FFFFFF;
`;

export const PressableEndRecipeButton = ({ onPress, bgColor, title, disabled }) => (
    <EndRecipeButton onPress={onPress} bgColor={bgColor} disabled={disabled}>
      <EndRecipeText>{title}</EndRecipeText>
    </EndRecipeButton>
  );

export const PressableCancelRecipeButton = ({ onPress, bgColor, title }) => (
<CancelRecipeButton onPress={onPress} bgColor={bgColor}>
    <CancelRecipeText>{title}</CancelRecipeText>
</CancelRecipeButton>
);