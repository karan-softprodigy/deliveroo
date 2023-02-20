import React, { useEffect } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
      <Text className='text-black'>Home Screens</Text>
    </SafeAreaView>
  )
}

export default HomeScreen