import { View, Text, StyleSheet } from 'react-native';

export const Perfil = () => {
  return (
    <View style={styles.card}>
      <Text>Nombre: Paloma Valeria Hurtado</Text>
      <Text>Carrera: Ingeniería en Tecnologías de la Información e Innovación Digital</Text>
      <Text>Materia: Desarrollo de Aplicaciones Móvil</Text>
      <Text>Cuatrimestre: Cuarto</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#e7b7b7ff',
    padding: 20,
    borderRadius: 12,
    margin: 16,
  },
});

