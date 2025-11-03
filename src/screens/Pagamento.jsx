import { useEffect } from "react"
import { PagamentoContainer, ButtonContainer, ButtonBack, TitlePage, ValorTotalText, ButtonsPagamentoContainer, BackGroundDebito, BackGroundCredito, BackGroundPix, ButtonText, ButtonDebito, ButtonCredito, ButtonPIX, BackGround } from "./styles/pagamento"
import * as Font from "expo-font"
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from "react-native";

export default function Pagamento() {
    const navigation = useNavigation()

    return (
        <PagamentoContainer>
            <BackGround source={require('../assets/imgs/backgroundDefault.png')}>
                <ButtonContainer>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ButtonBack source={require('../assets/imgs/buttonBack.png')}/>
                    </TouchableOpacity>
                </ButtonContainer>
                <TitlePage>Pagamento</TitlePage>
                <ValorTotalText>
                    Total a pagar: R$ {valor_total.toFixed(2)}
                </ValorTotalText>
                <ButtonsPagamentoContainer>
                    <ButtonDebito onPress={() => navigation.navigate('Debito')}>
                        <BackGroundDebito source={require('../assets/imgs/rectangle/debito.png')}>
                            <ButtonText>Débito</ButtonText>
                        </BackGroundDebito>
                    </ButtonDebito>
                    <ButtonCredito onPress={() => navigation.navigate('Credito')}>
                        <BackGroundCredito source={require('../assets/imgs/rectangle/credito.png')}>
                            <ButtonText>Crédito</ButtonText>
                        </BackGroundCredito>
                    </ButtonCredito>
                    <ButtonPIX onPress={() => navigation.navigate('PIX')}>
                        <BackGroundPix source={require('../assets/imgs/rectangle/pix.png')}>
                            <ButtonText>PIX</ButtonText>
                        </BackGroundPix>
                    </ButtonPIX>
                </ButtonsPagamentoContainer>
            </BackGround>
        </PagamentoContainer>
    )
}