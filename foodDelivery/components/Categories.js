import React, { useState } from 'react'
import { Text, View, ScrollView } from 'react-native'
import CategoriesCard from './CategoriesCard'
import { PAPA_REACT_URL } from '../utils/constants'
import { categoriesList } from '../utils/content'

const Categories = () => {
  const [categories, setCategories] = useState(categoriesList)

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10
      }}
      horizontal
      showsHorizontalScrollIndicator={false}>

      {
        categories?.map((category) => (
          <CategoriesCard key={category.title}
            imgUrl={category.image} title={category.title} />
        ))
      }
    </ScrollView>
  )
}

export default Categories