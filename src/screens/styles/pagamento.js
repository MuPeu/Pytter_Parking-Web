import styled from "styled-components/native"
import * as Font from "expo-font"

export const PagamentoContainer = styled.View`
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
  font-family: 'ALoveOfThunder';
  font-size: 60px;
  color: white;
`

export const ValorTotalText = styled.Text`
  text-align: center;
  font-family: 'ALoveOfThunder';
  font-size: 35px;
  color: #FFD700;
  margin-top: 10px;
`

export const ButtonsPagamentoContainer = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 175px;
  gap: 100px;
`

export const ButtonText = styled.Text`
  font-family: 'ALoveOfThunder';
  font-size: 45px;
  color: black;
`

export const ButtonDebito = styled.TouchableOpacity`
  width: 236px;
  height: 85px;
  align-items: center;
  justify-content: center;
  background-color: transparent
`

export const ButtonCredito = styled.TouchableOpacity`
  width: 364px;
  height: 85px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`

export const ButtonPIX = styled.TouchableOpacity`
  width: 120px;
  height: 85px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`

export const BackGroundDebito = styled.ImageBackground`
  width: 191px;
  height: 83px;
  align-items: center;
  justify-content: center;
`

export const BackGroundCredito = styled.ImageBackground`
  width: 211px;
  height: 83px;
  align-items: center;
  justify-content: center;
`

export const BackGroundPix = styled.ImageBackground`
  width: 126px;
  height: 83px;
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