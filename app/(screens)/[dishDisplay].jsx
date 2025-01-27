import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import { MinusIcon, PlusIcon } from '../../assets/icons/icons'

const dishDisplay = () => {
  
  const {item} = useLocalSearchParams()
  const [isCombo, setIsCombo] = useState(false)
  console.log(item)
  return (
    <ScrollView>
      <View className='flex flex-col'>
      <Stack.Screen options={{title:item}}/>
      <View className='flex flex-row'>
        <View className='flex flex-1 flex-col align-items-center content-center'>
          <Text className='text-2xl font-bold text-center ml-5 mt-5'>Descripción</Text>
          <Text className='text-lg mt-5 font-bold mx-1 text-justify'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor . </Text>
        </View>
        <View className='flex-1  justify-center align-items-center'>
        <View className=' bg-black m-2 rounded-3xl h-1/2  '></View>
        </View>
        
      </View>
        <View className='flex flex-row'>
          <Pressable className='flex-1' onPress={() => setIsCombo(true)}>

          <View className={`flex-1 rounded-xl bg-3xl m-2 align-items-center justify-center ${isCombo ? 'bg-white border border-black' : 'bg-black'} `} >
            <Text className={`text-2xl font-bold text-center p-5 text-white ${isCombo ?  'text-black' : 'text-white'} `}>Combo</Text>
          </View>
          </Pressable>
          <Pressable className='flex-1' onPress={() => setIsCombo(false)}>

          <View className={`flex-1 rounded-xl bg-3xl m-2 align-items-center justify-center ${!isCombo ? 'bg-white border border-black' : 'bg-black'} `} >
            <Text className={`text-2xl font-bold text-center p-5 text-white ${!isCombo ?  'text-black' : 'text-white'} `}>Sencillo</Text>
          </View>
          </Pressable>
        </View>

        <Text className='text-center text-2xl font-bold mt-5'>Especificaciones</Text>

        <View className='flex '>
          <View className='flex'>
            <Text className='text-lg font-bold ml-5 mt-5'>Cebolla</Text>
            <View className='flex justify-between flex-row mx-5 '>
              <View className='content-center items-center'>
                <MinusIcon size={42} />
              </View>
              <View className='flex-1 content-center items-center justify-center '>
                <Text className='text-2xl'>0</Text>
              </View>
              <View>
                <PlusIcon size={42} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default dishDisplay
