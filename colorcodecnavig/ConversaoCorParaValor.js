import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const ConversaoValorParaCor = () => {
  const [faixa1, setFaixa1] = useState('');
  const [faixa2, setFaixa2] = useState('');
  const [faixa3, setFaixa3] = useState('');
  const [valorResistencia, setValorResistencia] = useState(null);
  const navigation = useNavigation();

  const converterParaCores = () => {
    // Defina um padrão de correspondência entre cores e números
    const correspondenciaCores = {
      preto:    0,
      marrom:   1,
      vermelho: 2,
      laranja:  3,
      amarelo:  4,
      verde:    5,
      azul:     6,
      roxo:     7,
      cinza:    8,
      branco:   9,
    };

    // Defina um padrão de correspondência entre cores e fatores multiplicadores
    const correspondenciaFatores = {
      preto:     1,
      marrom:    10,
      vermelho:  100,
      laranja:   1000,
      amarelo:   10000,
      verde:     100000,
      azul:      1000000,
      roxo:      10000000,
      cinza:     100000000,
      branco:    1000000000,
    };

    // Converta as cores para valores
    const digito1 = correspondenciaCores[faixa1.toLowerCase()];
    const digito2 = correspondenciaCores[faixa2.toLowerCase()];
    const multiplicador = correspondenciaFatores[faixa3.toLowerCase()];

    // Verifique se as cores são válidas
    if (
      digito1 !== undefined &&
      digito2 !== undefined &&
      multiplicador !== undefined
    ) {
      // Calcule o valor da resistência
      const resistencia = (digito1 * 10 + digito2) * multiplicador;

      // Atualize o estado com o valor da resistência
      setValorResistencia(resistencia.toFixed(2)); // Limita a duas casas decimais
      Keyboard.dismiss();
    } else {
      // Exiba uma mensagem de erro se as cores não forem válidas
      setValorResistencia(null);
      console.warn('Cores inválidas. Verifique as cores inseridas.');
    }
  };

  return (
    <SafeAreaView style={(styles.sAViewCorValor, styles.container)}>
      <View>
        <Text style={styles.contentTextc}>
          Insira as cores das três faixas:
        </Text>
        <TextInput
          placeholder="Faixa 1"
          value={faixa1}
          onChangeText={(text) => setFaixa1(text)}
          style={styles.inputc}
        />
        <TextInput
          placeholder="Faixa 2"
          value={faixa2}
          onChangeText={(text) => setFaixa2(text)}
          style={styles.inputc}
        />
        <TextInput
          placeholder="Faixa 3"
          value={faixa3}
          onChangeText={(text) => setFaixa3(text)}
          style={styles.inputc}
        />
        <Text style={styles.infoText}>
          (A Faixa 4 sempre será dourada, o valor poderá ter uma variação de 5%)
        </Text>
        <TouchableOpacity onPress={converterParaCores} style={styles.botaoc}>
          <Text style={styles.textobutc}>Converter para Valor em Ohms</Text>
        </TouchableOpacity>

        {/* Exibir o valor da resistência */}
        {valorResistencia !== null && (
          <TextInput
            value={`${valorResistencia} Ohms`}
            style={styles.resultado}
            editable={false}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default ConversaoValorParaCor;
