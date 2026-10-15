import { View, Text, StyleSheet, Button } from 'react-native';
import { useState } from 'react';

export const Perfil = ({ nombre, carrera, materia, cuatrimestre }) => {
  const[mostrar, setMostrar] = useState(false);

  return (
    <View style={styles.card}>
      <Text>Nombre: {nombre}</Text>

        { mostrar && 
         <>
         <Text>Carrera: {carrera}</Text>
         <Text>Materia: {materia}</Text>
         <Text>Cuatrimestre: {cuatrimestre}</Text>
         </> 
       }
      <Button
        title="Ver perfil" onPress={ () => setMostrar (true) }></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#e7b7b7ff',
    padding: 20,
    borderRadius: 12,
    margin: 16,
  },
})

