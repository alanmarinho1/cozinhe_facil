import React from 'react';
import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
  left: 15px;
  width: 150px;
  height: 45px;
  padding: 12px;
  border-radius: 10px;
  background-color: ${props => props.bgColor};
`;
const ButtonText = styled.Text`

    width: 100px;
    height: 30px;
    left: 20px;
    bottom: 3px
    font-size: 18px;
    color: black;
    
`;
const PressableButton = ({ onPress, bgColor, title }) => (
  <Button onPress={onPress} bgColor={bgColor}>
    <ButtonText>{title}</ButtonText>
  </Button>
);
export default PressableButton;