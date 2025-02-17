import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import { MinusIcon, PlusIcon } from '../../assets/icons/icons'

const dishDisplay = () => {

  const getType = () => {
    switch(type){
      case 'Food':
       return(<View>
       <View className=''>
        {Object.entries(detailsFood).map(([key, value])  => {
          return(
          <View className='flex-row justify-between items-center content-center mx-1 ' key={key}>
            <View className='flex-1'>
              <Text className='text-center text-xl'>{key}</Text>
            </View>
            <Pressable className='mt-5 flex-1 mx-5' onPress={() => { 
              SetDetailsFood({...detailsFood, [key]: false})}}>
              <View className={`rounded-full ${!detailsFood[key] ? 'bg-black' : 'bg-white'}`} >
                  <Text className={`text-xl text-center p-3 px-5 ${!detailsFood[key] ? 'text-white' : 'text-black'}`} >No</Text>
                </View>
              </Pressable>
              <Pressable className='mt-5 flex-1 mx-5' onPress={() => SetDetailsFood({...detailsFood, [key]: true}) }>
              <View className={`rounded-full ${detailsFood[key] ? 'bg-black' : 'bg-white'}`} >
                  <Text className={`text-xl text-center p-3 px-5 ${detailsFood[key] ? 'text-white' : 'text-black'}`} >Sí</Text>
                </View>

              </Pressable>
          </View>
          
        )})}
       </View>
       <View>
          <Pressable onPress={ () => {console.log(detailsFood)}
        // Logica del fetch para pedido de comida aqui  
        }
            
            >
            <View className='bg-black rounded-xl m-5'>
              <Text className='text-2xl text-center text-white'>Listo</Text>
            </View>
          </Pressable>
       </View>
       </View> )
       case 'Hot':
        return(<View className='flex'>
          {/* Aqui me quede, falta aplicar especificaicones para bebida */}
        </View>)
    }
  }

  const AttributeSelector = () => {
    //encapsular botones de combo y leche
    switch (details.type) {
      case 'Food':
        return(<>
          
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
        {isCombo ? (<Text className='text-center text-xl'>Nota: los pedidos serán en combo</Text>) : (<Text className='text-center text-xl'>Nota: los pedidos serán sencillos</Text>)}
        </>)  
      case 'Hot':
      case 'Cold':
        const milkType = ['entera', 'deslactosada', 'almendra', 'Sin leche']
        return(<>
          <Text className='text-center text-xl'>Tipo de leche</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className='flex-row'>
             <Pressable className='flex' onPress={() => SetDetailsDrink({...detailsDrink, milkType: 0})}>
                <View className={`flex-1 rounded-xl bg-black m-2 align-items-center justify-center ${detailsDrink.milkType === 0 ? 'bg-black border border-white' : 'bg-white'} `}>
                  <Text className={`text-2xl font-bold text-center p-5 text-black ${detailsDrink.milkType === 0 ? 'text-white' : 'text-black'} `}>Entera</Text>
                </View>
              </Pressable>
              <Pressable className='flex' onPress={() => SetDetailsDrink({...detailsDrink, milkType: 1})}>
                <View className={`flex-1 rounded-xl bg-black m-2 align-items-center justify-center ${detailsDrink.milkType === 1 ? 'bg-black border border-white' : 'bg-white'} `}>
                  <Text className={`text-2xl font-bold text-center p-5 text-black ${detailsDrink.milkType === 1 ? 'text-white' : 'text-black'} `}>Deslactosada</Text>
                </View>
              </Pressable>
              <Pressable className='flex' onPress={() => SetDetailsDrink({...detailsDrink, milkType: 2})}>
                <View className={`flex-1 rounded-xl bg-black m-2 align-items-center justify-center ${detailsDrink.milkType === 2 ? 'bg-black border border-white' : 'bg-white'} `}>
                  <Text className={`text-2xl font-bold text-center p-5 text-black ${detailsDrink.milkType === 2 ? 'text-white' : 'text-black'} `}>Almendra</Text>
                </View>
              </Pressable>
              <Pressable className='flex' onPress={() => SetDetailsDrink({...detailsDrink, milkType: 3})}>
                <View className={`flex-1 rounded-xl bg-black m-2 align-items-center justify-center ${detailsDrink.milkType === 3 ? 'bg-black border border-white' : 'bg-white'} `}>
                  <Text className={`text-2xl font-bold text-center p-5 text-black ${detailsDrink.milkType === 3 ? 'text-white' : 'text-black'} `}>Sin leche</Text>
                </View>
              </Pressable>
          </ScrollView>
          {detailsDrink.milkType !== 3 ? (<Text className='text-center text-xl'>Nota: los pedidos serán con leche {milkType[detailsDrink.milkType]}</Text>) : (<Text className='text-center text-xl'>Nota: los pedidos serán sin leche</Text>)}
          
          </>)
      default:
        break;
    }
  }
  const [FinalDish, SetFinalDish] = useState(null)
  const {item, type} = useLocalSearchParams()
  const [isCombo, setIsCombo] = useState(true)
  const [details, SetDetails] = useState({
    name: item,
    type:type,
    combo: isCombo,
    quantity: 1,
  })

  const [detailsFood, SetDetailsFood] = useState({
    cebolla: true,
    tomate: true,
    lechuga: true,
    pepinillos: true,
  })
  const [detailsDrink, SetDetailsDrink] = useState({
    milkType: 0,
    sugar: 0,
    brownSugar: 0,
    syrup: 0,
    frappeFlavor: 0
  })
  useEffect(() => {
    console.log(details.type)
  },[details.type])
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
        <View className='flex '>
          {AttributeSelector()}
        </View>

        <Text className='text-center text-2xl font-bold mt-5'>Cantidad</Text>
        <View className='flex '>
          <View className='flex'>

            <View className='flex justify-between flex-row mx-5 '>
              <View className='content-center items-center'>
                <Pressable onPress={() => { if(details.quantity == 1) 
                  return
                  SetDetails({...details, quantity: details.quantity - 1})}}> 
                <MinusIcon size={42}  />
                </Pressable>
              </View>
              <View className='flex-1 content-center items-center justify-center '>
                <Text className='text-2xl'>{details.quantity}</Text>
              </View>
              <View>
                <Pressable onPress={() => { if(details.quantity == 10) 
                  return
                  SetDetails({...details, quantity: details.quantity + 1})}}>
                <PlusIcon size={42} />
                </Pressable>
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
