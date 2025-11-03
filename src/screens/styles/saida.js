import styled from "styled-components/native"
import * as Font from "expo-font"

export const SaidaContainer = styled.View`
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
  padding-top: 195px;
  gap: 75px
`

export const InputSaida = styled.TextInput`
  font-size: 36px;
  width: 365px;
  height: 82px;
  background-color: transparent;
  padding-left: 10px;
`

export const BackGroundInput = styled.ImageBackground`
  width: 365px;
  height: 85px;
`

export const PagarContainer = styled.View`
  align-items: center;
  padding-bottom: 25px;
`

export const ButtonText = styled.Text`
  font-size: 45px;
  font-family: 'ALoveOfThunder';
  color: black;
`

export const ButtonPagar = styled.TouchableOpacity`
  width: 315px;
  height: 83px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`

export const BackGroundPagar = styled.ImageBackground`
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