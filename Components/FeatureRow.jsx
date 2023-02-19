import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurentCard from './RestaurentCard'

const FeatureRow = ({title, featuredCategory, desc}) => {
  return (
    <View>
        <View className="flex-row mt-4 justify-between items-center px-4">
            <Text className="text-lg font-bold flex-1">{title}</Text>  
            <ArrowRightIcon color="#00CCBB" />
        </View>
      <Text className="text-xs text-gray-500 px-4">{desc}</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pt-4 px-4">
            <RestaurentCard 
                id="123"
                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmvZEDCLiaOOIfx_vOLiJ5JDVF-PiFLGwvWg&usqp=CAU"
                title="Yo! Bhavana"
                rating={4.5}
                genre="indian"
                address="Mansarovar, Jaipur"
                short_desc="This is a delicious food."
                dishes={[]}
                long={20}
                lat={0}
            />
            <RestaurentCard 
                id="123"
                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmvZEDCLiaOOIfx_vOLiJ5JDVF-PiFLGwvWg&usqp=CAU"
                title="Yo! Bhavana"
                rating={4.5}
                genre="indian"
                address="Mansarovar, Jaipur"
                short_desc="This is a delicious food."
                dishes={[]}
                long={20}
                lat={0}
            />
            <RestaurentCard 
                id="123"
                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmvZEDCLiaOOIfx_vOLiJ5JDVF-PiFLGwvWg&usqp=CAU"
                title="Yo! Bhavana"
                rating={4.5}
                genre="indian"
                address="Mansarovar, Jaipur"
                short_desc="This is a delicious food."
                dishes={[]}
                long={20}
                lat={0}
            />
      </ScrollView>
    </View>
  )
}

export default FeatureRow