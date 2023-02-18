import React, { useLayoutEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {AdjustmentsVerticalIcon, ChevronDownIcon, MagnifyingGlassIcon, UserIcon} from "react-native-heroicons/outline"
import Categories from '../Components/Categories';

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
            <TextInput placeholder='Search for Resturent...' keyboardType='default' />
          </View>
          <AdjustmentsVerticalIcon color="#00CCBB" />
        </View>
        {/* content */}
        <ScrollView className="bg-gray-100 pt-2">
          {/* categories */}
          <Categories />
          {/* featured rows */}
        </ScrollView>
      </View>

    </SafeAreaView>
  )
}

export default HomeScreen