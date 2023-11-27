import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaInicial from './TelaInicial';
import TelaSeguinte from './TelaSeguinte';
import ConversaoCorParaValor from './ConversaoCorParaValor'; // Adicione esta importação
import ConversaoValorParaCor from './ConversaoValorParaCor'; // Adicione esta importação
import SaberMais from './SaberMais';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicial">
        <Stack.Screen
          name="TelaInicial"
          component={TelaInicial}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TelaSeguinte"
          component={TelaSeguinte}
          options={{
            title: 'COLOR CODE', // Define um título para a barra de navegação
            headerStyle: {
              backgroundColor: '#644DFF', // Define a cor de fundo da barra de navegação
            },
            headerTintColor: 'white', // Define a cor do texto da barra de navegação
          }}
        />
        <Stack.Screen
          name="ConversaoCorParaValor"
          component={ConversaoCorParaValor}
          options={{
            title: 'COLOR CODE', // Define um título para a barra de navegação
            headerStyle: {
              backgroundColor: '#644DFF', // Define a cor de fundo da barra de navegação
            },
            headerTintColor: 'white', // Define a cor do texto da barra de navegação
          }}
        />
        <Stack.Screen
          name="ConversaoValorParaCor"
          component={ConversaoValorParaCor}
          options={{
            title: 'COLOR CODE', // Define um título para a barra de navegação
            headerStyle: {
              backgroundColor: '#644DFF', // Define a cor de fundo da barra de navegação
            },
            headerTintColor: 'white', // Define a cor do texto da barra de navegação
          }}
        />
        <Stack.Screen
          name="SaberMais"
          component={SaberMais}
          options={{
            title: 'COLOR CODE', // Define um título para a barra de navegação
            headerStyle: {
              backgroundColor: '#36298A', // Define a cor de fundo da barra de navegação
            },
            headerTintColor: 'white', // Define a cor do texto da barra de navegação
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
