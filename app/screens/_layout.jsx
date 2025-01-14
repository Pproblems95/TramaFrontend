import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const screensLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="[menuDisplay]" options={{title:'Menú', headerStyle:{backgroundColor:'black'}, headerTitleStyle:{
            color:'white',
            fontSize:40,
            fontWeight:'bold'
        }, headerTitleAlign:'center'}}/>
    </Stack>
  )
}

export default screensLayout

const styles = StyleSheet.create({})