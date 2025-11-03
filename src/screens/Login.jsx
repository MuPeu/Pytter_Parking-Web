import { LoginContainer, TitlePage, ButtonsContainer, BackGroundEntrar, ButtonEntrar, BackGroundCadastro, ButtonCadastro, ButtonText, BackGround } from "./styles/login"
import { useNavigation } from "@react-navigation/native";

export default function Login() {
    const navigation = useNavigation()

    return (
        <LoginContainer>
            <BackGround source={require('../assets/imgs/backgroundDefault.png')}>
                <TitlePage>Pytter Parking</TitlePage>
                <ButtonsContainer>
                    <ButtonEntrar onPress={() => navigation.navigate('SingIn')}>
                        <BackGroundEntrar source={require('../assets/imgs/rectangle/entrar.png')}>
                            <ButtonText>Entrar</ButtonText>
                        </BackGroundEntrar>
                    </ButtonEntrar>
                    <ButtonCadastro onPress={() => navigation.navigate('SingUp')}>
                        <BackGroundCadastro source={require('../assets/imgs/rectangle/cadastrar-se.png')}>
                            <ButtonText>Cadastro</ButtonText>
                        </BackGroundCadastro>
                    </ButtonCadastro>
                </ButtonsContainer>
            </BackGround>
        </LoginContainer>
    )
}