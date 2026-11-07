
import React, { useState, useEffect } from 'react';
import {View, Text, Image, TextInput, Pressable, StyleSheet, ImageBackground, FlatList,
  ActivityIndicator, Keyboard, KeyboardAvoidingView, Platform,
  Alert
} from 'react-native';

export default function App() {

  const [showSplash, setShowSplash] = useState(true);

  const bgMain ={uri:'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200'};
  const logoApp = { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTucMa3oFnQElpQfAKDBAgsWGctduVEZ_uSa2j0oH6yew&s=10' };

  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');

  const [libros, setLibros] = useState([]);
  const [cargando, setCargando] = useState(false);


  useEffect(() => {
    const tiempo = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(tiempo);
  }, []);

  const mostrarAlerta = (titulo, mensaje) => {
    if (typeof window !== 'undefined') {
      window.alert(mensaje ? `${titulo}: ${mensaje}` : titulo);
    } else {
      Alert.alert(titulo, mensaje);
    }
  };

  const agregarLibro = () => {

    Keyboard.dismiss();

    if (
      titulo.trim() === '' ||
      autor.trim() === '' ||
      genero.trim() === ''
    ) {
      mostrarAlerta(
        'Todos los campos son obligatorios'
      );
      return;
    }
    setCargando(true);


    setTimeout(() => {

      const nuevoLibro = {
        id: Date.now().toString(),
        titulo: titulo.trim(),
        autor: autor.trim(),
        genero: genero.trim()
      };

      setLibros((anterior) => [...anterior, nuevoLibro]);

      setTitulo('');
      setAutor('');
      setGenero('');

      setCargando(false);

      mostrarAlerta(
        'Libro guardado correctamente'
      );

    }, 4000);
  };


  if (showSplash) {
    return (
      <ImageBackground
      source={bgMain}
      style={styles.fondo}
      resizeMode="cover"
      >
        <View style={styles.bienvenida}>
          <Image
          source={logoApp}
          style={{width: 110, height: 110, borderRadius: 30, marginBottom: 20}}
          />
          <Text style={styles.tituloBienvenida}>Bienvenido a Libria</Text>
          <Text style={styles.subtituloBienvenida}>Repo 2</Text>
          <ActivityIndicator size="large" color="#FFFFFF" 
          />
          <Text style={styles.subtituloBienvenida}>Cargando Experiencia....</Text>
        </View>
        </ImageBackground>
    );
  }
  
  
  return (
    <ImageBackground
      source={bgMain}
      style={styles.fondo}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >

      <View style={styles.contenedor}>

        <FlatList
          data={libros}
          keyExtractor={(item) => item.id}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.lista}

          ListHeaderComponent={
            <View>

              <Text style={styles.titulo}>Catálogo de Libros</Text>

              <Text style={styles.descripcion}>Registra tus libros favoritos</Text>

              <View style={styles.formulario}>
                <Text style={styles.etiqueta}>Título del libro</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Título del libro"
                  value={titulo}
                  onChangeText={setTitulo}
                />
                <Text style={styles.etiqueta}>Autor</Text>

                <TextInput
                  style={styles.input}
                  placeholder="Nombre del autor"
                  value={autor}
                  onChangeText={setAutor}
                />

                <Text style={styles.etiqueta}>Género</Text>

                <TextInput
                  style={styles.input}
                  placeholder="Género del libro"
                  value={genero}
                  onChangeText={setGenero}
                />

                <Pressable
                  style={[
                    styles.boton,
                    cargando && styles.botonDesactivado
                  ]}
                  onPress={agregarLibro}
                  disabled={cargando}
                >
                  <Text style={styles.textoBoton}>
                    {cargando ? 'Agregando...' : 'Agregar libro'}
                  </Text>
                </Pressable>

                {cargando && (
                  <View style={styles.cargando}>
                    <ActivityIndicator
                      size="large"
                      color="#6C3483"
                    />
                    <Text style={styles.textoCargando}>Guardando libro...</Text>
                  </View>
                )}

              </View>

              <Text style={styles.subtitulo}>Mis libros registrados</Text>
              <Text style={styles.contador}>Total de libros: {libros.length}</Text>

            </View>
          }

          renderItem={({ item }) => (
            <View style={styles.tarjeta}>
              <Text style={styles.nombreLibro}>Título: {item.titulo}</Text>

              <Text style={styles.datos}>Autor: {item.autor}</Text>

              <Text style={styles.datos}>Género: {item.genero}</Text>
            </View>
          )}
        />

      </View>

      </KeyboardAvoidingView>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  bienvenida: {
    flex: 1,
    backgroundColor: '#6C3483',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },

  icono: {
    fontSize: 65,
    marginBottom: 15
  },

  tituloBienvenida: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10
  },

  subtituloBienvenida: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 65
  },

  fondo: {
    flex: 1
  },

  contenedor: {
    paddingTop:105,
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.84)'
  },

  contador: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#6C3483',
  marginBottom: 15
  },

  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#512E5F',
    textAlign: 'center',
    marginTop: 35
  },

  descripcion: {
    fontSize: 16,
    color: '#555555',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 20
  },

  formulario: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    elevation: 4
  },

  etiqueta: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#512E5F',
    marginBottom: 7,
    marginTop: 10
  },

  input: {
    borderWidth: 1,
    borderColor: '#BCA5C9',
    borderRadius: 9,
    padding: 12,
    fontSize: 15,
    backgroundColor: '#FAF7FC'
  },

  boton: {
    backgroundColor: '#6C3483',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 22
  },

  botonDesactivado: {
    backgroundColor: '#999999'
  },

  textoBoton: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold'
  },

  cargando: {
    alignItems: 'center',
    marginTop: 15
  },

  textoCargando: {
    color: '#6C3483',
    marginTop: 8,
    fontWeight: 'bold'
  },

  subtitulo: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#512E5F',
    marginTop: 25,
    marginBottom: 15
  },

  tarjeta: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 3
  },

  nombreLibro: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#512E5F',
    marginBottom: 8
  },

  datos: {
    fontSize: 15,
    color: '#444444',
    marginTop: 3
  },

  vacio: {
    textAlign: 'center',
    color: '#555555',
    fontSize: 14,
    marginBottom: 20
  },

  lista: {
    paddingBottom: 30,
    paddingHorizontal: 20
  }

});