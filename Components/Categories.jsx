import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  const [categories, setCategories] = useState([])
  async function fetchCategories() {
    let QUERY = encodeURIComponent(`*[_type == "category"]`);
    let categoriesUrl = `https://4ckwkgpu.api.sanity.io/v2021-10-21/data/query/production?query=${QUERY}`
    const response = await fetch(categoriesUrl)
    const categories = await response.json();
    return categories.result;
  }

  useEffect(() => {
    fetchCategories().then(cats => {
      setCategories(cats)
    });
    
  }, [])
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row space-x-2">
        {/* categories card */}
        {categories.length >= 1 
        ? categories.map(cat => {
          return <CategoryCard 
                  key={cat._id}
                  id={cat._id}
                  title={cat.name}
                  imageUrl={cat.image}
                />
        })
        : '' }
    </ScrollView>
  )
}

export default Categories