import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectRestaurant } from '../reduxSlices/restaurantSlice'
import { XMarkIcon } from 'react-native-heroicons/outline'
import * as Progress from "react-native-progress"
import MapView, {Marker} from "react-native-maps"
import { urlFor } from '../sanityConfigForFrontend'


const DeliveryScreen = () => {
    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)
  return (
    <View className="bg-[#00CCBB] flex-1 pt-10">
      <SafeAreaView className="px-2">
        <View className="flex-row justify-between items-center px-3">
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <XMarkIcon color="white" size={30} />
            </TouchableOpacity>
            <Text className="text-white">Order Help</Text>
        </View>
        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md space-y-2 ">
            <View className="flex-row justify-between space-x-2">
                <View>
                    <Text className="text-lg text-gray-400">Estimated Arrival</Text>
                    <Text className="text-4xl font-bold">45-50 Minutes</Text>
                </View>
                <Image 
                    source={require('../img/deliveryBiker.jpeg')}
                    className="h-16 w-16"
                />
            </View>
            <Progress.Bar progress={0.3} color="#00CCBB" width={200} indeterminate={true} />
            <Text className="text-gray-500">
                Your order at <Text className="font-bold">{restaurant.title}</Text> is being prepared
            </Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
            latitude:restaurant.lat,
            longitude:restaurant.long,
            latitudeDelta:0.005,
            longitudeDelta:0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType='mutedStandard'
      >
        <Marker 
            coordinate={{
                latitude:restaurant.lat,
                longitude:restaurant.long
            }}
            title={restaurant.title}
            description={restaurant.short_desc}
            identifier="origin"
            pinColor='#00CCBB'
        />
      </MapView>
      <SafeAreaView>
        <View className="bg-white px-4 py-3 flex-row items-center justify-between rounded-lg shadow-xl">
                <View className="flex-row space-x-4">
                    <Image source={{
                        uri:urlFor(restaurant.imageUrl).url()
                        }}
                        className="h-10 w-10 rounded-full"
                    />
                    <View className="flex-col">
                        <Text className="text-lg font-bold">Rohit Raj</Text>
                        <Text className="text-gray-500 text-xs">Your Rider</Text>
                    </View>
                </View>

                <Text className="text-[#00CCBB] font-bold">Call</Text>

        </View>
      </SafeAreaView>
    </View>
  )
}

export default DeliveryScreen