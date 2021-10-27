import React from 'react';
import styled from 'styled-components/native';
import Image from 'react-native'
import { Menu } from '../styles/styles';

const LoginButton = styled.TouchableOpacity`

  left: 15px;
  width: 150px;
  height: 45px;
  padding: 12px;
  border-radius: 10px;
  background-color: ${props => props.bgColor};
`;
const LoginButtonText = styled.Text`
  width: 90px;
  height: 25px;
  left: 20px;
  bottom: 5px;
  font-size: 23px;
  color: white;
`;

const RegisterButton = styled.TouchableOpacity`
  left: 15px;
  width: 150px;
  height: 45px;
  padding: 12px;
  border-radius: 10px;
  background-color: ${props => props.bgColor};
`;
const RegisterButtonText = styled.Text`

    width: 115px;
    height: 30px;
    left: 10px;
    bottom: 5px;
    font-size: 22px;
    color: black;
    
`;

const EnterButton = styled.TouchableOpacity`
  left: 15px;
  width: 150px;
  height: 45px;
  padding: 12px;
  border-radius: 10px;
  background-color: ${props => props.bgColor};
`;
const EnterButtonText = styled.Text`

    width: 100px;
    height: 30px;
    left: 20px;
    bottom: 3px;
    font-size: 18px;
    color: #FFFFFF;
`;

const BackButton = styled.TouchableOpacity`
  left: 15px;
  width: 150px;
  height: 45px;
  padding: 12px;
  border-radius: 10px;
  background-color: ${props => props.bgColor};
`;
const BackButtonText = styled.Text`

    width: 100px;
    height: 30px;
    left: 25px;
    bottom: 5px;
    font-size: 22px;
    color: black;
`;

export const PressableLoginButton = ({ onPress, bgColor, title }) => (
  <LoginButton onPress={onPress} bgColor={bgColor}>
    <LoginButtonText>{title}</LoginButtonText>
  </LoginButton>
);

export const PressableRegisterButton = ({ onPress, bgColor, title }) => (
  <RegisterButton onPress={onPress} bgColor={bgColor}>
    <RegisterButtonText>{title}</RegisterButtonText>
  </RegisterButton>
);

export const PressableEnterButton = ({ onPress, bgColor, title }) => (
  <EnterButton onPress={onPress} bgColor={bgColor}>
    <EnterButtonText>{title}</EnterButtonText>
  </EnterButton>
);

export const PressableBackButton = ({ onPress, bgColor, title }) => (
  <BackButton onPress={onPress} bgColor={bgColor}>
    <BackButtonText>{title}</BackButtonText>
  </BackButton>
);
//export default PressableLoginButton, PressableRegisterButton;
//export default PressableRegisterButton;