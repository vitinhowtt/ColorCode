// TelaSeguinte.js
import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const TelaSeguinte = ({ route }) => {
  const { nome } = route.params;
  const navigation = useNavigation();

  const navigateToConversaoCorParaValor = () => {
    console.log('Navegando para ConversaoCorParaValor');
    navigation.navigate('ConversaoCorParaValor', { nome });
  };

  const navigateToConversaoValorParaCor = () => {
    console.log('Navegando para ConversaoValorParaCor');
    navigation.navigate('ConversaoValorParaCor', { nome });
  };

  const navigateToSaberMais = () => {
    console.log('Navegando para SaberMais');
    navigation.navigate('SaberMais', { nome });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.largeHeaderText}>
          Bem-vindo ao Color Code
          {nome ? `, ${nome}` : ''}!
        </Text>
        <Text style={styles.contentText}>
          Neste aplicativo você pode fazer a conversão de cores e valores para o
          seu resistor.
        </Text>
        <View style={styles.middleContainer}>
          <Text style={styles.middleText}>Escolha a opção desejada:</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={navigateToConversaoCorParaValor}>
            <Text style={styles.buttonText}>Cor Para Valor</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={navigateToConversaoValorParaCor}>
            <Text style={styles.buttonText}>Valor Para Cor</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={navigateToSaberMais}>
            <Text style={styles.buttonText}>Saber Mais</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TelaSeguinte;
