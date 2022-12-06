import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header/header';
import Main from './components/Main/main';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './components/routes';

export default function App() {
  return (
    <NavigationContainer>
    <View>
      <Header/>
      
      <Main/>

      <Routes/>
      
      
    </View>
    </NavigationContainer>
  );

}


