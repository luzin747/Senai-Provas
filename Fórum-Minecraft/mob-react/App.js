import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Routes from './components/routes';
import Dicas from './src/pages/Topics/Dicas/Dicas'
import Login from './src/pages/Login/Login'
// import Dicas from './src/pages/Topics/Dicas/Dicas'

export default function App() {
  return (
    <NavigationContainer>

      {/* <Routes /> */}
      <MyStack />

    </NavigationContainer>


  );

}

const Stack = createStackNavigator();

function MyStack() {
  return (
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
      <Stack.Screen name="Dicas" component={Dicas}
        options={{
          title: '',
          headerTransparent: true,
          headerShow: false,
          headerLeft: null
        }} />
    </Stack.Navigator>
  );
}




