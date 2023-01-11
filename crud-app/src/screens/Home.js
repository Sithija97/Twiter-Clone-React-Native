import React from 'react'
import { View, Text, TouchableOpacity, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { database } from '../config/firebase'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import Product from '../components/Products'

const Home = () => {
    const navigation = useNavigation()
  return (
    <View>
      <Text>Home</Text>
      <Button title='go to Add Screen' onPress={()=>navigation.navigate("Add")}></Button>
    </View>
  )
}

export default Home