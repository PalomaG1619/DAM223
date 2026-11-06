
import { useState } from "react";
import { View, Text, ActivityIndicator, KeyboardAvoidingView, Button, 
    Platform, Switch, StyleSheet,  
    BackHandler,
    TextInput} from "react-native";

export default function ActivityIndicatorScreen() {
  const [cargando, setCargando] = useState(false);
  const [esGrande, setEsGrande] = useState(false);
  const [cambiarColor, setCambiarColor] = useState(false);

  const handleEnviar = () => {
    setCargando(true);
    setTimeout(() => {
      setCargando(false);
    }, 4000);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={20}
      style={styles.container}
      >
    <TextInput
      placeholder="Ingrese su mensaje"
      style={styles.input}
    />
    <View style={styles.switchContainer}>
        {cargando ? (
            <ActivityIndicator 
            size={esGrande ? "large" : "small"} 
            color={cambiarColor ? "#00bfff" : "#ff00fb"} 
            />
        ) : (
            <Button 
            title="Enviar" 
            onPress={handleEnviar} 
            />
        )}
    </View>

    <View style={styles.switchBox}>
        <View style={styles.switchRow}>
            <Text style={styles.switchTextl}> Hacer más grande</Text>
            <Switch
            value={esGrande}
            onValueChange={setEsGrande}
            />
    </View>
    <View style={styles.switchRow}>
        <Text style={styles.switchTextl}> Cambiar color</Text>
        <Switch
            value={cambiarColor}
            onValueChange={setCambiarColor}
        />
    </View>
    </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 20,
    color: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
  },
  action : {
    height: 40,
    justifyContent:'center',
    marginBottom: 20,
  },
  switchBox : {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    backgroundColor: "#fff",
  },
  switchRow : {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  switchTextl : {
    fontSize: 16,
  },
});