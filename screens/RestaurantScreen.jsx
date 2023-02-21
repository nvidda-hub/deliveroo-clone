import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanityConfigForFrontend'
import { ArrowLeftIcon, ChevronRightIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/outline'
import { MapPinIcon, StarIcon } from 'react-native-heroicons/solid'
import Dish from '../Components/Dish'
import BasketPopUp from '../Components/BasketPopUp'
import { useDispatch } from 'react-redux'
import { setRestaurant } from '../reduxSlices/restaurantSlice'

const RestaurantScreen = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const {params:{
        
        id,
        imageUrl,
        title,
        rating,
        genre,
        address,
        short_desc,
        dishes,
        long,
        lat
        
    }} = useRoute()

    // hiding navigation header
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown:false
        })
    }, []) 
    
    useEffect(()=>{
        dispatch(setRestaurant({
            id,
            imageUrl,
            title,
            rating,
            genre,
            address,
            short_desc,
            dishes,
            long,
            lat
        }))
    }, [])
  return (
    <>
        <BasketPopUp />
        <ScrollView>
            <View className="relative">
                <Image source={{
                    uri:urlFor(imageUrl).url()
                    }}
                    className="h-56 w-full bg-gray-100"
                />
                <TouchableOpacity 
                    onPress={navigation.goBack} 
                    className="absolute top-14 left-5 bg-white rounded-full p-2"
                >
                    <ArrowLeftIcon size={20} color="#00CCBB" />
                </TouchableOpacity>
            </View>
            <View className="px-4 pt-2 flex-col space-y-1 bg-white">
                <Text className="text-[22px] font-bold">{title}</Text>
                <View className="flex-row items-center space-x-1">
                    <StarIcon color="green" opacity={0.5} size={22} />
                    <Text className="text-xs text-gray-500">
                        <Text className="text-gray-500">{rating} &#183; Offers</Text> 
                    </Text>
                    <MapPinIcon color="gray" opacity={0.4} size={22} />
                    <Text className="text-xs text-gray-500 flex-1">Nearby &#183; {address}</Text>

                </View>
                <Text className="text-gray-500 pt-3">{short_desc}</Text>
                <TouchableOpacity className="flex-row items-center justify-between border-y border-gray-200 px-2 py-3">
                    <View className="flex-row space-x-4">
                        <QuestionMarkCircleIcon color="gray" size={22} />
                        <Text className="font-extrabold">Have a food allergy?</Text>
                    </View>
                    <ChevronRightIcon color="#00CCBB" size={22} />
                </TouchableOpacity>
            </View>
            <Text className="text-xl font-bold px-4 py-2">Menu</Text>
            {/* dishes */}
            <View className="pb-32">
                {dishes.length >= 1 ? dishes.map(dish => {
                    return <Dish 
                                key={dish._id}
                                id={dish._id}
                                name={dish.name}
                                imageUrl={dish.image}
                                price={dish.price}
                                short_desc={dish.short_description}
                            />
                }):''}
            </View>

        </ScrollView>
    </>
  )
}

export default RestaurantScreen