
import {use, useState} from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

/*2 ZONA DE MAIN (Componentes, screens)*/
export default function SafeAreaEjemplo(){
        const [mensaje, setMensaje] = useState('Bienvenido a nuestra práctica')

        return (
            <SafeAreaView style={StyleSheet.container} edges={['top',  'botton']}>
                <Text style={styles.titulo}>Ejemplo de SafeAreaView</Text>
                <Text style={styles.mensaje}>{mensaje}</Text>
                <Button 
                
                title ="Cambiar mensaje"
                on onPress={() => setMensaje(mensaje === 'Esta es nuestra práctica'
                   ? 'hola': 'Esta es nuestra práctica'
                )}
                />
            </SafeAreaView>
        );
}

/* ZONA DE ESTÉTICA*/
const style = StyleSheet.create({
    container:{
        backgroundColor:'pink',
        padding:20,
        alightItems:'center',
        borderRadius:'10',
    },
    titulo:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10,
    },
    mensaje:{
        fontSize:16,
        marginBottom:10,
    }
    
});