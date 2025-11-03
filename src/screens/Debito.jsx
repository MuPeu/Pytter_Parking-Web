import { TouchableOpacity } from "react-native";
import { DebitoContainer, TitlePage, InputContainer, BackGroundInput, InputDebito, PagarContainer, ButtonText, BackGroundPagar, ButtonPagar, ButtonContainer, ButtonClose, BackGround  } from "./styles/debito"
import { useNavigation } from '@react-navigation/native';

export default function Debito() {
    const navigation = useNavigation()

    return (
        <DebitoContainer>
            <BackGround source={require('../assets/imgs/backgroundDefault.png')}>
                <ButtonContainer>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ButtonClose source={require('../assets/imgs/buttonClose.png')}/>
                    </TouchableOpacity>
                </ButtonContainer>
                <TitlePage>Débito</TitlePage>
                <InputContainer>
                    <BackGroundInput source={require('../assets/imgs/rectangle/input.png')}>
                        <InputDebito placeholder="Número do Cartão"/>
                    </BackGroundInput>
                    <BackGroundInput source={require('../assets/imgs/rectangle/input.png')}>
                        <InputDebito placeholder="Títular do Cartão"/>
                    </BackGroundInput>
                    <BackGroundInput source={require('../assets/imgs/rectangle/input.png')}>
                        <InputDebito placeholder="Validade: Mês e Ano"/>
                    </BackGroundInput>
                    <BackGroundInput source={require('../assets/imgs/rectangle/input.png')}>
                        <InputDebito placeholder="Código de Segurança"/>
                    </BackGroundInput>
                </InputContainer>
                <PagarContainer>
                    <ButtonPagar onPress={() => navigation.navigate('Home')}>
                        <BackGroundPagar source={require('../assets/imgs/rectangle/pagar.png')}>
                            <ButtonText>Pagar</ButtonText>
                        </BackGroundPagar>
                    </ButtonPagar>
                </PagarContainer>
            </BackGround>
        </DebitoContainer>
    )
}