import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const tabsLayout = () => {
  return (
    <Tabs>
        <Tabs.Screen name="home" options={{title:'Bienvenido', headerStyle:{backgroundColor:'black'}, headerTitleStyle:{
            color:'white',
            fontSize:40,
            fontWeight:'bold'
        }, headerTitleAlign:'center'}}/>  
    </Tabs>
  )
}

export default tabsLayout

const styles = StyleSheet.create({})