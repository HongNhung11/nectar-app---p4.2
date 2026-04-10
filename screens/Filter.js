import React, { useState } from 'react';
import { 
  StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView 
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const FilterScreen = ({ navigation }) => {
 
  const [selectedCategory, setSelectedCategory] = useState('Eggs');
  const [selectedBrand, setSelectedBrand] = useState('Cocola');

  const CheckOption = ({ label, selected, onPress }) => (
    <TouchableOpacity style={styles.optionRow} onPress={onPress}>
      <View style={[
        styles.checkbox, 
        selected && styles.checkboxActive
      ]}>
       
        {selected && <Ionicons name="checkmark" size={16} color="white" />}
      </View>
      <Text style={[styles.optionText, selected && { color: '#53B175' }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        
          <Ionicons name="close" size={28} color="#181725" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Filters</Text>
        <View style={{ width: 28 }} /> 
      </View>

      <ScrollView style={styles.content}>
        {/* PHẦN CATEGORIES */}
        <Text style={styles.sectionTitle}>Categories</Text>
        <CheckOption 
          label="Eggs" 
          selected={selectedCategory === 'Eggs'} 
          onPress={() => setSelectedCategory('Eggs')} 
        />
        <CheckOption 
          label="Noodles & Pasta" 
          selected={selectedCategory === 'Noodles & Pasta'} 
          onPress={() => setSelectedCategory('Noodles & Pasta')} 
        />
        <CheckOption 
          label="Chips & Crisps" 
          selected={selectedCategory === 'Chips & Crisps'} 
          onPress={() => setSelectedCategory('Chips & Crisps')} 
        />
        <CheckOption 
          label="Fast Food" 
          selected={selectedCategory === 'Fast Food'} 
          onPress={() => setSelectedCategory('Fast Food')} 
        />

        {/* PHẦN BRAND */}
        <Text style={[styles.sectionTitle, { marginTop: 30 }]}>Brand</Text>
        <CheckOption 
          label="Individual Collection" 
          selected={selectedBrand === 'Individual Collection'} 
          onPress={() => setSelectedBrand('Individual Collection')} 
        />
        <CheckOption 
          label="Cocola" 
          selected={selectedBrand === 'Cocola'} 
          onPress={() => setSelectedBrand('Cocola')} 
        />
        <CheckOption 
          label="Ifad" 
          selected={selectedBrand === 'Ifad'} 
          onPress={() => setSelectedBrand('Ifad')} 
        />
        <CheckOption 
          label="Kazi Farmas" 
          selected={selectedBrand === 'Kazi Farmas'} 
          onPress={() => setSelectedBrand('Kazi Farmas')} 
        />
      </ScrollView>

      {/* NÚT APPLY FILTER */}
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.applyButton} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.applyButtonText}>Apply Filter</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  header: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    paddingHorizontal: 20, 
    paddingVertical: 15 
  },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#181725' },
  content: { flex: 1, paddingHorizontal: 20, backgroundColor: '#F2F3F2', borderTopLeftRadius: 30, borderTopRightRadius: 30 },
  sectionTitle: { fontSize: 24, fontWeight: '600', color: '#181725', marginTop: 30, marginBottom: 15 },
  optionRow: { flexDirection: 'row', alignItems: 'center', marginVertical: 12 },
  checkbox: { 
    width: 24, 
    height: 24, 
    borderRadius: 8, 
    borderWidth: 1.5, 
    borderColor: '#B1B1B1', 
    marginRight: 15, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  checkboxActive: { backgroundColor: '#53B175', borderColor: '#53B175' },
  optionText: { fontSize: 18, color: '#181725', fontWeight: '500' },
  footer: { padding: 20, backgroundColor: '#F2F3F2' },
  applyButton: { 
    backgroundColor: '#53B175', 
    borderRadius: 19, 
    height: 67, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  applyButtonText: { color: 'white', fontSize: 18, fontWeight: '600' }
});

export default FilterScreen;