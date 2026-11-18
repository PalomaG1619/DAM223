import {View, Text, StyleSheet, Button, Pressable, Card} from 'react-native'
import { useState } from 'react';
import {card} from 'react-native';

export const TarjetaProducto = ({nombre, descripcion, precio}) => {
 
    return(
        <View style={styles.container}>
            <Text> Nombre: {nombre}</Text>
            <Text> Descripcion: {descripcion}</Text>
            <Text> Precio: {precio}</Text>
              <Pressable
                onPress={() => alert ("Nombre: {nombre} Descripcion: {descripcion} Precio: {precio}")}>
                <Text> Ver Producto</Text>
              </Pressable>
       </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor:'pink',
    },
});