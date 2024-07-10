import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView, Modal, Button, SafeAreaView } from 'react-native';
import { CartContext } from './src/context/CartContext';

const HomeScreen = ({ navigation }) => {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

const truncateDescription = (description, length) => {
  if (description.length <= length) {
    return description;
  }
  return description.substring(0, length) + '...';
};

  const renderProduct = ({ item }) => (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => navigation.navigate('  ', { product: item })}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Image source={require("./assets/Resize.png")} style={styles.resizeButton} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addToCart(item)}>
        <Image source={require("./assets/add_circle.png")} style={styles.addButton} />
      </TouchableOpacity>
      <Text style={styles.productName}>{item.title}</Text>
      <Text style={styles.productDescription}>{truncateDescription(item.description, 100)}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
    </View>
  );

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

        <Modal
  animationType="fade"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => setModalVisible(!modalVisible)}>
  <View style={styles.modalView}>
    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={styles.closeButton}> 
              <Image source={require("./assets/Close.png")} style={styles.icon} />
    </TouchableOpacity>
    <Text style={styles.modalTitle}>Samuel Gyasi</Text>
    <View style={styles.coloredLine} />
    {["Store", "Locations", "Blog", "Jewelery", "Electronic", "Clothing"].map((menuItem, index) => (
      <Text key={index} style={styles.menuItem}>{menuItem}</Text>
    ))}
  </View>
</Modal>

      </View>
    </ScrollView>
   
  );
};

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
  modalView: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    width: '70%', 
    paddingTop: 80
  },
  closeButton: {
    paddingTop: 30,
    position: 'absolute',
    top: 10,
    left: 10,
  },
  modalTitle: {
    fontSize: 24,
    fontFamily: 'serif',
    marginBottom: 0,
  },
   coloredLine: {
    height: 2,
    backgroundColor: '#de8863', 
    marginVertical: 10,
    width: 100,
    marginBottom: 30,
    marginLeft: 20
  },
  menuItem: {
    fontSize: 20,
    fontFamily: 'sans-serif',
    marginBottom: 30,
    color: '#666',
   

  }
});


export default HomeScreen;
