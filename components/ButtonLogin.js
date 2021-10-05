import React from 'react';
import styled from 'styled-components/native';

const ButtonLogin = styled.TouchableOpacity`

  left: 15px;
  width: 150px;
  height: 45px;
  padding: 12px;
  border-radius: 10px;
  background-color: ${props => props.bgColor};
`;
const ButtonLoginText = styled.Text`

  width: 75px;
  height: 25px;
  left: 25px;
  bottom: 3px
  font-size: 20px;
  color: white;
  
`;
const PressableButtonLogin = ({ onPress, bgColor, title }) => (
  <ButtonLogin onPress={onPress} bgColor={bgColor}>
    <ButtonLoginText>{title}</ButtonLoginText>
  </ButtonLogin>
);
export default PressableButtonLogin;