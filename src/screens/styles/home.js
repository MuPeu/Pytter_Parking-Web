import styled from "styled-components/native"
import * as Font from "expo-font"

export const HomeContainer = styled.View`
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

export const ButtonsContainer = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 100px;
  gap: 100px
`

export const ButtonText = styled.Text`
  font-size: 45px;
  font-family: 'ALoveOfThunder';
  color: black;
`

export const BackGroundHistorico = styled.ImageBackground`
  width: 365px;
  height: 85px;
  align-items: center;
  justify-content: center;
`

export const ButtonHistorico = styled.TouchableOpacity`
  width: 265px;
  height: 83px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`

export const BackGroundEntrada = styled.ImageBackground`
  width: 365px;
  height: 85px;
  align-items: center;
  justify-content: center;
`

export const ButtonEntrada = styled.TouchableOpacity`
  width: 257px;
  height: 83px;;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`

export const BackGroundSaida = styled.ImageBackground`
  width: 365px;
  height: 85px;
  align-items: center;
  justify-content: center;
`

export const ButtonSaida = styled.TouchableOpacity`
  width: 211px;
  height: 83px;;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`

export const CloseContainer = styled.View`
    padding-left: 350px;
`

export const ButtonClose = styled.Image`
    width: 30px;
    height: 30px;
`