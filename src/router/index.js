// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/Auth/Login";
import RegisterScreen from "../screens/Auth/Register";
import HomeScreen from "../screens/Home";

const Stack = createNativeStackNavigator()

const Router = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
        />
        <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
        />
        <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
        />

    </Stack.Navigator>
)

export default Router