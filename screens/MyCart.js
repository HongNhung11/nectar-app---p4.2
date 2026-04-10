import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native';
import { Ionicons, AntDesign, Feather } from '@expo/vector-icons';
import Checkout from '../screens/Checkout';

const MyCartScreen = ({ navigation }) => {
  const [checkoutVisible, setCheckoutVisible] = useState(false);
  
  const [cartItems, setCartItems] = useState([
    { id: '5', name: 'Bell Pepper Red', spec: '1kg, Price', price: 4.99, image: require('../assets/anh/ot.png'), quantity: 1 },
    { id: '1', name: 'Egg Chicken Red', spec: '4pcs, Price', price: 1.99, image: require('../assets/anh/eggdo.png'), quantity: 1 },
    { id: '11', name: 'Organic Bananas', spec: '12kg, Price', price: 3.00, image: require('../assets/anh/chuoi.png'), quantity: 1 },
    { id: '10', name: 'Ginger', spec: '250gm, Price', price: 2.99, image: require('../assets/anh/gung.png'), quantity: 1 },
  ]);

  const updateQuantity = (id, type) => {
    const newData = cartItems.map(item => {
      if (item.id === id) {
        const newQty = type === 'plus' ? item.quantity + 1 : Math.max(1, item.quantity - 1);
        return { ...item, quantity: newQty };
      }
      return item;
    });
    setCartItems(newData);
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);

  // Xử lý logic khi nhấn Place Order
  const handlePlaceOrder = () => {
    setCheckoutVisible(false); 
    const isSuccess = Math.random() > 0.3; 

    if (isSuccess) {
      navigation.navigate('OrderAccepted');
    } else {
      navigation.navigate('Error'); 
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.itemImage} resizeMode="contain" />
      <View style={styles.itemDetails}>
        <View style={styles.rowBetween}>
          <Text style={styles.itemName}>{item.name}</Text>
          <TouchableOpacity onPress={() => removeItem(item.id)}>
            <Ionicons name="close" size={24} color="#B3B3B3" />
          </TouchableOpacity>
        </View>
        <Text style={styles.itemSpec}>{item.spec}</Text>
        <View style={styles.rowBetween}>
          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.qtyBtn} onPress={() => updateQuantity(item.id, 'minus')}>
              <AntDesign name="minus" size={20} color="#B3B3B3" />
            </TouchableOpacity>
            <Text style={styles.qtyText}>{item.quantity}</Text>
            <TouchableOpacity style={styles.qtyBtn} onPress={() => updateQuantity(item.id, 'plus')}>
              <AntDesign name="plus" size={20} color="#53B175" />
            </TouchableOpacity>
          </View>
          <Text style={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Cart</Text>
      </View>

      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={{ paddingBottom: 180 }} 
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.footerContainer}>
        <TouchableOpacity 
          style={styles.checkoutBtn} 
          onPress={() => setCheckoutVisible(true)}
        >
          <Text style={styles.checkoutText}>Go to Checkout</Text>
          <View style={styles.totalBadge}>
            <Text style={styles.totalBadgeText}>${totalPrice}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Checkout 
        visible={checkoutVisible}
        onClose={() => setCheckoutVisible(false)}
        totalPrice={totalPrice}
        onPlaceOrder={handlePlaceOrder}
      />

      <View style={styles.bottomTab}>
        <TabItem iconName="shopping-bag" label="Shop" onPress={() => navigation.navigate('Home')} />
        <TabItem iconName="search" label="Explore" onPress={() => navigation.navigate('Explore')} />
        <TabItem iconName="shopping-cart" label="Cart" active />
        <TabItem iconName="heart" label="Favourite" onPress={() => navigation.navigate('Favourite')} />
        <TabItem iconName="user" label="Account" onPress={() => navigation.navigate('Account')} />
      </View>
    </SafeAreaView>
  );
};

const TabItem = ({ iconName, label, active, onPress }) => (
  <TouchableOpacity style={styles.tabButton} onPress={onPress}>
    <Feather name={iconName} size={24} color={active ? '#53B175' : '#181725'} />
    <Text style={[styles.tabLabel, { color: active ? '#53B175' : '#181725' }]}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  header: { paddingVertical: 20, borderBottomWidth: 1, borderBottomColor: '#E2E2E2', alignItems: 'center' },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#181725' },
  cartItem: { flexDirection: 'row', padding: 20, alignItems: 'center' },
  itemImage: { width: 70, height: 70 },
  itemDetails: { flex: 1, marginLeft: 20 },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  itemName: { fontSize: 16, fontWeight: 'bold', color: '#181725' },
  itemSpec: { color: '#7C7C7C', fontSize: 14, marginVertical: 5 },
  quantityContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  qtyBtn: { width: 45, height: 45, borderRadius: 17, borderWidth: 1, borderColor: '#E2E2E2', justifyContent: 'center', alignItems: 'center' },
  qtyText: { fontSize: 16, fontWeight: 'bold', marginHorizontal: 15 },
  itemPrice: { fontSize: 18, fontWeight: 'bold', color: '#181725' },
  separator: { height: 1, backgroundColor: '#E2E2E2', marginHorizontal: 20 },
  
  footerContainer: { position: 'absolute', bottom: 90, left: 0, right: 0, paddingHorizontal: 20, backgroundColor: 'transparent' },
  checkoutBtn: { backgroundColor: '#53B175', height: 65, borderRadius: 19, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  checkoutText: { color: 'white', fontSize: 18, fontWeight: '600' },
  totalBadge: { position: 'absolute', right: 20, backgroundColor: '#489E67', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 4 },
  totalBadgeText: { color: 'white', fontSize: 12, fontWeight: 'bold' },

  bottomTab: { flexDirection: 'row', borderTopWidth: 1, borderTopColor: '#F2F3F2', paddingVertical: 10, position: 'absolute', bottom: 0, backgroundColor: '#FFF', width: '100%', justifyContent: 'space-around', paddingBottom: 20 },
  tabButton: { alignItems: 'center', flex: 1 },
  tabLabel: { fontSize: 12, marginTop: 4, fontWeight: '600' }
});

export default MyCartScreen;