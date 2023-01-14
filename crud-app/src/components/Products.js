import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { database } from '../config/firebase'
import { deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { AntDesign } from '@expo/vector-icons'

const Product = ({ id, emoji, name, price, isSold }) => {

    const navigation = useNavigation()

    const onDelete = () => {
        const docRef = doc(database, 'products', id);
        deleteDoc(docRef);
    }

    const onEdit = () => {
        const docRef = doc(database, 'products', id);
        updateDoc(docRef, {
            isSold: true,
        });
    }

    const onUpdate = () => {
        // const docRef = doc(database, 'products', id);
        navigation.navigate('Update',{id:id})
    }

    return (
        <View>
            <View style={styles.productContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.emoji}>{emoji}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <AntDesign onPress={onUpdate} name="edit" size={24} color="black" />
                        <AntDesign onPress={onDelete} name="delete" size={24} color="black" />
                    </View>
                </View>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.price}>${price}</Text>
                {isSold ? (
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: 'gray' }]}>
                        <Text style={styles.buttonText}>Sold</Text>
                    </TouchableOpacity>
                )
                    : (
                        <TouchableOpacity
                            onPress={onEdit}
                            style={styles.button}>
                            <Text style={styles.buttonText}>Purchase</Text>
                        </TouchableOpacity>
                    )}

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    productContainer: {
        padding: 16,
        backgroundColor: '#fff',
        margin: 16,
        borderRadius: 8,
    },
    emoji: {
        fontSize: 100,
    },
    name: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'gray',
    },
    button: {
        backgroundColor: '#0FA5E9',
        padding: 10,
        marginVertical: 6,
        borderRadius: 8,
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default Product