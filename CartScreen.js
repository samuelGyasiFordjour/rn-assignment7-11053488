import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { CartContext } from './src/context/CartContext';

const CartScreen = () => {
  const { cart, removeFromCart, totalPrice } = useContext(CartContext);

  const truncateDescription = (description, length) => {
  if (description.length <= length) {
    return description;
  }
  return description.substring(0, length) + '...';
};


  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.cartItemImage} />
      <View style={styles.cartItemDetails}>
        <Text style={styles.cartItemName}>{item.title}</Text>
        <Text style={styles.cartItemDescription}>{truncateDescription(item.description, 100)}</Text>
        <Text style={styles.cartItemPrice}>${item.price}</Text>
      </View>
      <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.cartItemDelete}>
        <Image source={require('./assets/remove.png')} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text> </Text>
        <View>
            <Image source={require("./assets/Logo.png")} style={{ marginLeft: 20 , resizeMode: 'contain'}} />
          </View>
        <Image source={require("./assets/Search.png")} style={styles.icon} />
      </View>

<View style={{ justifyContent: 'center', alignItems: 'center' }} >
            <Image source={require("./assets/checkout1.png")} style={{   resizeMode: 'contain'}} />
          </View>

      <FlatList
        data={cart}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.cartList}
      />

      
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20}}>
        <Text style={styles.totalText}>EST. TOTAL</Text>
        <Text style={styles.total}> ${totalPrice()}</Text>
        </View>
        <TouchableOpacity style={styles.checkoutButton}>
        <Image source={require("./assets/shoppingBag.png")} style={{  tintColor: 'white', resizeMode: 'contain'}} />
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>
      


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  cartList: {
    paddingHorizontal: 0
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  cartItemImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  cartItemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  cartItemName: {
    fontSize: 16,
    fontFamily: 'sans-serif',
  },
  cartItemDescription: {
    fontSize: 14,
    color: '#666'
  },
  cartItemPrice: {
    fontSize: 14,
    color: '#de8863',
    fontWeight: 'bold'
  },
  cartItemDelete: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  totalText: {
    fontSize: 18,
    marginVertical: 10,
    fontFamily: 'san-serif',
    color: '#666'
  },
  total: {
    fontSize: 24,
    marginVertical: 10,
    color: '#de8863'
  },
  checkoutButton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'

  },
  checkoutText: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'san-serif',
    marginLeft: 10
  },
});

export default CartScreen;
