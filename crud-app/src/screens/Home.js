import React, { useEffect, useLayoutEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Button, StyleSheet, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { database } from '../config/firebase'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import Product from '../components/Products'

const Home = () => {
  const navigation = useNavigation()
  const [products, setProducts] = useState([])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title='Add' onPress={() => navigation.navigate('Add')} />
    })
  }, [navigation])

  useEffect(() => {
    const collectionRef = collection(database, 'products');
    const q = query(collectionRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, querySnapshot => {
      setProducts(
        querySnapshot.docs.map(doc => ({
          id: doc.id,
          emoji: doc.data().emoji,
          name: doc.data().name,
          price: doc.data().price,
          isSold: doc.data().isSold,
          createdAt: doc.data().createdAt,
        }))
      );
    });
    return unsubscribe;
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
          <Text style={styles.title}>Products</Text>
          {products.map(product => <Product key={product.id} {...product} />)}
        </ScrollView>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F3F9',
  },
  productContainer: {
    padding: 5
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    margin: 16,
  },
});
export default Home