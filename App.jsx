import Login from './src/screens/Login';
import SingIn from './src/screens/SingIn';
import SingUp from './src/screens/SingUp';
import Home from './src/screens/Home';
import Historico from './src/screens/Historico';
import Entrada from './src/screens/Entrada';
import Saida from './src/screens/Saida';
import Pagamento from './src/screens/Pagamento';
import Debito from './src/screens/Debito';
import Credito from './src/screens/Credito';
import PIX from './src/screens/PIX';
// import Cep from './src/screens/CEP';

import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, SafeAreaView } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Login',
  screenOptions: {
    headerShown: false
  },
  screens: {
    Login: Login,
    SingIn: SingIn,
    SingUp: SingUp,
    Home: Home,
    Historico: Historico,
    Entrada: Entrada,
    Saida: Saida,
    Pagamento: Pagamento,
    Debito: Debito,
    Credito: Credito,
    PIX: PIX,
    // Cep: Cep
  }
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'ALoveOfThunder': require('./src/assets/fonts/a-love-of-thunder.ttf'),
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#6C6965', justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#fff" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar hidden />
      <Navigation />
    </SafeAreaView>
  );
}
