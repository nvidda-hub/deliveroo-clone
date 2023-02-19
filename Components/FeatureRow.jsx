import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurentCard from './RestaurentCard'

const FeatureRow = ({id, title, desc}) => {
    const [restaurants, setrestaurants] = useState({})
    async function fetchRestaurants() {
        let QUERY = encodeURIComponent(`*[_type == "featured" && _id == '${id}']{
            ...,
            restaurents[]->{
              ...,
              dishes[]->
            }
          }[0]`);
        let restaurantsUrl = `https://4ckwkgpu.api.sanity.io/v2021-10-21/data/query/production?query=${QUERY}`
        const response = await fetch(restaurantsUrl)
        const restaurants = await response.json();
        return restaurants.result;
      }
    
      useEffect(() => {
        fetchRestaurants().then(restaurantsData => {
          setrestaurants(restaurantsData.restaurents)
        })}, [])
  return (
    <View>
        <View className="flex-row mt-4 justify-between items-center px-4">
            <Text className="text-lg font-bold flex-1">{title}</Text>  
            <ArrowRightIcon color="#00CCBB" />
        </View>
      <Text className="text-xs text-gray-500 px-4">{desc}</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pt-4 px-4">
        {Object.keys(restaurants).length >= 1
            ? 
                restaurants.map((restaurant) => {
                    return <RestaurentCard 
                                key={restaurant._id}
                                id={restaurant._id}
                                imageUrl={restaurant.image}
                                title={restaurant.restaurent_name}
                                rating={restaurant.rating}
                                genre={restaurant.type?.name}
                                address={restaurant.address}
                                short_desc={restaurant.short_description}
                                dishes={restaurant.dishes}
                                long={restaurant.long}
                                lat={restaurant.lat}
                            />
                }) 
            : ''}
            

      </ScrollView>
    </View>
  )
}

export default FeatureRow