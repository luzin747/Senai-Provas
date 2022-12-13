import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Routes from './components/routes';
import Dicas from './src/pages/Topics/Dicas/Dicas'
import Login from './src/pages/Login/Login'
import Cadastrar from './src/pages/Cadastrar/cadastrar'
// import Dicas from './src/pages/Topics/Dicas/Dicas'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}
        options={{
          title: '',
          headerTransparent: true,
          headerShow: false
        }} />
      <Stack.Screen name="Home" component={Routes}
        options={{
          title: '',
          headerTransparent: true,
          headerShow: false,
          headerLeft: null
        }} />
         <Stack.Screen name="Cadastrar" component={Cadastrar}
        options={{
          title: '',
          headerTransparent: true,
          headerShow: false,
          headerLeft: null
        }} />
      <Stack.Screen name="Dicas" component={Dicas}
        options={{
          title: 'teste',
          headerTransparent: true,
          headerShow: false,
          headerLeft: null
        }} />
    </Stack.Navigator>

    </NavigationContainer>


  );

}





