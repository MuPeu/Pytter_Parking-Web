import styled from "styled-components/native"
import * as Font from "expo-font"

export const EntradaContainer = styled.View`
    padding-top: 35px;
    flex: 1;
    align-items: center;
    background-color: #6C6965;
    gap: 100px;
`

export const BackGround = styled.ImageBackground`
    width: 100%;
    height: 100%;
`

export const TitlePage = styled.Text`
  text-align: center;
  font-size: 70px;
  font-family: 'ALoveOfThunder';
  color: white;
`

export const InputContainer = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 120px;
  gap: 75px
`

export const InputEntrada = styled.TextInput`
  font-size: 36px;
  background-color: transparent;
  width: 365px;
  height: 82px;
  padding-left: 10px;
`

export const BackGroundInput = styled.ImageBackground`
  width: 365px;
  height: 85px;
`

export const EnviarContainer = styled.View`
  align-items: center;
  padding-bottom: 25px;
`

export const ButtonText = styled.Text`
  font-size: 45px;
  font-family: 'ALoveOfThunder';
  color: black;
`

export const ButtonEnviar = styled.TouchableOpacity`
  width: 315px;
  height: 83px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`

export const BackGroundEnviar = styled.ImageBackground`
  width: 211px;
  height: 85px;
  align-items: center;
  justify-content: center;
`

export const ButtonContainer = styled.View`
    padding-left: 25px;
`

export const ButtonBack = styled.Image`
    width: 40px;
    height: 30px;
`