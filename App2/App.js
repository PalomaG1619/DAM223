
/* 1. ZONA IMPORTACIONES*/
import { StyleSheet, View } from 'react-native';
import MenuScreen from './screens/MenuScreen';

/*2. ZONA MAIN (componentes ó Screens)*/
export default function App() {
  return (
     <MenuScreen></MenuScreen>
  );
}

/* 3. ZONA ESTILOS*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

});

