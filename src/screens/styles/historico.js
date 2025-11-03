import styled from "styled-components/native"
import * as Font from "expo-font"

export const HistoricoContainer = styled.View`
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

export const TextNumVagas = styled.Text`
  font-size: 45px;
  font-family: 'ALoveOfThunder';
  color: white;
  text-align: center;
`

export const ButtonText = styled.Text`
  font-size: 45px;
  font-family: 'ALoveOfThunder';
  color: black;
`

export const ButtonsHistorico = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 55px;
`

export const BackGroundPlaca = styled.ImageBackground`
  width: 365px;
  height: 85px;
  align-items: center;
  justify-content: center;
`

export const ButtonRegistro = styled.TouchableOpacity`
  width: 235px;
  height: 83px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`

export const ButtonContainer = styled.View`
    padding-left: 25px;
`

export const ButtonBack = styled.Image`
    width: 40px;
    height: 30px;
`

export default function Placa() {
  const [cep, setCep] = useState('')
  const [data, setData] = useState(null)

  function buscarPlaca() {

    return (
      <ButtonRegistro onPress={() => navigation.navigate('Saida')}>
        <BackGroundPlaca source={require('../../assets/imgs/rectangle/placa.png')}>
          <ButtonText>{data.placa}</ButtonText>
        </BackGroundPlaca>
      </ButtonRegistro>
    )
  }
}