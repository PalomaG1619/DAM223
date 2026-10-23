
/* 1. ZONA IMPORTACIONES*/
import { StyleSheet, View, Text } from 'react-native';

/*2. ZONA MAIN (componentes ó Screens)*/
export default function PressableScreen() {
  return (
    <View style={styles.container}>
        <Text>Aquí va la practica 11</Text>
        <Text>Equipo de Karen </Text>
     
    </View>
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

});