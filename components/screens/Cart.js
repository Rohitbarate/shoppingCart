import React, { useState } from 'react';
import { StyleSheet, Text, View,FlatList ,TouchableOpacity} from 'react-native';

const Cart = () => {
const [addedItems , setaddedItems] = useState(productItems)

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
    }
]

const productCard = ({ item }) => {
    return (
        <View style={styles.productDiv}>
            <View style={styles.productInfo}>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={[styles.text,styles.price]}>{item.price}rs.</Text>
            </View>
            {/* <TouchableOpacity style={styles.addButton}>
                <PlusIcon
                name='plus'
                size={20}
                color='#000'
                 />
            </TouchableOpacity> */}
        </View>
    )

}


  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headText}>Available Items </Text>
    <FlatList 
        data={productItems}
        renderItem={productCard}
        keyExtractor={item=>item.id}
    />
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width: '100%',
    },
    headText:{
        textAlign:'center',
        fontSize:24,
        paddingVertical:10,
        letterSpacing:2,
        borderBottomColor:'#000',
        borderBottomWidth:1,
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
    productInfo: {
        flex: 2,
        flexDirection: 'row', 
        justifyContent:'space-between',
        alignItems:'center'
    },
    addButton: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight:20
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