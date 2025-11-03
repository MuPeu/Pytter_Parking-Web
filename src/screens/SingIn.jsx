import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { SingInContainer, TitlePage, InputContainer, BackGroundInput, InputLogin, LoginContainer, ButtonText, ButtonLogin, CloseContainer, BackGroundLogin, ButtonClose, BackGround  } from "./styles/singIn"
import { useNavigation } from '@react-navigation/native';
import api from "../services/api";

export default function SingIn() {
    const navigation = useNavigation();
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    async function handleLogin() {
        try {
            const res = await api.post("/api/usuario/login", {
                usuario,
                senha
            });
            alert(res.data);
            navigation.navigate('Home');
        } catch (err) {
            alert("Usuário ou senha incorretos");
        }
    }

    return (
        <SingInContainer>
            <BackGround source={require('../assets/imgs/backgroundDefault.png')}>
                <CloseContainer>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <ButtonClose source={require('../assets/imgs/buttonClose.png')} />
                    </TouchableOpacity>
                </CloseContainer>
                <TitlePage>Login</TitlePage>
                <InputContainer>
                    <BackGroundInput source={require('../assets/imgs/rectangle/input.png')}>
                        <InputLogin
                            placeholder="Usuário"
                            value={usuario}
                            onChangeText={setUsuario}
                        />
                    </BackGroundInput>
                    <BackGroundInput source={require('../assets/imgs/rectangle/input.png')}>
                        <InputLogin
                            placeholder="Senha"
                            secureTextEntry={true}
                            value={senha}
                            onChangeText={setSenha}
                        />
                    </BackGroundInput>
                </InputContainer>
                <LoginContainer>
                    <ButtonLogin onPress={handleLogin}>
                        <BackGroundLogin source={require('../assets/imgs/rectangle/entrar.png')}>
                            <ButtonText>Login</ButtonText>
                        </BackGroundLogin>
                    </ButtonLogin>
                </LoginContainer>
            </BackGround>
        </SingInContainer>
    )
}