import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { urlFor } from '../sanityConfigForFrontend'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, basketItems, removeFromBasket, selectedBasketItems, selectedBasketItemsWithId } from '../reduxSlices/basketSlice'

const Dish = ({
    id,
    name,
    imageUrl,
    price,
    short_desc,
}) => {
    const [isPressed, setisPressed] = useState(false)
    const basketItemsForId = useSelector(state => selectedBasketItemsWithId(state, id))
    const dispatch = useDispatch()
    const addItemToCart = () => {
        dispatch(addToBasket({id, name, short_desc, imageUrl, price}))
    }
    const removeItemFromCart = () => {
        if(basketItemsForId.length <= 0) return
        dispatch(removeFromBasket({id}))
    }
  return (
    <TouchableOpacity onPress={() => setisPressed(!isPressed)} className={`px-4 py-3 flex-col bg-white space-y-2 border-slate-200 border ${isPressed && 'border-b-0'}`}>
        <View className="flex-row justify-between">
        <View className="flex-col space-y-2 flex-1">
            <Text className="text-[18px] font-bold">{name}</Text>
            <Text className="text-gray-500 font-medium">{short_desc}</Text>
            <Text className="text-gray-500">₹ {price} /-</Text>
        </View>
        <Image source={{
                    uri:urlFor(imageUrl).url()
                    }}
                    className="h-20 w-20 bg-gray-100"
                />
        </View>
        {isPressed ? <View className="flex-row space-x-2 items-center">
            <TouchableOpacity onPress={removeItemFromCart} disabled={!basketItemsForId.length}>
                <MinusCircleIcon color={`${basketItemsForId.length >= 1 ?"#00CCBB" : 'gray'}`} size={28} />
            </TouchableOpacity>
            <Text className="text-lg font-bold text-gray-500">{basketItemsForId.length}</Text>
            <TouchableOpacity onPress={addItemToCart}>
                <PlusCircleIcon  color="#00CCBB" size={28} />
            </TouchableOpacity>
        </View> : ''}
    </TouchableOpacity>
  )
}

export default Dish