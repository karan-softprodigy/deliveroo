import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { XMarkIcon } from 'react-native-heroicons/outline'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'
import { colorCommon, PAPA_REACT_URL } from '../utils/constants'
import * as Progress from 'react-native-progress'
import MapView, { Marker } from 'react-native-maps'

const DeliveryScreen = () => {
  const navigation = useNavigation()
  const restaurant = useSelector(selectRestaurant)

  return (
    <View className='bg=[#00CCBB] flex-1'>
      <SafeAreaView className='z-50'>
        <View className='flex-row justify-between items-center p-5'>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} >
            <XMarkIcon color='black' size={30} />
          </TouchableOpacity>
          <Text className='font-light text-black text-lg'>Order Help</Text>
        </View>

        <View className='bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md'>
          <View className='flex-row justify-between'>
            <View className=''>
              <Text className='text-lg text-gray-400'>Estimated Arrival</Text>
              <Text className='text-4xl font-bold'>45-55 Minutes</Text>
            </View>

            <Image
              source={{ uri: `${PAPA_REACT_URL}/fls` }}
              className='h-20 w-20'
            />
          </View>
          <Progress.Bar size={30} color={colorCommon} indeterminate={true} />

          <Text className='mt-3 text-gray-500'>
            Your order at {restaurant?.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>
      {/* <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        className='flex-1 -mt-10 z-0'
        mapType='mutedStandard'
      /> */}
      {/* <Marker
          coordinate={{
            latitude: 30.710459,
            longitude: 76.703347
          }}
          title={restaurant?.title}
          description={restaurant?.short_description}
          identifier='origin'
          pinColor={colorCommon}
        />
      </MapView> */}

      <SafeAreaView className='bg-white flex-row items-center space-x-5 h-28 absolute bottom-0 w-full'>
        <Image
          source={{
            uri: `${PAPA_REACT_URL}/wru`
          }}
          className='h-12 w-12 bg-gray-300 p-4 rounded-full ml-5'
        />
        <View className='flex-1'>
          <Text className='text-lg'>Sonny Sangha</Text>
          <Text className='text-gray-400'>Your Rider</Text>
        </View>
        <Text className='text-[#00CCBB] text-lg mr-5 font-bold'>Call</Text>
      </SafeAreaView >
    </View >
  )
}

export default DeliveryScreen