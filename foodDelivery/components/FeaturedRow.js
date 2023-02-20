import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import { colorCommon, PAPA_REACT_URL } from '../utils/constants'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className='font-bold text-lg'>{title} </Text>
        <ArrowRightIcon color={colorCommon} />
      </View>

      <Text className='text-xs text-gray-500 px-4'>{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15
        }}
        showsHorizontalScrollIndicator={false}
        className='pt-4'
      >
        {/* restaurantCard */}
        <RestaurantCard
          id='123'
          imgUrl={`${PAPA_REACT_URL}/gn7`}
          title='Hello Sushi'
          rating={4.5}
          genre='Japanese'
          address='Tokyu Japan'
          short_description='Best Dish'
          dishes={[]}
          long={20}
          lat={10}
        />
        <RestaurantCard
          id='123'
          imgUrl={`${PAPA_REACT_URL}/gn7`}
          title='Hello Sushi'
          rating={4.5}
          genre='Japanese'
          address='Tokyu Japan'
          short_description='Best Dish'
          dishes={[]}
          long={20}
          lat={10}
        />
        <RestaurantCard
          id='123'
          imgUrl={`${PAPA_REACT_URL}/gn7`}
          title='Hello Sushi'
          rating={4.5}
          genre='Japanese'
          address='Tokyu Japan'
          short_description='Best Dish'
          dishes={[]}
          long={20}
          lat={10}
        />

      </ScrollView>
    </View>
  )
}

export default FeaturedRow