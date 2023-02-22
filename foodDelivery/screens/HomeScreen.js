import React, { useEffect, useState } from 'react'
import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ChevronDownIcon, UserIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
// below import only works in android
import { SafeAreaView } from 'react-native-safe-area-context'
import Categories from '../components/Categories'
import { PAPA_REACT_URL } from '../utils/constants'
import FeaturedRow from '../components/FeaturedRow'
import { colorCommon } from '../utils/constants'
import client from '../sanity'

const HomeScreen = () => {
  const navigation = useNavigation()
  const [featuredCategories, setFeaturedCategories] = useState([])

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])


  // const getData = async () => {
  //   const data = await client.fetch(`*[_type == 'restaurant']{
  //     ...,
  //     }`
  //   )
  //   setFeaturedCategories(data)
  // }

  // useEffect(() => {
  //   // getData()
  // }, [getData])

  // console.log(featuredCategories, 'featuredCategories');

  return (
    <SafeAreaView className='bg-white pt-5'>
      {/* ---------------------------header------------------ */}
      <View className='flex-row pb-3 items-center mx-4 space-x-2'>
        {/* when using img url */}
        <Image
          source={{ uri: `${PAPA_REACT_URL}/wru` }}
          className='h-7 w-7 bg-gray-300 p-4 rounded-full' />

        {/* when importing local img */}
        {/* <Image source={require('..path of local image')} /> */}

        <View className='flex-1'>
          <Text className='font-bold text-gray-400 text-xs'>Deliver Now</Text>
          <Text className='font-bold text-xl'>
            Current Location
            <ChevronDownIcon size={20} color={colorCommon} />
          </Text>
        </View>
        <UserIcon size={35} color={colorCommon} />
      </View>

      {/* -----------------search box-------------------------- */}
      <View className='flex-row items-center space-x-2 pb-2 mx-4'>
        <View className='flex-row flex-1 space-x-2 bg-gray-200 p-2'>
          <MagnifyingGlassIcon color='gray' size={20} />
          <TextInput placeholder='Restaurant and cuisines' keyboardType='default' />
        </View>
        <AdjustmentsVerticalIcon color={colorCommon} />
      </View>

      {/* ------------------------body----------------------- */}
      <ScrollView className='bg-gray-100' contentContainerStyle={{
        paddingBottom: 100
      }}>
        {/* -----------------Categories----------------- */}
        <Categories />

        {/* -------------Featured Rows--------------- */}

        {
          featuredCategories?.map((category) => (
            <FeaturedRow
              key={category?._id}
              id={category?._id}
              title={category?.name}
              description={category?.short_description}
            />
          ))
        }

        <FeaturedRow
          title={'Featured'}
          description='Paid Placement from our partners'
          id={'featured'}
        />
        <FeaturedRow
          title={'Tasty Discounts'}
          description='Paid Placement from our partners'
          id={'discounts'}
        />
        <FeaturedRow
          title={'Offers near you'}
          description='why not support you local restaurant'
          id={'offers'}
        />
      </ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen