
/* 1. ZONA IMPORTACIONES*/
import { StyleSheet, View , Text, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SafeAreaEjemplo from '../components/SafeAreaEjemplo';
import ScrollViewEjemplo from '../components/ScrollViewEjemplo';

/*2. ZONA MAIN (componentes ó Screens)*/
export default function SafeScreen() {
  return (
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>

      <Text style={styles.tituloPrincipal}>
        Aqui va la practica 10 - equipo de dulce
      </Text>

      <SafeAreaEjemplo />

      <ScrollViewEjemplo/>
      </SafeAreaView>
  );
}

/* 3. ZONA ESTILOS*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  tituloPrincipal:{
    fontSize:24,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom: 15,
  },

});