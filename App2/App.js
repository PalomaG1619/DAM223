
/* 1. ZONA IMPORTACIONES*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,} from 'react-native';
import { Saludo} from './components/Saludo';
import { Saludo2} from './components/Saludo2';

/*2. ZONA MAIN (componentes ó Screens)*/
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Mundo React Native</Text>
      <Image source={require('./assets/wave.png')} />
      <Saludo></Saludo>
      <Saludo2></Saludo2>
      <StatusBar style="auto" />
    </View>
  );
}

/* 3. ZONA ESTILOS*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

