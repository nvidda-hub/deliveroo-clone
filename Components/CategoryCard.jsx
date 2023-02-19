import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CategoryCard = (props) => {
  return (
    <TouchableOpacity className="realtive bg-white p-1 mr-2 text-black font-bold shadow-xl">
      <Image source={{
        uri:props.imageUrl
                }}
            className="h-20 w-20"
          />
      {/* <Image
              source={require(`${props.imageUrl}`)}              
              className="w-[100px] h-[100px]"
            /> */}
      <Text className="absolute text-white text-lg bottom-1 left-2 font-bold">{props.title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard