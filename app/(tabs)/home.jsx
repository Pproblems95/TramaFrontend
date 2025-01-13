import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const home = () => {
    const testMovieIamges = [
        {id: 1, photo: require('../../assets/images/taylor.jpg')},
        {id: 2, photo: require('../../assets/images/spiderman.jpg')},
        {id: 3, photo: require('../../assets/images/panda.jpg')},]

    const billboard = [{
        day:'Monday',
        movies: [
            {id: 1, photo: require('../../assets/images/taylor.jpg')},
            {id: 2, photo: require('../../assets/images/spiderman.jpg')},
            {id: 3, photo: require('../../assets/images/panda.jpg')},
        ]}, {
        day:'Tuesday',
        movies: [
            {id: 1, photo: require('../../assets/images/taylor.jpg')},
            {id: 2, photo: require('../../assets/images/spiderman.jpg')},
            {id: 3, photo: require('../../assets/images/panda.jpg')},
        ]}, 
        , {
        day:'Wednesday',
        movies: [
            {id: 1, photo: require('../../assets/images/taylor.jpg')},
            {id: 2, photo: require('../../assets/images/spiderman.jpg')},
            {id: 3, photo: require('../../assets/images/panda.jpg')},
        ]}]
  return (
    <ScrollView>
        <View>
            <ScrollView horizontal>
                
            <View className='flex flex-row items-center h-72 w-full pt-5 px-2'>
            {testMovieIamges.map((item) => {
                return(<View className=' mx-5 rounded-lg h-full w-96 flex items-center justify-center' key={item.id}>
                    <Image resizeMode='stretch' source={item.photo} className='h-full w-full rounded-lg' />
                </View>)
            })}
        </View>
            </ScrollView>
        </View>
        <View>
            <Text className='mt-5 text-center text-3xl font-bold'>Cartelera semanal</Text>
            {billboard.map((item) => {
                return(<View key={item.day}>
                    <Text className='mt-5 text-center text-2xl font-bold'>{item.day}</Text>
                    <View className='flex flex-row items-center h-72 w-full pt-5 px-2'>
                        <View className='flex flex-row items-center rounded-lg h-52 w-full pt-5 px-2 bg-black'>
                            {/* {item.movies.map((movie) => {
                                return(<View className=' mx-5 rounded-lg h-full w-96 flex items-center justify-center' key={movie.id}>
                                    <Image resizeMode='stretch' source={movie.photo} className='h-full w-full rounded-lg' />
                                </View>)
                            })} */}
                            <View className='flex-1 '>
                                <Image resizeMode='stretch' source={item.movies[0].photo} className='h-full w-full rounded-lg' />
                            </View>
                        </View>
                    </View>
                </View>)}
            )}
        </View>
    </ScrollView>
  )
}

export default home

const styles = StyleSheet.create({})