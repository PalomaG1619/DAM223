import { View, Text, StyleSheet, Button} from 'react-native';
import { useState } from 'react';

export const Perfil = ({ nombre, carrera, materia, cuatrimestre, estilo}) => {
const[mostrar, setMostrar] = useState(false);

   return (
    <View style={[styles.tarjeta, estilo]}>
      <Text style={styles.nombres}>Nombre: {nombre}</Text>
      
        { mostrar && 
         <>
         <Text style={styles.carrera}>Carrera: {carrera}</Text>
         <Text style={styles.otroTexto}>Materia: {materia}</Text>
         <Text style={styles.otroTexto}>Cuatrimestre: {cuatrimestre}</Text>
         </> 
       }
      <Button
        title="Ver perfil" onPress={ () => setMostrar (true) }></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  nombres:{
    fontSize:24,
    fontWeight:800,
    TextTransform: 'uppercase'
  },
  carrera:{
    fontSize:20,
    fontFamily:'Roboto',
    color:'red',
  },
  otroTexto:{
    fontSize:18,
    fontFamily:'Courier',
    color:'blue',
    fontStyle:'italic',
  },
  tarjeta:{
    borderWidth:4,
    borderRadius:12,
    padding:15,
    margin:10,
  },
})

