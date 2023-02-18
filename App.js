
import { NavigationContainer } from '@react-navigation/native';
import TestScreen from './screens/TestScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

