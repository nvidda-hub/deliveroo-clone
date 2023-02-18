import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView className="flex-row space-x-2">
        {/* categories card */}
        <CategoryCard title="card 1" imageUrl="../img/avatar.png"/>
        <CategoryCard title="card 2" imageUrl="../img/avatar.png"/>
        <CategoryCard title="card 3" imageUrl="../img/avatar.png"/>
        <CategoryCard title="card 4" imageUrl="../img/avatar.png"/>
        <CategoryCard title="card 5" imageUrl="../img/avatar.png"/>
    </ScrollView>
  )
}

export default Categories