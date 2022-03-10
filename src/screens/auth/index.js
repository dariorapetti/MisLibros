import React, { useState, useReducer, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Button } from 'react-native';
import styles from './styles.js';
import { useDispatch } from 'react-redux';
import { signup, signin } from '../../store/actions/auth.action';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

export const formReducer = (state, action) => {
    if(action.type === FORM_INPUT_UPDATE){
        const inputValues = {
            ...state.inputValues,
            [action.input]: action.value
        }

        const inputValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid
        }

        let formIsValid = true;

        for(const key in inputValidities){
            formIsValid = inputValidities[key] && formIsValid;
        }

        return {
            formIsValid,
            inputValues,
            inputValidities
        }
    }

    return state;
}

const Auth = ({ navigation }) => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState('');
    const [formState, formDispatch] = useReducer(formReducer, {
        inputValues:{
            email: '',
            password: ''
        },
        inputValidities:{
            email: false,
            password: false
        },
        formIsValid: false
    })

    const handleAuth = () => {
        if(isLogin) {
            dispatch(signin(email, password));
        } else {
            dispatch(signup(email, password));
        } 
    }

    const handleInputChange = useCallback((inputIdentifier, inputValue, inputValidity) => {
        formDispatch({
            type: FORM_INPUT_UPDATE,
            value: inputValue,
            isValid: inputValidity,
            input: inputIdentifier
        });
    }, [formDispatch]);

    return (
        <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
            <View style={styles.containerCard}>
                <Text style={styles.formTitle}>{ isLogin ? 'Login' : 'Registro' }</Text>
                <View style={styles.containerForm}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#999"
                        keyboardType='email-address'
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                    />
                    <Text style={styles.label}>Password</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#999"
                        autoCapitalize='none'
                        autoCorrect={false}
                        secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                    />
                </View>
                <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
                    <Text style={styles.linkText}>{ isLogin ? '¿No tienes una cuenta? Regístrate' : '¿Ya tienes una cuenta?' }</Text>
                </TouchableOpacity>
                <Button title={ isLogin ? "Ingresar" : "Registrar" } color='#2E78B7' onPress={() => handleAuth()} />
            </View>
        </KeyboardAvoidingView>
    )
}

export default Auth;