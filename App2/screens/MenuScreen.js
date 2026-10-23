
/* 1. ZONA IMPORTACIONES*/
import { StyleSheet, View, Button, Text, ImageBackground, ActivityIndicator } from 'react-native';
import {useState} from 'react';
import SafeScreen from './SafeScreen';
import PressableScreen from './PressableScreen';
import TarjetasScreen from './TarjetasScreen';
import TextInputScreen from '/TextInputScreen';
import FlatListScreen from './FlatListScreen';
import ImageBackgroundScreen from './ImageBackgroundScreen';
import ModalBottomScreen from './ModalBottomScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';

/*2. ZONA MAIN (componentes ó Screens)*/
export default function MenuScreen() {
    const [screen, setScreen]= useState('menu');

    switch(screen){
        case 'safe': 
            return <SafeScreen/>
        case 'press':
            return <PressableScreen/>
        case 'tarjetas':
            return <TarjetasScreen/>
        case 'text':
            return <TextInputScreen/>
        case 'flat':
            return <FlatListScreen/>
        case 'image':
            return <ImageBackgroundScreen/>
        case 'modal':
            return <ModalBottomScreen/>
        case 'activity':
            return <ActivityIndicatorScreen/>
        case 'menu':
            default: 
            return (
               <View style={styles.container}>
                   <Text>Menú de prácticas</Text>

                   <Button title="Practica Tarjetas" onPress={()=>setScreen('tarjetas')}></Button>
                   <Button title="Practica SafeAreaView" onPress={()=>setScreen('safe')}></Button>
                   <Button title="Practica Pressable" onPress={()=>setScreen('press')}></Button>
                   <Button title="Practica TextInput" onPress={()=>setScreen('text')}></Button>
                   <Button title="Practica FlatList" onPress={()=>setScreen('flat')}></Button>
                   <Button title="Practica ImageBackground" onPress={()=>setScreen('image')}></Button>
                   <Button title="Practica ModalBottom" onPress={()=>setScreen('modal')}></Button>
                   <Button title="Practica AtivityIndicator" onPress={()=>setScreen('activity')}></Button>
     
               </View>
            );
        }//switch
 }//funcion

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
