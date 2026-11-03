import React, { useState } from 'react';
import {View, Text, TextInput, StyleSheet, ScrollView, Pressable, Platform,Alert, Switch } from 'react-native';

export default function RegistroEventUnivScreen() {

  // Datos del estudiante
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');

  // Respuestas de los interruptores
  const [taller, setTaller] = useState(null);
  const [constancia, setConstancia] = useState(null);
  const [deportes, setDeportes] = useState(null);

  // Funcion para mostrar alertas
  const mostrarAlerta = (titulo, mensaje) => {

    if (Platform.OS === 'web') {
      window.alert(titulo + '\n\n' + mensaje);
    } else {
      Alert.alert(titulo, mensaje);
    }

  };

  // enviar el registro
  const registrar = () => {

    // Validar campos vacios
    if (
      nombre.trim() === '' ||
      carrera.trim() === '' ||
      semestre.trim() === '' ||
      taller === null ||
      constancia === null ||
      deportes === null
    ) {

      mostrarAlerta(
        'Campos vacios',
        'Por favor, completa todos los campos y activa o desactiva los interruptores.'
      );

      return;
    }

    // Validar que el semestre sea un numero
    if (!/^\d+$/.test(semestre.trim())) {

      mostrarAlerta(
        'Dato incorrecto',
        'El semestre debe contener solamente numeros.'
      );

      return;
    }

    // Preparar los datos
    const datos =
      'Nombre: ' + nombre +
      '\nCarrera: ' + carrera +
      '\nSemestre: ' + semestre +
      '\nTaller: ' + (taller ? 'Sí' : 'No') +
      '\nConstancia: ' + (constancia ? 'Sí' : 'No') +
      '\nDeportes: ' + (deportes ? 'Sí' : 'No');

    // Mostrar registro
    mostrarAlerta('Registro enviado', datos);

  };

  return (
    <ScrollView contentContainerStyle={styles.contenedor}>

      <Text style={styles.titulo}>
        Registro de Evento Universitario
      </Text>

      {/* Nombre completo */}
      <Text style={styles.etiqueta}>
        Nombre completo:
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      {/* Carrera */}
      <Text style={styles.etiqueta}>
        Carrera:
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Escribe tu carrera"
        value={carrera}
        onChangeText={setCarrera}
      />

      {/* Semestre */}
      <Text style={styles.etiqueta}>
        Semestre:
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Escribe tu semestre"
        value={semestre}
        onChangeText={setSemestre}
      />

      {/* Pregunta del taller */}
      <View style={styles.pregunta}>
        <Text style={styles.textoPregunta}>
          ¿Asistirá al taller?
        </Text>

        <Switch
          value={taller === true}
          onValueChange={(valor) => setTaller(valor)}
          trackColor={{
            false: '#999999',
            true: '#5f1e1eff'
          }}
          thumbColor='#522c2cff'
        />
      </View>

      {/* Pregunta de constancia */}
      <View style={styles.pregunta}>
        <Text style={styles.textoPregunta}>
          ¿Requiere constancia?
        </Text>

        <Switch
          value={constancia === true}
          onValueChange={(valor) => setConstancia(valor)}
          trackColor={{
            false: '#999999',
            true: '#5f1e1eff'
          }}
          thumbColor='#522c2cff'
        />
      </View>

      {/* Pregunta de deportes */}
      <View style={styles.pregunta}>
        <Text style={styles.textoPregunta}>
          ¿Participará en actividades deportivas?
        </Text>

        <Switch
          value={deportes === true}
          onValueChange={(valor) => setDeportes(valor)}
          trackColor={{
            false: '#999999',
            true: '#5f1e1eff'
          }}
          thumbColor='#522c2cff'
        />
      </View>

      {/* Boton de registro */}
      <Pressable
        style={styles.boton}
        onPress={registrar}
      >
        <Text style={styles.textoBoton}>
          Enviar Registro
        </Text>
      </Pressable>


    </ScrollView>
  
  );

}

// Estilos de la aplicacion
const styles = StyleSheet.create({

  contenedor: {
    flexGrow: 1,
    backgroundColor: '#d7d7d7ff',
    padding: 25,
    paddingBottom: 40
  },

  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#642424ff',
    marginTop: 65,
    marginBottom: 10
  },

  etiqueta: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 7,
    color: '#522f2fff'
  },

  input: {
    backgroundColor: '#fff8f8ff',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    padding: 12,
    marginBottom: 18,
    fontSize: 16
  },

  pregunta: {
    backgroundColor: '#fff8f8ff',
    borderRadius: 8,
    padding: 14,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  textoPregunta: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#522f2fff',
    flex: 1,
    marginRight: 10
  },

  boton: {
    backgroundColor: '#642424ff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20
  },

  textoBoton: {
    color: '#ffffffff',
    fontSize: 17,
    fontWeight: 'bold'
  }

});