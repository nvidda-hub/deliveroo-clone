import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { urlFor } from '../sanityConfigForFrontend'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'

const Dish = ({
    id,
    name,
    imageUrl,
    price,
    short_desc,
}) => {
    const [isPressed, setisPressed] = useState(false)
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
            <TouchableOpacity>
                <MinusCircleIcon color="#00CCBB" size={28} />
            </TouchableOpacity>
            <Text className="text-lg font-bold text-gray-500">0</Text>
            <TouchableOpacity>
                <PlusCircleIcon color="#00CCBB" size={28} />
            </TouchableOpacity>
        </View> : ''}
    </TouchableOpacity>
  )
}

export default Dish