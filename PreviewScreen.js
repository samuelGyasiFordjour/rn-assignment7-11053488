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

      <View style={styles.materialSection}>
        <Text style={styles.sectionTitle}>Material</Text>
        <Text style={styles.materialDescription}>We work with monitoring programmes to
ensure compliance with safety, health and
quality standards for our products.</Text>
      </View>

      <View style={styles.carePoints}>
        {[
          { text: "Do not use bleach", icon: require("./assets/DoNotBleach.png") },
          { text: "Do not tumble dry", icon: require("./assets/DoNotTumbleDry.png") },
          { text: "Dry clean with tetrachloroethylene", icon: require("./assets/DoNotWash.png") },
          { text: "Iron at a maximum of 110°C/230°F", icon: require("./assets/IronLowTemperature.png") },
        ].map((point, index) => (
          <View key={index} style={styles.carePoint}>
            <Image source={point.icon} style={styles.icon} />
            <Text style={styles.careText}>{point.text}</Text>
          </View>
        ))}
      </View>

      <View style={styles.separator} />

      <View style={styles.shippingInfo}>
        <View style={styles.shippingItem}>
          <Image source={require('./assets/Shipping.png')} style={styles.icon} />
          <Text style={styles.shippingText}>Free Flat Rate Shipping</Text>
        </View>
        <Text style={styles.shippingText}>Estimated to be delivered on </Text>
        <Text style={styles.shippingText}>09/11/2021 - 12/11/2021</Text>
        <Image source={require('./assets/Up.png')} style={styles.iconRight} />
      </View>
    </View>
      <View style={styles.addToBasketContainer}>
      <TouchableOpacity style={styles.iconLeft} onPress={() => addToCart(product)}>
        <Image source={require('./assets/Plus.png')} style={styles.addIcon} />
        <Text style={styles.addToBasketText}>ADD TO BASKET</Text>
        </TouchableOpacity>
        <Image source={require('./assets/Heart.png')} style={styles.addIcon} />
      </View>
    </ScrollView>
  );
};

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
  materialSection: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'sans-serif',
    marginVertical: 5,
  },
  materialDescription: {
    fontSize: 16,
    color: '#666',
    marginVertical: 5,
  },
  carePoints: {
    flexDirection: 'column',
    marginVertical: 10,
  },
  carePoint: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  careText: {
    fontSize: 16,
    color: '#666',
    marginLeft: 10,
  },
  icon1: {
    width: 30,
    height: 30,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 20,
  },
  shippingInfo: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginVertical: 10,
  },
  shippingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  shippingText: {
    fontSize: 16,
    color: '#666',
    marginLeft: 10,
  },
  iconRight: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  addToBasketContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 200,
    backgroundColor: 'black',
    height: 80,
    width: '100%',
    paddingHorizontal: 10,
  },
  addToBasketText: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'san-serif'
  },
  iconLeft: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addIcon: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
    tintColor: 'white'
  }
});

export default PreviewScreen;
