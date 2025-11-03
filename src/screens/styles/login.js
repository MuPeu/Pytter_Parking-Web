import styled from "styled-components/native"
import * as Font from "expo-font"

export const LoginContainer = styled.View`
    padding-top: 35px;
    flex: 1;
    align-items: center;
    background-color: #6C6965;
    gap: 135px;
`

export const BackGround = styled.ImageBackground`
    width: 100%;
    height: 100%;
`

export const ButtonsContainer = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 125px;
  gap: 100px
`

export const TitlePage = styled.Text`
  text-align: center;
  font-size: 70px;
  font-family: 'ALoveOfThunder';
  color: white;
`

export const ButtonText = styled.Text`
  font-size: 45px;
  font-family: 'ALoveOfThunder';
  color: black;
`

export const BackGroundEntrar = styled.ImageBackground`
  width: 365px;
  height: 85px;
  align-items: center;
  justify-content: center;
`

export const ButtonEntrar = styled.TouchableOpacity`
  width: 235px;
  height: 83px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`

export const BackGroundCadastro = styled.ImageBackground`
  width: 365px;
  height: 85px;
  align-items: center;
  justify-content: center;
`

export const ButtonCadastro = styled.TouchableOpacity`
  width: 363px;
  height: 83px;;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`