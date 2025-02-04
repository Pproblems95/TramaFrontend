import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import { MinusIcon, PlusIcon } from '../../assets/icons/icons'

const dishDisplay = () => {

  const getType = () => {
    switch(type){
      case 'Food':
       return(<View className=''>
        {detailsFood.map((item, index) => {
          const [key, value] = Object.entries(item)[0]
          return(
          <View className='flex-row justify-between items-center content-center  ' key={index}>
            <View className='flex-1'>
              <Text>{key}</Text>
            </View>
            <Pressable className='mt-5 flex-1 mx-5'>
              <View className={`rounded-full ${!isCombo ? 'bg-black' : 'bg-white'}`} >
                  <Text className={`text-xl text-center p-3 px-5 ${!isCombo ? 'text-white' : 'text-black'}`} >No</Text>
                </View>
              </Pressable>
              <Pressable className='mt-5 flex-1 mx-5'>
              <View className={`rounded-full ${isCombo ? 'bg-black' : 'bg-white'}`} >
                  <Text className={`text-xl text-center p-3 px-5 ${isCombo ? 'text-white' : 'text-black'}`} >Sí</Text>
                </View>

              </Pressable>
          </View>
        )})}
       </View>)
    }
  }
  const {item, type} = useLocalSearchParams()
  const [isCombo, setIsCombo] = useState(true)
  const [details, SetDetails] = useState({
    name:'item',
    type:'type',
  })
  const [detailsFood, SetDetailsFood] = useState([
    {cebolla: 'true'},
    {tomate: 'true'},
    {lechuga: 'true'},
    {pepinillos: 'true'},
  ])
  console.log(item)
  return (
    <ScrollView className='flex-1 '>
      <Stack.Screen options={{title:item}}/>
      <View className='flex-1 flex-col py-10 mb-5'>
      
      <View className='flex flex-row max-h-96'>
        <View className='flex flex-1 flex-col align-items-center content-center'>
          <Text className='text-2xl font-bold text-center ml-5 mt-5'>Descripción</Text>
          <Text className='text-lg mt-5 font-bold mx-1 text-justify'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor . </Text>
        </View>
        <View className='flex-1  justify-center align-items-center'>
          <View className=' bg-black m-2 rounded-3xl h-1/2  '></View>
          <Text className='text-center  text-xl'>$Precio</Text>
        </View>

      </View>
        <View className='flex flex-row'>
          <Pressable className='flex-1' onPress={() => setIsCombo(true)}>

          <View className={`flex-1 rounded-xl bg-black m-2 align-items-center justify-center ${isCombo ? 'bg-black border border-white' : 'bg-white'} `}>
            <Text className={`text-2xl font-bold text-center p-5 text-black ${isCombo ? 'text-white' : 'text-black'} `}>Combo</Text>
          </View>
          </Pressable>
          <Pressable className='flex-1' onPress={() => setIsCombo(false)}>

          <View className={`flex-1 rounded-xl bg-black m-2 align-items-center justify-center ${!isCombo ? 'bg-black border border-white' : 'bg-white'} `}>
            <Text className={`text-2xl font-bold text-center p-5 text-black ${!isCombo ? 'text-white' : 'text-black'} `}>Sencillo</Text>
          </View>
          </Pressable>
        </View>

        <Text className='text-center text-2xl font-bold mt-5'>Cantidad</Text>

        <View className='flex '>
          <View className='flex'>

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

        <Text className='text-center text-2xl font-bold mt-5'>Especificaciones</Text>

        <View className=''>
           {getType()}
          {/* <View className='flex-row justify-between items-center content-center '>

            <Text className='text-lg font-bold ml-5 mt-5'>Cebolla</Text>

              <Pressable className='mt-5'>
              <View className={`rounded-full ${!isCombo ? 'bg-black' : 'bg-white'}`} >
                  <Text className={`text-xl p-3 px-5 ${!isCombo ? 'text-white' : 'text-black'}`} >No</Text>
                </View>
              </Pressable>
              <View className='flex '>
              <Pressable className='mt-5'>
              <View className={`rounded-full ${isCombo ? 'bg-black' : 'bg-white'}`} >
                  <Text className={`text-xl p-3 px-5 ${isCombo ? 'text-white' : 'text-black'}`} >Sí</Text>
                </View>

              </Pressable>
            </View>
          </View> */}
        </View>
      </View>
    </ScrollView>
  )
}

export default dishDisplay
