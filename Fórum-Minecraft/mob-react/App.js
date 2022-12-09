import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './components/routes';
import Login from './src/pages/Login/Login'
import Dicas from './src/pages/Topics/Dicas/Dicas'

export default function App() {
  return (
    <NavigationContainer>

        <Routes />
        
    </NavigationContainer>

    // <View>
    //   <Dicas />

    // </View>
   
  );

}




