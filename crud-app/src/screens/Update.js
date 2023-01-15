import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import EmojiPicker, { id } from 'rn-emoji-keyboard'
import { doc, updateDoc } from 'firebase/firestore'
import { database } from '../config/firebase'
import { useNavigation } from '@react-navigation/native'

const Update = ({ route }) => {
    const initialState = {
        id: null,
        emoji: '',
        name: '',
        price: 0,
        isSold: false,
        createdAt: new Date(),
    }
    const [updatedItem, setUpdatedtem] = useState(initialState)
    const [isOpen, setIsOpen] = useState(false)

    const navigation = useNavigation()

    useEffect(() => {
        const { product } = route.params;
        const { emoji, name, price, isSold, id } = product;
        setUpdatedtem({
            id: id,
            emoji: emoji,
            name: name,
            price: price,
            isSold: isSold,
            createdAt: new Date(),
        })
    }, [])


    const handlePick = (emojiObject) => {
        setUpdatedtem({
            ...updatedItem,
            emoji: emojiObject.emoji
        })
    }

    const onUpdate = () => {
        const { id, emoji, name, price, isSold } = updatedItem
        const docRef = doc(database, 'products', id);

        updateDoc(docRef, {
            emoji: emoji,
            name: name,
            price: price,
            isSold: isSold,
            createdAt: new Date(),
        });
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Update Product</Text>
            <Text value={updatedItem.emoji} style={styles.emoji} onPress={() => setIsOpen(true)}>{updatedItem.emoji}</Text>
            <EmojiPicker
                onEmojiSelected={handlePick}
                open={isOpen}
                onClose={() => setIsOpen(false)}
            />
            <TextInput
                value={updatedItem.name}
                onChangeText={(text) => setUpdatedtem({ ...updatedItem, name: text })}
                placeholder='Product Name'
                style={styles.inputContainer}
            />
            <TextInput
                value={updatedItem.price}
                onChangeText={(text) => setUpdatedtem({ ...updatedItem, price: text })}
                placeholder='$ Price'
                style={styles.inputContainer}
                keyboardType='number-pad'
            />
            <Button title='Publish' onPress={onUpdate} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center'
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
    },
    emoji: {
        fontSize: 100,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 6,
        padding: 10,
        marginVertical: 6,
    },
    inputContainer: {
        width: '90%',
        padding: 13,
        marginVertical: 6,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 6,
    },
})

export default Update