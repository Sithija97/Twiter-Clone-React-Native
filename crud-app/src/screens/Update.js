import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import EmojiPicker from 'rn-emoji-keyboard'
import { doc } from 'firebase/firestore'
import { database } from '../config/firebase'
// import { useNavigation } from '@react-navigation/native'

const Update = ({route}) => {
    const initialState = {
        emoji: '📷',
        name: '',
        price: 0,
        isSold: false,
        createdAt: new Date(),
    }
    const [newItem, setNewItem] = useState(initialState)
    const [isOpen, setIsOpen] = useState(false)

    // const navigation = useNavigation()
    const {id} = route.params;
    const docRef = doc(database, 'products', id);
    console.log(docRef);

    const handlePick = (emojiObject) => {
        setNewItem({
            ...newItem,
            emoji: emojiObject.emoji
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Update Product</Text>
            <Text style={styles.emoji} onPress={() => setIsOpen(true)}>{newItem.emoji}</Text>
            <EmojiPicker
                onEmojiSelected={handlePick}
                open={isOpen}
                onClose={() => setIsOpen(false)}
            />
            <TextInput
                onChangeText={(text) => setNewItem({ ...newItem, name: text })}
                placeholder='Product Name'
                style={styles.inputContainer}
            />
            <TextInput
                onChangeText={(text) => setNewItem({ ...newItem, price: text })}
                placeholder='$ Price'
                style={styles.inputContainer}
                keyboardType='number-pad'
            />
            <Button title='Publish' />
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