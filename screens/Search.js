import React, { useState } from 'react';
import { 
  StyleSheet, Text, View, SafeAreaView, Image, 
  TextInput, FlatList, TouchableOpacity, Dimensions 
} from 'react-native';
import { Ionicons, Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const cardWidth = (width - 50) / 2;

const ALL_PRODUCTS = [
  { id: '1', name: 'Egg Chicken Red', spec: '4pcs, Price', price: '$1.99', image: require('../assets/anh/eggdo.png') },
  { id: '2', name: 'Egg Chicken White', spec: '180g, Price', price: '$1.50', image: require('../assets/anh/eggtrang.png') },
  { id: '3', name: 'Egg Pasta', spec: '30gm, Price', price: '$15.99', image: require('../assets/anh/nui.png') },
  { id: '4', name: 'Egg Noodles', spec: '2L, Price', price: '$15.99', image: require('../assets/anh/egg-noodle.png') },
  { id: '5', name: 'Mayonnais Eggless', spec: '1kg, Price', price: '$4.99', image: require('../assets/anh/Mayonnaise.png') },
  { id: '6', name: 'Egg Noodles Mi', spec: '250g, Price', price: '$3.00', image: require('../assets/anh/mi.png') },
];

const SearchScreen = ({ navigation }) => {
  // State quản lý việc gõ chữ
  const [searchText, setSearchText] = useState('Egg');

  const filteredProducts = ALL_PRODUCTS.filter(item => 
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.cardImage} resizeMode="contain" />
      <Text style={styles.cardName} numberOfLines={2}>{item.name}</Text>
      <Text style={styles.cardSpec}>{item.spec}</Text>
      <View style={styles.cardFooter}>
        <Text style={styles.cardPrice}>{item.price}</Text>
        <TouchableOpacity style={styles.addButton}>
          <AntDesign name="plus" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER SEARCH */}
      <View style={styles.headerSearch}>
        <View style={styles.searchInputContainer}>
          <Ionicons name="search" size={22} color="#181725" style={{ marginRight: 10 }} />
          <TextInput 
            style={styles.input} 
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
            placeholder="Search Store"
          />
          {searchText !== '' && (
            <TouchableOpacity onPress={() => setSearchText('')}>
              <Ionicons name="close-circle" size={18} color="#7C7C7C" />
            </TouchableOpacity>
          )}
        </View>
        
        {/* NÚT FILTER ĐIỀU HƯỚNG */}
        <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
          <MaterialCommunityIcons name="tune-variant" size={24} color="#181725" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={{ alignItems: 'center', marginTop: 50 }}>
            <Text style={{ color: '#7C7C7C' }}>No results found for "{searchText}"</Text>
          </View>
        )}
      />

      {/* BOTTOM NAVIGATION */}
      <View style={styles.bottomTab}>
        <TabItem iconName="shopping-bag" label="Shop" onPress={() => navigation.navigate('Home')} />
        <TabItem iconName="search" label="Explore" active onPress={() => navigation.navigate('Explore')} />
        <TabItem iconName="shopping-cart" label="Cart" onPress={() => navigation.navigate('MyCart')} />
        <TabItem iconName="heart" label="Favourite" onPress={() => navigation.navigate('Favourite')} />
        <TabItem iconName="user" label="Account" />
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
  headerSearch: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingHorizontal: 20, 
    paddingVertical: 15 
  },
  searchInputContainer: { 
    flex: 1, 
    flexDirection: 'row', 
    backgroundColor: '#F2F3F2', 
    borderRadius: 15, 
    paddingHorizontal: 15, 
    height: 50, 
    alignItems: 'center', 
    marginRight: 15 
  },
  input: { flex: 1, fontSize: 16, fontWeight: '600', color: '#181725' },
  list: { paddingHorizontal: 15, paddingBottom: 100 },
  card: { 
    width: cardWidth, 
    borderRadius: 18, 
    borderWidth: 1, 
    borderColor: '#E2E2E2', 
    padding: 15, 
    margin: 7,
    backgroundColor: '#FFF'
  },
  cardImage: { width: '100%', height: 100, marginBottom: 15 },
  cardName: { fontSize: 16, fontWeight: 'bold', color: '#181725', height: 42 },
  cardSpec: { color: '#7C7C7C', fontSize: 14, marginVertical: 5 },
  cardFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cardPrice: { fontSize: 18, fontWeight: 'bold' },
  addButton: { 
    backgroundColor: '#53B175', 
    width: 45, 
    height: 45, 
    borderRadius: 17, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  bottomTab: { 
    flexDirection: 'row', 
    borderTopWidth: 1, 
    borderTopColor: '#F2F3F2', 
    paddingVertical: 10, 
    position: 'absolute', 
    bottom: 0, 
    backgroundColor: '#FFF', 
    width: '100%', 
    justifyContent: 'space-around' 
  },
  tabButton: { alignItems: 'center', flex: 1 },
  tabLabel: { fontSize: 12, marginTop: 4, fontWeight: '600' }
});

export default SearchScreen;