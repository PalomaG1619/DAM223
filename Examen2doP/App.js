import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import{EncabezadoCafeteria} from './components/EncabezadoCafeteria';
import{TarjetaProducto} from './components/TarjetaProducto';

export default function App() {
  return (
    <View style={StyleSheet.container}>
      <Text> Antojo Express</Text>
      <EncabezadoCafeteria/>
      <TarjetaProducto nombre="Cafe Americano" descripcion="Cafe Negro" Precio="$30"/>
      <TarjetaProducto nombre="Hamburguesa" descripcion="Hamburguesa Normal" Precio="$65"/>
      <TarjetaProducto nombre="Sandwitch" descripcion="Sandwitch con queso amarillo" Precio="$50"/>
    </View>
    );
  
}

const style= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});