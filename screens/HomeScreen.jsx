import React, { useLayoutEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {AdjustmentsVerticalIcon, ChevronDownIcon, MagnifyingGlassIcon, UserIcon} from "react-native-heroicons/outline"
import Categories from '../Components/Categories';
import FeatureRow from '../Components/FeatureRow';

const HomeScreen = () => {
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle:'Testing',
      headerShown:false,
    })
  }, [])
  return (
    <SafeAreaView className="bg-white">
      <View className="mx-3 mt-10">
        {/* Header */}
        <View className="flex-row mb-3 items-center space-x-2">
          <Text>
            <Image
              source={require('../img/avatar.png')}              
              className="w-7 h-10"
            />
          </Text>
          <View className="flex-1">
              <Text className="text-xs text-slate-400 font-bold">Deliver Now!</Text>
              <Text className="text-xl text-slate-800 font-bold space-x-1 align-baseline">
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
        <ScrollView className="bg-gray-100 pt-2">
          {/* categories */}
          <Categories />
          {/* OFfers near you */}
          <FeatureRow 
            id="3"
            title="Offers near you"
            desc="why not support your local restaurant tonight!"
            featuredCategory="featured"
          />
          {/* featured rows */}
          <FeatureRow 
            id="1"
            title="Featured"
            desc="Paid placements for our partners"
            featuredCategory="featured"
          />
          {/* Tasty discounts */}
          <FeatureRow 
            id="2"
            title="Tasty Discounts"
            desc="Paid placements for our partners"
            featuredCategory="Everyone's been enjoying these juicy discounts!"
          />
        </ScrollView>
      </View>

    </SafeAreaView>
  )
}

export default HomeScreen