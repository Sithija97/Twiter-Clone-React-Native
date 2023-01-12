import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { database } from '../config/firebase'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import Product from '../components/Products'

const Home = () => {
  const navigation = useNavigation()
  const [products, setProducts] = useState([])

  useEffect(() => {
    const collectionRef = collection(database, 'products');
    const q = query(collectionRef, orderBy('creaetdAt', 'desc'));
    const unsubscribe = onSnapshot(q, querySnapshot => {
      setProducts(
        querySnapshot.docs.map(doc => ({
          id: doc.id,
          emoji: doc.data().emoji,
          name: doc.data().name,
          price: doc.data().price,
          isSold: doc.data().isSold,
          createdAt: doc.data().createdAt
        }))
      )
    })
    return unsubscribe;
  }, [])

  return (
    <View>
      <Text>Home</Text>
      {products.map(product => <Product key={product.id} {...product} />)}
      <Button title='go to Add Screen' onPress={() => navigation.navigate("Add")}></Button>
    </View>
  )
}

export default Home