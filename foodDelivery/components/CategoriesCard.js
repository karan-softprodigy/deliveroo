import { Text, TouchableOpacity, Image } from 'react-native'

const CategoriesCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity
      className='relative mr-2'
    >
      <Image source={{
        uri: imgUrl
      }}
        className='h-20 w-20 rounded'
      />
      <Text className='absolute bottom-1 left-1 font-bold text-white'>{title}</Text>

    </TouchableOpacity>
  )
}

export default CategoriesCard