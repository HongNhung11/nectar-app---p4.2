import React from 'react';
import { 
  StyleSheet, Text, View, SafeAreaView, FlatList, Image, TouchableOpacity 
} from 'react-native';
import { Feather, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

const FAVOURITES_DATA = [
  { id: '1', name: 'Sprite Can', spec: '325ml, Price', price: 1.50, image: require('../assets/anh/sprite.png') },
  { id: '2', name: 'Diet Coke', spec: '355ml, Price', price: 1.99, image: require('../assets/anh/coke.png') },
  { id: '3', name: 'Apple & Grape Juice', spec: '2L, Price', price: 15.50, image: require('../assets/anh/treetop.png') },
  { id: '4', name: 'Coca Cola Can', spec: '325ml, Price', price: 4.99, image: require('../assets/anh/coca.png') },
  { id: '5', name: 'Pepsi Can', spec: '330ml, Price', price: 4.99, image: require('../assets/anh/pepsi.png') },
];

const FavouriteScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.favItem}>
      <Image source={item.image} style={styles.favImage} resizeMode="contain" />
      <View style={styles.favInfo}>
        <Text style={styles.favName}>{item.name}</Text>
        <Text style={styles.favSpec}>{item.spec}</Text>
      </View>
      <View style={styles.rightSection}>
        <Text style={styles.favPrice}>${item.price.toFixed(2)}</Text>
        <Entypo name="chevron-right" size={20} color="#181725" />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
     
      <View style={styles.header}>
        <Text style={styles.title}>Favorurite</Text>
      </View>
      
      <View style={styles.divider} />
      
      <FlatList 
        data={FAVOURITES_DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
        contentContainerStyle={{ paddingBottom: 180 }}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.footerAction}>
        <TouchableOpacity 
          style={styles.mainBtn} 
          onPress={() => navigation.navigate('MyCart')}
        >
          <Text style={styles.mainBtnText}>Add All To Cart</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomTab}>
        <TabItem iconName="storefront-outline" label="Shop" onPress={() => navigation.navigate('Home')} isMaterial />
        <TabItem iconName="search" label="Explore" onPress={() => navigation.navigate('Explore')} />
        <TabItem iconName="cart-outline" label="Cart" onPress={() => navigation.navigate('MyCart')} isMaterial />
        <TabItem iconName="heart" label="Favourite" active onPress={() => {}} />
        <TabItem iconName="user" label="Account" />
      </View>
    </SafeAreaView>
  );
};

const TabItem = ({ iconName, label, active, onPress, isMaterial }) => (
  <TouchableOpacity style={styles.tabButton} onPress={onPress}>
    {isMaterial ? (
      <MaterialCommunityIcons name={iconName} size={24} color={active ? '#53B175' : '#181725'} />
    ) : (
      <Feather name={iconName} size={24} color={active ? '#53B175' : '#181725'} />
    )}
    <Text style={[styles.tabLabel, { color: active ? '#53B175' : '#181725' }]}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  header: { paddingVertical: 25, backgroundColor: '#FFF' },
  title: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#181725' },
  favItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 20, paddingHorizontal: 20 },
  favImage: { width: 50, height: 50 },
  favInfo: { flex: 1, marginLeft: 20 },
  favName: { fontSize: 16, fontWeight: 'bold', color: '#181725' },
  favSpec: { color: '#7C7C7C', fontSize: 14, marginTop: 3 },
  rightSection: { flexDirection: 'row', alignItems: 'center' },
  favPrice: { fontSize: 16, fontWeight: 'bold', color: '#181725', marginRight: 10 },
  divider: { height: 1, backgroundColor: '#E2E2E2', marginHorizontal: 20 },
  footerAction: { position: 'absolute', bottom: 100, left: 0, right: 0, paddingHorizontal: 20 },
  mainBtn: { backgroundColor: '#53B175', height: 65, borderRadius: 19, justifyContent: 'center', alignItems: 'center' },
  mainBtnText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  bottomTab: { 
    flexDirection: 'row', borderTopWidth: 1, borderTopColor: '#F2F3F2', 
    paddingVertical: 10, position: 'absolute', bottom: 0, backgroundColor: '#FFF', 
    width: '100%', justifyContent: 'space-around', paddingBottom: 25
  },
  tabButton: { alignItems: 'center', flex: 1 },
  tabLabel: { fontSize: 12, marginTop: 4, fontWeight: '600' }
});

export default FavouriteScreen;