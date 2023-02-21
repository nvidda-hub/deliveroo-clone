import React, { useEffect, useLayoutEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {AdjustmentsVerticalIcon, ChevronDownIcon, MagnifyingGlassIcon, UserIcon} from "react-native-heroicons/outline"
import Categories from '../Components/Categories';
import FeatureRow from '../Components/FeatureRow';


const HomeScreen = () => {
  const navigation = useNavigation()
  const [featuredCategories, setfeaturedCategories] = useState([])
  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle:'Testing',
      headerShown:false,
    })
  }, [])
  async function fetchFeaturedCategories() {
    let QUERY = encodeURIComponent(`*[_type == "featured"]{...,restaurents[]->{...,dishes[]->}}`);
    let featuredCategoriesUrl = `https://4ckwkgpu.api.sanity.io/v2021-10-21/data/query/production?query=${QUERY}`
    const response = await fetch(featuredCategoriesUrl)
    const featuredCategories = await response.json();
    return featuredCategories.result;
  }

  useEffect(() => {
    fetchFeaturedCategories().then(cats => {
      setfeaturedCategories(cats)
    });
    
  }, [])
  return (
    <SafeAreaView className="bg-white pb-[232px]">
      <View className="mx-3 mt-10">
        {/* Header */}
        <View className="flex-row mb-3 items-center space-x-2">
          <Text>
            <Image
              source={require('../img/avatar.png')}              
              className="w-7 h-10"
            />
          </Text>
          <View className="flex-1 ">
              <Text className="text-xs text-slate-400 font-bold">Deliver Now!</Text>
              <Text className="text-xl flex-row text-slate-800 font-bold space-x-1 items-center">
                <Text>Current Location</Text>
                <ChevronDownIcon color="#00CCBB"/>

                </Text>
          </View>
          <UserIcon color="#00CCBB" />
        </View>
        {/* Search bar */}
        <View className="flex-row mb-3 items-center">
          <View className="flex-row px-2 py-1 space-x-1 rounded-md bg-gray-100 flex-1 items-center">
            <MagnifyingGlassIcon color="#00CCBB" />
            <TextInput placeholder='Search for Restaurant...' keyboardType='default' />
          </View>
          <AdjustmentsVerticalIcon color="#00CCBB" />
        </View>
        {/* content */}
        <ScrollView horizontal={false} className="bg-gray-100 py-2">
          {/* categories */}
          <Categories />
          {/* featured Rows */}
          {featuredCategories.length >= 1 ? featuredCategories.map((category) => {
            return <FeatureRow 
                      key={category._id}
                      id={category._id}
                      title={category.name}
                      desc={category.short_description}
                    />
          }) : ''}
        </ScrollView>
      </View>

    </SafeAreaView>
  )
}

export default HomeScreen