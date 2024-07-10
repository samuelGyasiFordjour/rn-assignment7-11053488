import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView, Modal, Button, SafeAreaView } from 'react-native';
import { CartContext } from './src/context/CartContext';

const HomeScreen = ({ navigation }) => {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);


  return (
    
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Image source={require("./assets/Menu.png")} />
          </TouchableOpacity>
          <View>
            <Image source={require("./assets/Logo.png")} style={{ marginLeft: 50 , resizeMode: 'contain'}} />
          </View>
          <View style={styles.headerIcons}>
            <Image source={require("./assets/Search.png")} style={styles.icon} />
            <TouchableOpacity onPress={() => navigation.navigate(' ')}>
              <Image source={require("./assets/shoppingBag.png")} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.subHeader}>
          <Text style={styles.subHeaderText}>OUR STORY</Text>

          <View style={styles.subHeaderIcons}>
            <View style={styles.iconbg}>
              <Image source={require("./assets/Listview.png")} style={styles.icon} />
            </View>
            <View style={styles.iconbg}>
              <Image source={require("./assets/Filter.png")} style={styles.icon} />
            </View>
          </View>
        </View>

        <FlatList
          data={products}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.productList}
        />

       
      </View>
    </ScrollView>
   
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    marginHorizontal: 10
  },
  subHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  subHeaderText: {
    fontSize: 24,
    fontFamily: 'sans-serif',
  },
  iconbg: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#f9f9f9',
    marginLeft: 10,
  },
  subHeaderIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productList: {
    paddingHorizontal: 0
  },
  card: {
    flex: 1,
    margin: 0,
    backgroundColor: '#fff',
    padding: 10,
  },
  image: {
    width: '100%',
    height: 270,
    resizeMode: 'contain',
  },
  resizeButton: {
    position: 'absolute',
    bottom: 10,
    left: 5,
    padding: 5
  },
  addButton: {
    position: 'absolute',
    bottom: 10,
    right: 5,
    padding: 5
  },
  productName: {
    fontSize: 16,
    marginVertical: 5,
    fontFamily: 'sans-serif'
  },
  productDescription: {
    fontSize: 14,
    color: '#666'
  },
  productPrice: {
    fontSize: 14,
    color: '#de8863',
    fontWeight: 'bold'
  },  
})