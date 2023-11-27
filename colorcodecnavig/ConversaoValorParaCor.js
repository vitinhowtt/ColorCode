import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import styles from './styles';

const ConversaoValorParaCor = () => {
  const [resistencia, setResistencia] = useState('');
  const [faixa1, setFaixa1] = useState(null);
  const [faixa2, setFaixa2] = useState(null);
  const [faixa3, setFaixa3] = useState(null);

  const converterParaCores = () => {
    // Garanta que a resistência seja um número antes de prosseguir
    const resistenciaNumerica = parseInt(resistencia);

    if (!isNaN(resistenciaNumerica)) {
      // Converta a resistência para uma string e obtenha cada dígito
      const resistenciaString = String(resistenciaNumerica);

      // Obtenha os dígitos individuais da resistência
      const digito1 =
        resistenciaString.length >= 1 ? resistenciaString[0] : '0';
      const digito2 =
        resistenciaString.length >= 2 ? resistenciaString[1] : '0';
      const quantidadeZeros = resistenciaString.length - 2;

      // Mapeie os dígitos para cores
      setFaixa1(obterCorPorDigito(digito1));
      setFaixa2(obterCorPorDigito(digito2));
      setFaixa3(obterCorPorQuantidadeZeros(quantidadeZeros));
    } else {
      // Lidar com caso em que a resistência não é um número
      console.warn('Insira um valor numérico válido para a resistência.');
    }
  };

  const obterCorPorDigito = (digito) => {
    // Adapte a correspondência de cores com base no dígito
    const correspondenciaCores = {
      0: 'preto',
      1: 'marrom',
      2: 'vermelho',
      3: 'laranja',
      4: 'amarelo',
      5: 'verde',
      6: 'azul',
      7: 'roxo',
      8: 'cinza',
      9: 'branco',
    };

    return correspondenciaCores[digito];
  };

  const obterCorPorQuantidadeZeros = (quantidadeZeros) => {
    // Adapte a correspondência de cores com base na quantidade de zeros
    const correspondenciaCores = {
      0: 'preto',
      1: 'marrom',
      2: 'vermelho',
      3: 'laranja',
      4: 'amarelo',
      5: 'verde',
      6: 'azul',
      7: 'roxo',
      8: 'cinza',
      9: 'branco',
    };

    // Ajuste o dígito conforme a quantidade de zeros
    const digitoAjustado = parseInt(quantidadeZeros).toString();

    Keyboard.dismiss();

    return correspondenciaCores[digitoAjustado];
  };

  return (
    <View style={(styles.sAViewCorValor, styles.container)}>
      <Text style={styles.contentTextv}>
        Insira o valor da resistência (ohms):
      </Text>
      <TextInput
        keyboardType="numeric"
        value={resistencia}
        onChangeText={(text) => setResistencia(text)}
        style={styles.inputc}
      />
      <TouchableOpacity onPress={converterParaCores} style={styles.botaoc}>
        <Text style={styles.textobutc}>Converter para Cores</Text>
      </TouchableOpacity>

      {/* Exibir as faixas de cores */}
      {faixa1 !== null && (
        <Text style={styles.faixaText}>Faixa 1: {faixa1}</Text>
      )}
      {faixa2 !== null && (
        <Text style={styles.faixaText}>Faixa 2: {faixa2}</Text>
      )}
      {faixa3 !== null && (
        <Text style={styles.faixaText}>Faixa 3: {faixa3}</Text>
      )}
    </View>
  );
};

export default ConversaoValorParaCor;
