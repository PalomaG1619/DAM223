
import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  StyleSheet,
  Alert
} from 'react-native';

export default function App() {

  // CONTADOR Y PRODUCTOS
  const [productos, setProductos] = useState([
    { id: '1', nombre: 'Hamburguesa', precio: 65, cantidad: 0 },
    { id: '2', nombre: 'Sandwich', precio: 45, cantidad: 0 },
    { id: '3', nombre: 'Cafe', precio: 30, cantidad: 0 },
    { id: '4', nombre: 'Refresco', precio: 25, cantidad: 0 },
    { id: '5', nombre: 'Papas', precio: 35, cantidad: 0 }
  ]);

  // DATOS DEL CLIENTE
  const [nombre, setNombre] = useState('');

  // PEDIDO
  const [pedido, setPedido] = useState([]);

  // AUMENTAR CONTADOR
  const aumentar = (id) => {
    setProductos(productos.map(producto =>
      producto.id === id
        ? { ...producto, cantidad: producto.cantidad + 1 }
        : producto
    ));
  };

  // DISMINUIR CONTADOR
  const disminuir = (id) => {
    setProductos(productos.map(producto =>
      producto.id === id
        ? {
            ...producto,
            cantidad: Math.max(0, producto.cantidad - 1)
          }
        : producto
    ));
  };

  // AGREGAR AL PEDIDO
  const agregarPedido = (producto) => {

    if (producto.cantidad === 0) {
      Alert.alert('Aviso', 'Selecciona una cantidad');
      return;
    }

    const existe = pedido.find(item => item.id === producto.id);

    if (existe) {
      setPedido(pedido.map(item =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + producto.cantidad }
          : item
      ));
    } else {
      setPedido([...pedido, { ...producto }]);
    }

    setProductos(productos.map(item =>
      item.id === producto.id
        ? { ...item, cantidad: 0 }
        : item
    ));

    Alert.alert('Correcto', 'Producto agregado al pedido');
  };

  // CALCULAR TOTAL
  const total = pedido.reduce(
    (suma, producto) =>
      suma + producto.precio * producto.cantidad,
    0
  );

  // REGISTRAR PEDIDO
  const registrarPedido = () => {

    if (nombre.trim() === '') {
      Alert.alert('Error', 'Escribe el nombre del cliente');
      return;
    }

    if (pedido.length === 0) {
      Alert.alert('Error', 'Agrega productos al pedido');
      return;
    }

    Alert.alert(
      'Pedido registrado',
      'Cliente: ' + nombre +
      '\nTotal: $' + total +
      '\n¡Gracias por tu compra!'
    );

    setNombre('');
    setPedido([]);
  };

  // DISEÑO DE LA PANTALLA
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>ANTOJO EXPRESS</Text>

      <Text style={styles.subtitulo}>
        Cafeteria - Menu de productos
      </Text>

      <FlatList
        data={productos}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View>
            <Text style={styles.seccion}>
              Nombre del cliente
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Escribe tu nombre"
              value={nombre}
              onChangeText={setNombre}
            />

            <Text style={styles.seccion}>
              Selecciona tus productos
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.tarjeta}>

            <Text style={styles.producto}>
              {item.nombre}
            </Text>

            <Text style={styles.precio}>
              Precio: ${item.precio}
            </Text>

            <View style={styles.controles}>

              <Pressable
                style={styles.botonMenos}
                onPress={() => disminuir(item.id)}
              >
                <Text style={styles.textoBoton}>-</Text>
              </Pressable>

              <Text style={styles.cantidad}>
                {item.cantidad}
              </Text>

              <Pressable
                style={styles.botonMas}
                onPress={() => aumentar(item.id)}
              >
                <Text style={styles.textoBoton}>+</Text>
              </Pressable>

            </View>

            <Pressable
              style={styles.botonAgregar}
              onPress={() => agregarPedido(item)}
            >
              <Text style={styles.textoAgregar}>
                Agregar al pedido
              </Text>
            </Pressable>

          </View>
        )}
        ListFooterComponent={
          <View>

            <Text style={styles.seccion}>
              Mi pedido
            </Text>

            {pedido.map(item => (
              <Text key={item.id} style={styles.detalle}>
                {item.nombre} x {item.cantidad}
                {' = $'}
                {item.precio * item.cantidad}
              </Text>
            ))}

            <Text style={styles.total}>
              TOTAL: ${total}
            </Text>

            <Pressable
              style={styles.botonRegistrar}
              onPress={registrarPedido}
            >
              <Text style={styles.textoAgregar}>
                REGISTRAR PEDIDO
              </Text>
            </Pressable>

          </View>
        }
      />

    </View>
  );
}

// ESTILOS
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5EFE6',
    padding: 20,
    paddingTop: 45
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#7B3F00'
  },

  subtitulo: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 20,
    color: '#654321'
  },

  seccion: {
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    color: '#7B3F00'
  },

  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#C9A27E',
    borderRadius: 10,
    padding: 12,
    fontSize: 16
  },

  tarjeta: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 7,
    borderRadius: 12,
    elevation: 3
  },

  producto: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#4B2E1E'
  },

  precio: {
    fontSize: 16,
    marginTop: 5
  },

  controles: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12
  },

  botonMas: {
    backgroundColor: '#3B9B59',
    padding: 10,
    borderRadius: 8,
    width: 45,
    alignItems: 'center'
  },

  botonMenos: {
    backgroundColor: '#D9534F',
    padding: 10,
    borderRadius: 8,
    width: 45,
    alignItems: 'center'
  },

  textoBoton: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },

  cantidad: {
    fontSize: 20,
    marginHorizontal: 25,
    fontWeight: 'bold'
  },

  botonAgregar: {
    backgroundColor: '#C17B3C',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center'
  },

  textoAgregar: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  },

  detalle: {
    fontSize: 16,
    marginVertical: 5
  },

  total: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#278344',
    marginVertical: 18
  },

  botonRegistrar: {
    backgroundColor: '#7B3F00',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 30
  }

});

