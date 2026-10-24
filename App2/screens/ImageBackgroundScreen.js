
import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ImageBackground, 
  Button, 
  Image 
} from 'react-native';

export default function ImageBackgroundScreen() {
  // -------------------------------------------------------------
  // ESTADOS (State para la práctica)
  // -------------------------------------------------------------
  const [showSplash, setShowSplash] = useState(true);
  const [blurAmount, setBlurAmount] = useState(0);

  // Imágenes
  // Imagen de fondo profesional / minimalista para la pantalla principal
  const bgMain = { uri: 'https://i.blogs.es/fb2535/hello-orange-2/1366_2000.webp' };
  const logoApp = { uri: 'https://reactnative.dev/img/tiny_logo.png' };

  // -------------------------------------------------------------
  // LÓGICA DE SPLASHSCREEN (3 Segundos)
  // -------------------------------------------------------------
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // -------------------------------------------------------------
  // VISTA 1: SPLASHSCREEN (Fondo Negro + Cuadro Transparente)
  // -------------------------------------------------------------
  if (showSplash) {
    return (
      <View style={styles.splashBlackBackground}>
        {/* Cuadro semi-transparente sobre fondo negro */}
        <View style={styles.transparentCard}>
          <Image 
            source={logoApp} 
            style={styles.logo} 
          />
          <Text style={styles.splashTitle}>Mi Aplicación</Text>
          <Text style={styles.splashSubtitle}>Cargando experiencia...</Text>
        </View>
      </View>
    );
  }

  // -------------------------------------------------------------
  // VISTA 2: PANTALLA PRINCIPAL (ImageBackground)
  // -------------------------------------------------------------
  return (
    <ImageBackground
      source={bgMain}
      style={styles.mainContainer}
      resizeMode="cover"
      blurRadius={blurAmount} // Prop controlada por el State
    >
      <View style={styles.mainCard}>
        <Text style={styles.welcomeText}>¡Bienvenido a tu App!</Text>

        <Button 
          title={blurAmount === 0 ? "Aplicar Desenfoque" : "Quitar Desenfoque"} 
          onPress={() => setBlurAmount(blurAmount === 0 ? 6 : 0)} 
        />
      </View>
    </ImageBackground>
  );
}

// -------------------------------------------------------------
// ZONA DE ESTILOS
// -------------------------------------------------------------
const styles = StyleSheet.create({
  // SplashScreen: Contenedor negro de fondo completo
  splashBlackBackground: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  
  // Cuadro transparente con diseño horizontal estilizado
  transparentCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.12)', // Fondo blanco muy sutil (transparente)
    borderColor: 'rgba(255, 255, 255, 0.2)',    // Borde fino brillante
    borderWidth: 1,
    paddingVertical: 35,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    width: '90%',
  },
  
  logo: {
    width: 80,
    height: 80,
    marginBottom: 15,
    resizeMode: 'contain',
  },
  splashTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  splashSubtitle: {
    color: '#CCCCCC',
    fontSize: 14,
  },

  // Pantalla Principal
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    padding: 30,
    borderRadius: 18,
    alignItems: 'center',
    width: '80%',
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 20,
    textAlign: 'center',
  },
});