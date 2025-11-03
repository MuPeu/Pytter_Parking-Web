import { Image, TouchableOpacity } from "react-native"
import { PixContainer, TitlePage, ButtonClose, ButtonContainer, QrContainer, BackGroundQr, QrImage, BackGround } from "./styles/pix"
import { useNavigation } from '@react-navigation/native';

export default function PIX() {
    const navigation = useNavigation()
    
    return (
        <PixContainer>
            <BackGround source={require('../assets/imgs/backgroundDefault.png')}>
                <ButtonContainer>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ButtonClose source={require('../assets/imgs/buttonClose.png')}/>
                    </TouchableOpacity>
                </ButtonContainer>
                <TitlePage>PIX</TitlePage>
                <QrContainer>
                    <BackGroundQr>
                        <QrImage source={require('../assets/imgs/qrCode.png')}/>
                    </BackGroundQr>
                </QrContainer>
            </BackGround>
        </PixContainer>
    )
}