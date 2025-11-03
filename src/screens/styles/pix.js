import styled from "styled-components/native"
import * as Font from "expo-font"

export const PixContainer = styled.View`
    padding-top: 47px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #6C6965;
    gap: 15px;
`

export const QrContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const BackGroundQr = styled.View`
  width: 280px;
  height: 280px;
  align-items: center;
  justify-content: center;
  background-color: white;
`

export const BackGround = styled.ImageBackground`
    flex: 1;
    width: 100%;
    height: 100%;
`

export const TitlePage = styled.Text`
  text-align: center;
  font-size: 70px;
  font-family: 'ALoveOfThunder';
  color: white;
`
export const QrImage = styled.Image`
  width: 275px;
  height: 275px;
`

export const ButtonContainer = styled.View`
    padding-left: 340px;
`

export const ButtonClose = styled.Image`
    width: 30px;
    height: 30px;
`