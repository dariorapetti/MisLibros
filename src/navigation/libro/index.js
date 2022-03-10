import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Libros from '../../screens/libros/index';
import DetalleLibro from '../../screens/detalleLibro/index';
import NuevoLibro from '../../screens/nuevoLibro/index';
import { Platform, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../../utils/constants/color';

const Stack = createNativeStackNavigator();

const LibroStackNavigation = () => {
  return (   
        <Stack.Navigator 
            initialRouteName="Libros"
            screenOptions={{
                headerStyle:{
                    backgroundColor: Platform.OS === 'android'  ? COLORS.primary : ''
                },
                headerTintColor: Platform.OS === 'android'  ? 'white' : COLORS.primary,
                headerTitleStyle:{
                    fontWeight: 'bold'
                }
            }}>
            <Stack.Screen 
                name="Libros" 
                component={Libros}
                options={({ navigation }) => (
                    {
                        title: 'Mis Libros',
                        headerRight: () => (
                            <TouchableOpacity onPress={() => navigation.navigate('Nuevo')}>
                                <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>Agregar</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            />
            <Stack.Screen 
                name="Detalle" 
                component={DetalleLibro}
                options={{title: 'Detalle libro'}} 
            />
                
            <Stack.Screen
                name="Nuevo"
                component={NuevoLibro}
                options={{title: 'Nuevo libro'}} 
            />
        </Stack.Navigator>
  );
};


export default LibroStackNavigation;