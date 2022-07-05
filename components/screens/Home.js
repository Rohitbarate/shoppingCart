import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import CartIcon from 'react-native-vector-icons/MaterialIcons';
import productsData from '../data/Products.json';
import PlusIcon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
let storeItemsObj

const Home = ({ navigation }) => {
    const [products, setProducts] = useState([productsData])

    const productItems = [
        {
            "id": 1,
            "name": "Milk",
            "price": 30
        },
        {
            "id": 2,
            "name": "Bread",
            "price": 10
        },
        {
            "id": 3,
            "name": "Tea",
            "price": 20
        },
        {
            "id": 4,
            "name": "Coffee",
            "price": 60
        },
        {
            "id": 5,
            "name": "Coke",
            "price": 50
        },
        {
            "id": 6,
            "name": "Apples",
            "price": 100
        },
        {
            "id": 7,
            "name": "Oranges",
            "price": 150
        },
        {
            "id": 8,
            "name": "Mangos",
            "price": 400
        },
        {
            "id": 9,
            "name": "Cookies",
            "price": 80
        },
        {
            "id": 10,
            "name": "Ice Cream",
            "price": 120
        },
        {
            "id":11,
            "name": "Burger",
            "price": 30
        },
        {
            "id":12,
            "name": "Biryani",
            "price": 10
        },
        {
            "id":13,
            "name": "Water bottle",
            "price": 20
        },
        {
            "id":14,
            "name": "Coffee",
            "price": 60
        },
        {
            "id":15,
            "name": "Coke",
            "price": 50
        },
        {
            "id":16,
            "name": "Apples",
            "price": 100
        },
        {
            "id":17,
            "name": "Oranges",
            "price": 150
        },
        {
            "id":18,
            "name": "Mangos",
            "price": 400
        },
        {
            "id":19,
            "name": "Cookies",
            "price": 80
        },
        {
            "id": 20,
            "name": "Cup cake",
            "price": 120
        }
    ]

    const storeItem = async (item)=>{
        const itemObj = {
            name:item.name,
            price:item.price
        }
        const data = await AsyncStorage.getItem('storeItems')
        if(!data){
            storeItemsObj = []
        }
        else{
            storeItemsObj = JSON.parse(data)
        }
        storeItemsObj.push(itemObj)
        await AsyncStorage.setItem('storeItems',JSON.stringify(storeItemsObj))



    }

    const productCard = ({ item }) => {
        return (
            <View style={styles.productDiv}>
                <View style={styles.productInfo}>
                    <Text style={styles.text}>{item.id}) {item.name}</Text>
                    <Text style={[styles.text,styles.price]}>{item.price}rs.</Text>
                </View>
                <TouchableOpacity style={styles.addButton}
                onPress={()=>{
                    storeItem(item)
                }}
                >
                    <PlusIcon
                    name='plus'
                    size={24}
                    color='#000'
                     />
                </TouchableOpacity>
            </View>
        )

    }
    return (
        <View style={styles.mainContainer}>
            <View style={styles.topContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Search items to buy"
                />
                <TouchableOpacity
                    onPress={() => { navigation.navigate('Cart') }}   >
                    <CartIcon size={30} name="add-shopping-cart" color="#000" />
                </TouchableOpacity>
            </View>
            {/* <View style={styles.productContainer}> */}
            <FlatList
                style={styles.flatList}
                data={productItems}
                renderItem={productCard}
                keyExtractor={item => item.id}
            />
            {/* </View> */}
        </View>
    )

}

export default Home

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width: '100%',
    },
    topContainer: {
        height: 60,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ff4d00',
        padding: 10,
        justifyContent: 'space-around'
    },
    input: {
        height: 40,
        width: '80%',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#fff'
    },
    productContainer: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        width: '100%'
    },
    flatList: {
        height: '100%'
    },
    productDiv: {
        height: 70,
        paddingHorizontal: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1
    },
    productInfo: {
        flex: 2,
        flexDirection: 'row', 
        justifyContent:'space-between',
        alignItems:'center'
    },
    addButton: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight:10,
        padding:10,
    },
    text:{
        fontSize:18,
        letterSpacing:2,
        fontWeight:'600'
    
    },
    price:{
        marginHorizontal:10,
        padding:10,
        backgroundColor:'#8080802e',
        borderRadius:5,
        fontSize:11,
        fontWeight:'900',
        borderColor:'#000',
        borderWidth:1
    }
})

