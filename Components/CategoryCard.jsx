import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { urlFor } from '../sanityConfigForFrontend'

const CategoryCard = (props) => {
  return (
    <TouchableOpacity className="realtive bg-white p-1 mr-2 text-black font-bold shadow-xl">
      <Image source={{
        uri:urlFor(props.imageUrl).url()
                }}
            className="h-20 w-20"
          />
      <Text className="absolute text-white text-lg bottom-1 left-2 font-bold">{props.title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard