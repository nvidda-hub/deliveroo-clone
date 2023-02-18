import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CategoryCard = (props) => {
  return (
    <TouchableOpacity className="bg-white p-2 text-black font-bold shadow-xl">
      <Text>{props.title}</Text>
      <Image source={{
                    uri:props.imageUrl
                }}
            className="h-20 w-20"
      />
    </TouchableOpacity>
  )
}

export default CategoryCard