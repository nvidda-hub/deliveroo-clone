import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { MapPinIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../sanityConfigForFrontend'
import { useNavigation } from '@react-navigation/native'

const RestaurentCard = ({
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
}) => {
    const navigation = useNavigation()
  return (
    <TouchableOpacity 
        className="bg-white mr-3 shadow rounded pb-3 space-y-1"
        onPress={() => {
            navigation.navigate('Restaurant',
            {
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
            })
        }}
        >
        <Image source={{
            uri:urlFor(imageUrl).url()
            }}
            className="h-36 w-64"
          />
        <View className="px-3 space-y-1">
            <Text className="font-bold text-lg pt-2">{title}</Text>
            <View className="flex-row items-center space-x-1">
                <StarIcon color="green" opacity={0.5} size={22} />
                <Text className="text-xs text-gray-500">
                    <Text className="text-green-500">{rating}</Text> &#183; {genre}
                </Text>
            </View>
        </View>
        <View className="flex-row items-center space-x-1 px-3">
            <MapPinIcon color="gray" opacity={0.4} size={22} />
            <Text className="text-xs flex-1 text-gray-500">Nearby &#183; {address}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default RestaurentCard