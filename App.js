import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/screens/Home';
import Cart from './src/components/screens/Cart';
import { Provider } from 'react-redux';
import store from './src/redux/store';

export default function App() {

  const Stack = createNativeStackNavigator();
  return (
   <Provider store={store} >
     <NavigationContainer>
    <StatusBar 
      hidden={false}
    />
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerStyle: {
          backgroundColor: '#ff4d00',
        },
        headerShadowVisible: false,
    
      }}>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Select-It' , headerTitleStyle:{
          fontSize:24,
          fontWeight:'bold',
        }}} />
        <Stack.Screen name="Cart" component={Cart} options={{
          title:'Your Cart',
          headerTitleStyle:{
            fontSize:24,
            fontWeight:'bold',
          }
          }} />
      </Stack.Navigator>
    </NavigationContainer>
   </Provider>
  );
}
