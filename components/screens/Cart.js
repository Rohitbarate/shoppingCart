import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import PlusIcon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Cart = () => {
    const [addedItems, setaddedItems] = useState([])

    // get products to AsyncStorage
    const getData = async () => {
        try {
            const data = await AsyncStorage.getItem('storeItems')
            setaddedItems(JSON.parse(data))
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        getData()
    }, [])

    const productCard = ({ item }) => {
        return (
            <View style={styles.productDiv}>
                <View style={styles.productInfo}>
                    <Text style={styles.text}>{item.name}</Text>
                    <Text style={[styles.text, styles.price]}>{item.price}rs.</Text>
                </View>
            </View>
        )

    }


    return (
        <View style={styles.mainContainer}>
            <View style={styles.row}>
                <Text style={styles.headText}>Available Items</Text>
                <TouchableOpacity style={styles.clearButton}
                    onPress={async () => {
                        await AsyncStorage.removeItem('storeItems');
                        getData();
                    }}
                >
                    <Text style={{ fontWeight: 'bold', fontSize: 12, color: '#fff' }}>Clear cart</Text>
                </TouchableOpacity>
            </View>
            {!addedItems ? <Text style={styles.emptyText}>Your cart is empty</Text> : <FlatList
                data={addedItems}
                renderItem={productCard}
                keyExtractor={item => item.id}
            />}
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width: '100%',
    },
    headText: {
        textAlign: 'center',
        fontSize: 20,
        letterSpacing: 2,
        fontWeight: '800'
    },
    productDiv: {
        height: 70,
        paddingHorizontal: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        borderBottomWidth: 1,
        paddingHorizontal: 20

    },
    addButton: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 20
    },
    text: {
        fontSize: 18,
        letterSpacing: 2,
        fontWeight: '600'

    },
    price: {
        marginHorizontal: 10,
        padding: 10,
        backgroundColor: '#8080802e',
        borderRadius: 5,
        fontSize: 11,
        fontWeight: '900',
        borderColor: '#000',
        borderWidth: 1
    },
    productInfo: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    clearButton: {
        padding: 10,
        borderWidth: 1,
        backgroundColor: 'grey',
        borderRadius: 5
    },
    emptyText: {
        textAlign: 'center',
        fontSize: 24,
        paddingVertical: 10,
        color: 'red',
        letterSpacing: 1,
        borderColor: 'red',
        borderWidth: 1,
        marginVertical: 10
    }
})