import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import CategoriesCard from './CategoriesCard'
import { PAPA_REACT_URL } from '../utils/constants'

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10
      }}
      horizontal
      showsHorizontalScrollIndicator={false}>
      <CategoriesCard
        imgUrl={`${PAPA_REACT_URL}/gn7`} title='Testing' />
      <CategoriesCard
        imgUrl={`${PAPA_REACT_URL}/gn7`} title='Testing' />
      <CategoriesCard
        imgUrl={`${PAPA_REACT_URL}/gn7`} title='Testing' />

      <CategoriesCard
        imgUrl={`${PAPA_REACT_URL}/gn7`} title='Testing' />
      <CategoriesCard
        imgUrl={`${PAPA_REACT_URL}/gn7`} title='Testing' />
      <CategoriesCard
        imgUrl={`${PAPA_REACT_URL}/gn7`} title='Testing' />
    </ScrollView>
  )
}

export default Categories