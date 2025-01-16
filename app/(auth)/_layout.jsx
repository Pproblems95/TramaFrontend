import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='index' options={{title:'Trama Café', headerStyle:{backgroundColor:'black'}, headerTitleStyle:{
            color:'white',
            fontSize:40,
            fontWeight:'bold'
        }, headerTitleAlign:'center'}}/> 
        <Stack.Screen name='signUp' options={{title:'Regístrate', headerTintColor:'white',headerStyle:{backgroundColor:'black'}, headerTitleStyle:{
            color:'white',
            fontSize:40,
            fontWeight:'bold'
        }, headerTitleAlign:'center'}}/> 
         
        
    </Stack>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})