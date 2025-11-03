import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { SingUpContainer, TitlePage, InputContainer, BackGroundInput, InputLogin, CriarContaContainer, ButtonText, BackGroundCadastar, ButtonCadastrar, CloseContainer, ButtonClose,  BackGround  } from "./styles/singUp"
import { useNavigation } from '@react-navigation/native';
import api from "../services/api";

export default function SingUp() {
    const navigation = useNavigation();
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmaSenha, setConfirmaSenha] = useState("");

    async function handleSingUp() {
        if (senha !== confirmaSenha) {
            alert("Senhas não coincidem");
            return;
        }

        try {
            const response = await api.post("/api/usuarios/cadastro", {
                usuario,
                senha,
                confirmaSenha
            });
            console.log("Resposta da API:", response.data);
            alert("Usuário criado com sucesso!");
            navigation.navigate('SingIn');
        } catch (err) {
            console.log("Erro ao criar usuário:", err.response?.data || err.message);
            alert("Erro ao criar usuário: " + (err.response?.data || err.message));
        }
    }

    return (
        <SingUpContainer>
            <BackGround source={require('../assets/imgs/backgroundDefault.png')}>
                <CloseContainer>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ButtonClose source={require('../assets/imgs/buttonClose.png')} />
                    </TouchableOpacity>
                </CloseContainer>
                <TitlePage>Cadastro</TitlePage>
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
                    <BackGroundInput source={require('../assets/imgs/rectangle/input.png')}>
                        <InputLogin
                            placeholder="Confirmar Senha"
                            secureTextEntry={true}
                            value={confirmaSenha}
                            onChangeText={setConfirmaSenha}
                        />
                    </BackGroundInput>
                </InputContainer>
                <CriarContaContainer>
                    <ButtonCadastrar onPress={handleSingUp}>
                        <BackGroundCadastar source={require('../assets/imgs/rectangle/criarConta.png')}>
                            <ButtonText>Criar Conta</ButtonText>
                        </BackGroundCadastar>
                    </ButtonCadastrar>
                </CriarContaContainer>
            </BackGround>
        </SingUpContainer>
    )
}
