import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen'; 
import ExploreScreen from './screens/Explore'; 
import BeveragesScreen from './screens/Beverages'; 
import ProductDetailScreen from './screens/ProductDetail';
import SearchScreen from './screens/Search';  
import FilterScreen from './screens/Filter'; 
import MyCartScreen from './screens/MyCart';        
import FavouriteScreen from './screens/Favorites'; 
import OrderAcceptedScreen from './screens/Orderaccepted'; 

import AccountScreen from './screens/Account'; 
import ErrorScreen from './screens/Error'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Explore" component={ExploreScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Filter" component={FilterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MyCart" component={MyCartScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Favourite" component={FavouriteScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Beverages" component={BeveragesScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ headerShown: false }} />
        <Stack.Screen name="OrderAccepted" component={OrderAcceptedScreen} options={{ headerShown: false }} />

        <Stack.Screen 
          name="Account" 
          component={AccountScreen} 
          options={{ headerShown: false }} 
        />
        
        <Stack.Screen 
          name="Error" 
          component={ErrorScreen} 
          options={{ headerShown: false }} 
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}