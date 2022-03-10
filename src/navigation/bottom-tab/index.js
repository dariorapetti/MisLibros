import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import ShopStackNavigation from '../shop';
// import CartStackNavigation from '../cart';
import LibroStackNavigation from '../libro';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BottomTabs = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
        <BottomTabs.Navigator 
            initialRouteName='Libros'
            screenOptions={{
                headerShown: false
            }}
            >
            <BottomTabs.Screen 
                name='Libros'
                component={LibroStackNavigation} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name='book' size={20} />
                    )
                }}
                 />
            {/* <BottomTabs.Screen 
                name='' 
                component={CartStackNavigation} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name='star-outline' size={20} />
                    )
                }}/> */}
        </BottomTabs.Navigator>
  );
};


export default BottomTabsNavigator;