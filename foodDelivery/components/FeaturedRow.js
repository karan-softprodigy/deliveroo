import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import { colorCommon, PAPA_REACT_URL } from '../utils/constants'
import RestaurantCard from './RestaurantCard'
import { featuredRestaurants, nearRestaurantsList, discountRestaurantsList } from '../utils/content'

const FeaturedRow = ({ id, title, description }) => {

  const [featuredRestaurantsList, setFeaturedRestaurantsList] = useState(featuredRestaurants)
  const [nearRestaurants, setNearRestaurants] = useState(nearRestaurantsList)
  const [discountRestaurants, setDiscountRestaurants] = useState(discountRestaurantsList)

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

        {
          id === 'featured' && featuredRestaurantsList?.map((restaurant) => (
            <RestaurantCard
              key={restaurant?.id}
              id={restaurant?.id}
              imgUrl={restaurant?.image}
              title={restaurant?.title}
              rating={restaurant?.rating}
              genre={restaurant?.genre}
              address={restaurant?.address}
              short_description={restaurant?.short_description}
              dishes={restaurant?.dishes}
              long={restaurant.long}
              lat={restaurant.lat}
            />
          ))
        }

        {
          id === 'nearby' && nearRestaurants?.map((restaurant) => (
            <RestaurantCard
              key={restaurant?.id}
              id={restaurant?.id}
              imgUrl={restaurant?.image}
              title={restaurant?.title}
              rating={restaurant?.rating}
              genre={restaurant?.genre}
              address={restaurant?.address}
              short_description={restaurant?.short_description}
              dishes={restaurant?.dishes}
              long={restaurant.long}
              lat={restaurant.lat}
            />
          ))
        }

        {
          id === 'discounts' && discountRestaurants?.map((restaurant) => (
            <RestaurantCard
              key={restaurant?.id}
              id={restaurant?.id}
              imgUrl={restaurant?.image}
              title={restaurant?.title}
              rating={restaurant?.rating}
              genre={restaurant?.genre}
              address={restaurant?.address}
              short_description={restaurant?.short_description}
              dishes={restaurant?.dishes}
              long={restaurant.long}
              lat={restaurant.lat}
            />
          ))
        }

      </ScrollView>
    </View>
  )
}

export default FeaturedRow