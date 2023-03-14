import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import CartIcon from "react-native-vector-icons/MaterialIcons";
import { productsData } from "../../components/data/Products";
import PlusIcon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/actions";
let storeItemsObj;

const Home = ({ navigation }) => {
  const [products, setProducts] = useState(productsData);
  const [searchedProducts, setSearchedProducts] = useState(productsData);
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch()


  const addItemToCart = (item)=>{
    dispatch(addItem(item))
  }
  // store products to AsyncStorage
  // const storeItem = async (item) => {
  //     const itemObj = {
  //         name: item.name,
  //         price: item.price,
  //         id: item.id
  //     }
  //     const data = await AsyncStorage.getItem('storeItems')
  //     if (!data) {
  //         storeItemsObj = []
  //     }
  //     else {
  //         storeItemsObj = JSON.parse(data)
  //     }
  //     storeItemsObj.push(itemObj)
  //     await AsyncStorage.setItem('storeItems', JSON.stringify(storeItemsObj))
  // }

  // search products logic
  const searchProducts = (text) => {
    if (text) {
      const searchedData = products.filter((item) => {
        const productName = item.name
          ? item.name.toUpperCase()
          : " ".toUpperCase();
        const textData = text.toUpperCase();
        return productName.indexOf(textData) !== -1;
      });
      setSearchedProducts(searchedData);
      setSearchText(text);
    } else {
      setSearchedProducts(products);
      setSearchText(text);
    }
  };

  // product list render item
  const productCard = ({ item }) => {
    return (
      <View style={styles.productDiv}>
        <View style={styles.productInfo}>
          <Text style={styles.text}>
            {item.id}) {item.name}
          </Text>
          <Text style={[styles.text, styles.price]}>{item.price}rs.</Text>
        </View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            addItemToCart(item)
          }}
        >
          <PlusIcon name="plus" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <TextInput
          style={styles.input}
          value={searchText}
          onChangeText={(text) => {
            searchProducts(text);
          }}
          underlineColorAndroid="transparent"
          placeholder="Search items to buy"
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Cart");
          }}
        >
          <CartIcon size={30} name="add-shopping-cart" color="#000" />
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.flatList}
        data={searchedProducts}
        renderItem={productCard}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: "100%",
  },
  topContainer: {
    height: 60,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ff4d00",
    padding: 10,
    justifyContent: "space-around",
  },
  input: {
    height: 40,
    width: "80%",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  productContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    width: "100%",
  },
  flatList: {
    height: "100%",
  },
  productDiv: {
    height: 70,
    paddingHorizontal: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
  },
  productInfo: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addButton: {
    flex: 1,
    alignItems: "flex-end",
    marginRight: 10,
    padding: 10,
  },
  text: {
    fontSize: 18,
    letterSpacing: 2,
    fontWeight: "600",
  },
  price: {
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: "#8080802e",
    borderRadius: 5,
    fontSize: 11,
    fontWeight: "900",
    borderColor: "#000",
    borderWidth: 1,
  },
});
