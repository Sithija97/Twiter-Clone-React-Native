import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation()
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("Add")}><Text>go to Add Screen</Text></TouchableOpacity>
    </View>
  )
}

export default Home