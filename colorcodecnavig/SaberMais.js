import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import styles from './styles';

const SaberMais = ({ route }) => {
  const { nome } = route.params;

  return (
    <SafeAreaView style={[styles.sAViewCorValor, styles.containerSaberMais]}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.contentTextt}>
          {`O que é o código de cores nos resistores?`}
        </Text>
        <Text style={styles.contentTexttt}>
          {'\n'}O código de cores em resistores é uma forma visual de
          representar seu valor e tolerância. Geralmente, consiste em faixas
          coloridas que fornecem informações essenciais sobre o componente.
          {'\n'}
          {'\n'}
          <Text style={styles.negrito}>Número de Faixas:</Text>
          {'\n'}
          Resistores comumente possuem de 3 a 4 faixas coloridas. Cada faixa
          desempenha um papel específico na determinação do valor do resistor.
          {'\n'}
          {'\n'}
          {'\n'}
          <Text style={styles.negrito}>Interpretação das Faixas:</Text>
          {'\n'}
          {'\n'}
          <Text style={styles.negrito}>Primeira Faixa:</Text>
          {'\n'}
          Indica o primeiro dígito do valor da resistência.
          {'\n'}
          {'\n'}
          <Text style={styles.negrito}>Segunda Faixa:</Text>
          {'\n'}
          Representa o segundo dígito do valor da resistência.
          {'\n'}
          {'\n'}
          <Text style={styles.negrito}>Terceira Faixa:</Text>
          {'\n'}
          Determina o multiplicador, estabelecendo a ordem de magnitude.
          {'\n'}
          {'\n'}
          <Text style={styles.negrito}>Quarta Faixa (Opcional):</Text>
          {'\n'} Utilizada para indicar a tolerância do resistor.
          {'\n'}
          {'\n'}
          {'\n'}
          <Text style={styles.negrito}>
            Correspondência de Cores e Números:
          </Text>
          {'\n'}
          {'\n'}
          Cada cor é associada a um número. Por exemplo, preto representa 0,
          marrom representa 1 e assim por diante. A combinação de cores nas
          faixas fornece os dígitos necessários para calcular o valor da
          resistência.
          {'\n'}
          {'\n'}
          {'\n'}
          <Text style={styles.negrito}>
            Exemplo Prático: {'\n'}
            {'\n'}
          </Text>
          Para exemplificar, se as faixas são marrom, preto e vermelho, o valor
          do resistor seria calculado como 10 * 10 (multiplicador para
          vermelho), resultando em 100 ohms.
          {'\n'}
          {'\n'}
          {'\n'}
          <Text style={styles.negrito}>
            Tolerância:{'\n'}
            {'\n'}
          </Text>
          Alguns resistores incluem uma faixa adicional para indicar a
          tolerância. Isso é crucial para entender a variação aceitável no valor
          do resistor. Por exemplo, uma faixa de ouro pode representar uma
          tolerância de ±5%.
          {'\n'}
          {'\n'}
          {'\n'}
          <Text style={styles.negrito}>Leitura do Código:</Text>
          {'\n'}
          {'\n'} A habilidade de ler o código de cores é fundamental para
          determinar o valor exato de um resistor. Conhecer a correspondência
          entre cores e números é essencial nesse processo.
          {'\n'}
          {'\n'}
          {'\n'}
          <Text style={styles.negrito}>Aplicações Práticas:</Text>
          {'\n'}
          {'\n'} Compreender o código de cores é vital em eletrônica, design de
          circuitos e manutenção. Essa habilidade é essencial para profissionais
          e entusiastas que lidam com componentes eletrônicos.
        </Text>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default SaberMais;
