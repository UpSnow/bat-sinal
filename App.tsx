import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Form } from './src/screens/form/Form';
import { Home } from './src/screens/home/Home';


const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Home'>
        <stack.Screen name='Home' component={Home}/>
        <stack.Screen name='Form' component={Form}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}


