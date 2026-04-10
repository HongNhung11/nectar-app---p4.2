import React from 'react';
import {
  StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, 
  FlatList, Dimensions
} from 'react-native';

const { width } = Dimensions.get('window');
const cardWidth = (width - 60) / 2;

const EXPLORE_DATA = [
  { id: '1', name: 'Fresh Fruits & Vegetables', image: require('../assets/anh/vegetable.png'), bgColor: '#E5F3EA', borderColor: '#53B175' },
  { id: '2', name: 'Cooking Oil & Ghee', image: require('../assets/anh/oil.png'), bgColor: '#FEF6ED', borderColor: '#F8A44C' },
  { id: '3', name: 'Meat & Fish', image: require('../assets/anh/meat.png'), bgColor: '#FDEAE8', borderColor: '#F7A593' },
  { id: '4', name: 'Bakery & Snacks', image: require('../assets/anh/snacks.png'), bgColor: '#F4EBF7', borderColor: '#D3B0E0' },
  { id: '5', name: 'Dairy & Eggs', image: require('../assets/anh/egg.png'), bgColor: '#FFF8E1', borderColor: '#FDE598' },
  { id: '6', name: 'Beverages', image: require('../assets/anh/nuoc.png'), bgColor: '#EDF7FC', borderColor: '#B7DFF5' },
];

const ExploreScreen = ({ navigation }) => {

  const renderCategoryCard = ({ item }) => (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: item.bgColor, borderColor: item.borderColor }]}
      onPress={() => {
        if (item.id === '6') {
          navigation.navigate('Beverages');
        }
      }}
    >
      <Image source={item.image} style={styles.cardImage} resizeMode="contain" />
      <Text style={styles.cardName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Find Products</Text>
      </View>

      <TouchableOpacity 
        style={styles.searchContainer} 
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Search')}
      >
        <Image source={require('../assets/anh/timkiem.png')} style={styles.searchIcon} />
        <Text style={styles.searchPlaceholder}>Search Store</Text>
      </TouchableOpacity>

      {/* CATEGORY GRID */}
      <FlatList
        data={EXPLORE_DATA}
        renderItem={renderCategoryCard}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.listPadding}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.bottomTab}>
        <TabItem 
          icon={require('../assets/anh/shop.png')} 
          label="Shop" 
          onPress={() => navigation.navigate('Home')} 
        />
        <TabItem 
          icon={require('../assets/anh/explore.png')} 
          label="Explore" 
          active 
          onPress={() => navigation.navigate('Explore')} 
        />
        <TabItem 
          icon={require('../assets/anh/cart.png')} 
          label="Cart" 
          onPress={() => navigation.navigate('MyCart')} 
        />
        <TabItem 
          icon={require('../assets/anh/favourite.png')} 
          label="Favourite" 
          onPress={() => navigation.navigate('Favourite')} 
        />
        <TabItem 
          icon={require('../assets/anh/account.png')} 
          label="Account" 
        />
      </View>
    </SafeAreaView>
  );
};

const TabItem = ({ icon, label, active, onPress }) => (
  <TouchableOpacity style={styles.tabButton} onPress={onPress} activeOpacity={0.7}>
    <Image 
      source={icon} 
      style={[styles.tabIcon, { tintColor: active ? '#53B175' : '#181725' }]} 
    />
    <Text style={[styles.tabLabel, { color: active ? '#53B175' : '#181725' }]}>
      {label}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  header: { alignItems: 'center', marginTop: 15, marginBottom: 10 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#181725' },
  
  // Style search giống HomeScreen nhưng là nút bấm
  searchContainer: { 
    flexDirection: 'row', 
    backgroundColor: '#F2F3F2', 
    margin: 20, 
    borderRadius: 15, 
    padding: 15, 
    alignItems: 'center' 
  },
  searchIcon: { width: 18, height: 18, marginRight: 10 },
  searchPlaceholder: { fontSize: 16, color: '#7C7C7C' },

  listPadding: { paddingHorizontal: 20, paddingBottom: 100 },
  card: {
    width: cardWidth,
    height: 190,
    borderRadius: 18,
    borderWidth: 1,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15
  },
  cardImage: { width: '100%', height: 90, marginBottom: 20 },
  cardName: { fontSize: 16, fontWeight: 'bold', color: '#181725', textAlign: 'center' },

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
  tabIcon: { width: 24, height: 24 },
  tabLabel: { fontSize: 12, marginTop: 4, fontWeight: '600' }
});

export default ExploreScreen;