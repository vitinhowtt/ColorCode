// TelaInicial.js
import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const TelaInicial = () => {
  const [nome, setNome] = useState('');
  const navigation = useNavigation();

  const onPressEntrar = () => {
    console.log('Nome digitado:', nome);
    // Navegue para a tela correspondente ao botão clicado
    navigation.navigate('TelaSeguinte', { nome });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tituloPosicao}>
        <Text style={styles.titulo}>Color Code</Text>
      </View>
      <View>
        <Image
          style={styles.tinyLogo}
          source={require('@expo/snack-static/react-native-logo.png')}
        />
        <Text style={styles.title}>Digite o seu nome:</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
        <TouchableOpacity style={styles.botao} onPress={onPressEntrar}>
          <Text style={styles.textobut}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TelaInicial;
