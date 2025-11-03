import { useEffect, useState } from "react";
import { TouchableOpacity, ActivityIndicator, Alert } from "react-native"
import { HistoricoContainer, TitlePage, TextNumVagas, ButtonsHistorico, ButtonText, BackGroundPlaca, ButtonRegistro, ButtonContainer, ButtonBack, BackGround } from "./styles/historico"
import { useNavigation } from '@react-navigation/native';
import api from "../services/api";

export default function Historico() {
    const navigation = useNavigation();
    const [carros, setCarros] = useState([]);
    const [loading, setLoading] = useState(true);

    async function carregarCarros() {
        try {
            const response = await api.get("/");
            setCarros(response.data.filter(c => !c.horario_saida));
        } catch (error) {
            Alert.alert("Erro", "Não foi possível carregar o histórico.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", carregarCarros);
        return unsubscribe;
    }, [navigation]);

    return (
        <HistoricoContainer>
            <BackGround source={require("../assets/imgs/backgroundDefault.png")}>
                <ButtonContainer>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ButtonBack source={require("../assets/imgs/buttonBack.png")} />
                    </TouchableOpacity>
                </ButtonContainer>
                <TitlePage>Histórico</TitlePage>
                {loading ? (
                    <ActivityIndicator size="large" color="#fff" />
                ) : (
                    <>
                        <TextNumVagas>{carros.length} / 50</TextNumVagas>
                        <ButtonsHistorico>
                            {carros.map((carro) => (
                                <ButtonRegistro
                                    key={carro.id_placa}
                                    onPress={() => navigation.navigate("Saida", { placa: carro.id_placa })}
                                >
                                    <BackGroundPlaca source={require("../assets/imgs/rectangle/placa.png")}>
                                        <ButtonText>{carro.id_placa}</ButtonText>
                                    </BackGroundPlaca>
                                </ButtonRegistro>
                            ))}
                        </ButtonsHistorico>
                    </>
                )}
            </BackGround>
        </HistoricoContainer>
    )
}