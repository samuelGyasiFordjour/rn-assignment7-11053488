import React , {useContext}from 'react';
import { View, Text, StyleSheet, Image, ScrollView,TouchableOpacity } from 'react-native';
import { CartContext } from './src/context/CartContext';


const PreviewScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const { addToCart } = useContext(CartContext);

const truncateName= (name, length) => {
  if (name.length <= length) {
    return name;
  }
  return name.substring(0, length) + '...';
};

  return (
   <ScrollView >
    <View style={styles.container}>
            <View style={styles.header}>
          <TouchableOpacity >
            <Image source={require("./assets/Menu.png")} />
          </TouchableOpacity>
          <View>
            <Image source={require("./assets/Logo.png")} style={{ marginLeft: 50 , resizeMode: 'contain'}} />
          </View>
          <View style={styles.headerIcons}>
            <Image source={require("./assets/Search.png")} style={styles.icon} />
            <TouchableOpacity onPress={() => navigation.navigate(' ')}>
              <Image source={require("./assets/shoppingBag.png")} style={styles.icon1} />
            </TouchableOpacity>
          </View>
        </View>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}> 
      <Text style={styles.productName}>{truncateName(product.title,30)}</Text>
      <Image source={require("./assets/Export.png")} style={{   resizeMode: 'contain'}} />
      </View>
      <Text style={styles.productDescription}>{product.description}</Text>
      <Text style={styles.productPrice}>{`$${product.price}`}</Text>

    </View>
      
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 0,
    paddingHorizontal: 15
  },
  image: {
    width: '100%',
    height: 450,
    resizeMode: 'contain'
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
  productName: {
    fontSize: 24,
    fontFamily: 'sans-serif',
    marginVertical: 5,
  },
  productDescription: {
    fontSize: 16,
    color: '#666',
    marginVertical: 5,
  },
  productPrice: {
    fontSize: 20,
    color: '#de8863',
    fontWeight: 'bold',
  },
  
});

export default PreviewScreen;
