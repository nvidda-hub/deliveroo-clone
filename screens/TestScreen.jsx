import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const TestScreen = () => {
  return (
    <View className="my-10 mx-6">
      <Text className="text-red-800 font-semibold text-xl">Hello There!</Text>
      <StatusBar />
    </View>
  )
}

export default TestScreen