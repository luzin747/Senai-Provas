import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/pages/login/login';
import Home from './src/pages/Home/index';
import Registro from './src/pages/ResgistroVacinas/index';
import HistoricoVacinas from './src/pages/HistoricoVacinas/index';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Registrar Vacinas" component={Registro} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Historico de Vacinas" component={HistoricoVacinas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

