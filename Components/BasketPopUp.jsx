import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { basketTotal, selectedBasketItems } from '../reduxSlices/basketSlice'
import { useNavigation } from '@react-navigation/native'

const BasketPopUp = () => {
    const items = useSelector(selectedBasketItems)
    const navigation = useNavigation()
    const basketTotalFromRedux = useSelector(basketTotal)
    if(items.length === 0) return null;
  return (
    <View className="absolute bottom-10  w-full z-50">
      <TouchableOpacity 
        onPress={() => {navigation.navigate('Basket')}} 
        className="flex-row mx-5 rounded-lg p-4 items-center justify-between bg-teal-400"
    >
        <Text className="text-white text-lg bg-[#02938a] py-1 px-2 rounded-md font-extrabold">{items.length}</Text>
        <Text className="text-white text-lg font-extrabold">View Basket</Text>
        <Text className="text-white text-lg font-extrabold">
            <Text>₹ {basketTotalFromRedux}</Text>
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketPopUp