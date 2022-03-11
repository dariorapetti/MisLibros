import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabsNavigator from './bottom-tab';
import AuthStackNavigation from './auth';
import { useSelector } from 'react-redux';

const AppNavigation = () => {
    const userId = useSelector(state => state.auth.userId);
    return (
        <NavigationContainer>
            <BottomTabsNavigator />
            {/* { userId ? <BottomTabsNavigator /> : <AuthStackNavigation />}         */}
        </NavigationContainer>
    );
};


export default AppNavigation;