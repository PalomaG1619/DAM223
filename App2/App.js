
/* 1. ZONA IMPORTACIONES*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,} from 'react-native';
import { Perfil } from './components/Perfil';

/*2. ZONA MAIN (componentes ó Screens)*/
export default function App() {
  return (
    <View style={styles.container}>
      <Perfil nombre="Paloma Valeria Hurtado" carrera="ITTID" 
      materia="Desarrollo de Aplicaciones Móvil" cuatrimestre="Cuarto" estilo={styles.tarjeta1} />

      <Perfil nombre="Juan Carlos López" carrera="Ingeniería en Sistemas Computacionales"
      materia="Programación Web" cuatrimestre="Segundo" estilo={styles.tarjeta2} />
      
      <Perfil nombre="Tadeo Juárez" carrera="IMA"
      materia="Control y calidad" cuatrimestre="Tercero" estilo={styles.tarjeta3} />

      <StatusBar style="auto" />
    </View>
  );
}

/* 3. ZONA ESTILOS*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  tarjeta1:{backgroundColor:'pink'},
  tarjeta2:{backgroundColor:'orange'},
  tarjeta3:{backgroundColor:'green'},
});

