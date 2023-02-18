import React, { useLayoutEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {ChevronDownIcon, UserIcon} from "react-native-heroicons/outline"

const HomeScreen = () => {
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle:'Testing',
      headerShown:false,
    })
  }, [])
  return (
    <SafeAreaView className="my-10 mx-6">
      {/* Header */}
      <Text>
        <View className="flex-row py-3 items-center space-x-2">
          <Text>
            <Image
              source={require('../img/avatar.png')}              
              className="w-7 h-10"
            />
          </Text>
          <View>
              <Text className="text-xs text-slate-400 font-bold">Deliver Now!</Text>
              <Text className="text-xl text-slate-800 font-bold">Current Location
                  <ChevronDownIcon size={20} color="#00CCBB"/>

                </Text>
              {/* <Text><BsChevronDown/></Text> */}
          </View>
        </View>
      </Text>
    </SafeAreaView>
  )
}

export default HomeScreen