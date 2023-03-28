import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
    
    const[fistNumber, setFirstNumber] = useState(0);
    const[secondNumber, setSecondNumber] = useState(0);
    const[signal, setSignal] = useState('');
    const[stringCalculo, setStringCalculo] = useState('');


    return (
        
        <View style={{flex:1, backgroundColor:'black'}}>
            <StatusBar hidden/>
            <View style={{flexDirection:'row', height:'16.6%'}}>  </View>
        </View>

    );
}