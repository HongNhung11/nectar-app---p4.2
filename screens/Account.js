import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { Entypo, Feather, Ionicons } from '@expo/vector-icons';

const AccountScreen = ({ navigation }) => {

  const MenuRow = ({ iconSource, label, onPress, showBorder = true }) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={styles.menuLeft}>
        <Image source={iconSource} style={styles.menuIcon} resizeMode="contain" />
        <Text style={styles.menuLabel}>{label}</Text>
      </View>
      <Entypo name="chevron-right" size={20} color="#181725" />
      {showBorder && <View style={styles.separator} />}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
 
        <View style={styles.header}>
          <Image source={require('../assets/anh/u10.png')} style={styles.avatar} />
          <View style={styles.userInfo}>
            <View style={styles.nameRow}>
              <Text style={styles.userName}>Afsar Hossen</Text>
              <TouchableOpacity><Ionicons name="pencil" size={16} color="#53B175" style={{marginLeft: 8}}/></TouchableOpacity>
            </View>
            <Text style={styles.userEmail}>lmshuvo97@gmail.com</Text>
          </View>
        </View>

        <View style={styles.menuSection}>
          <MenuRow iconSource={require('../assets/anh/Orders.png')} label="Orders" />
          <MenuRow iconSource={require('../assets/anh/MyDetails.png')} label="My Details" />
          <MenuRow iconSource={require('../assets/anh/address.png')} label="Delivery Address" />
          <MenuRow iconSource={require('../assets/anh/Vector.png')} label="Payment Methods" />
          <MenuRow iconSource={require('../assets/anh/Promo.png')} label="Promo Cord" />
          <MenuRow iconSource={require('../assets/anh/Bell.png')} label="Notifications" />
          <MenuRow iconSource={require('../assets/anh/Help.png')} label="Help" />
          <MenuRow iconSource={require('../assets/anh/about.png')} label="About" showBorder={false} />
        </View>

        {/* Log Out Button */}
        <TouchableOpacity style={styles.logoutBtn}>
          <Feather name="log-out" size={22} color="#53B175" style={styles.logoutIcon} />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  header: { flexDirection: 'row', alignItems: 'center', padding: 25, borderBottomWidth: 1, borderBottomColor: '#E2E2E2', marginTop: 10 },
  avatar: { width: 64, height: 64, borderRadius: 27 },
  userInfo: { marginLeft: 20 },
  nameRow: { flexDirection: 'row', alignItems: 'center' },
  userName: { fontSize: 20, fontWeight: 'bold', color: '#181725' },
  userEmail: { fontSize: 16, color: '#7C7C7C' },
  menuSection: { marginTop: 10 },
  menuItem: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 20, paddingHorizontal: 25, position: 'relative' },
  menuLeft: { flexDirection: 'row', alignItems: 'center' },
  menuIcon: { width: 20, height: 20 },
  menuLabel: { fontSize: 18, fontWeight: '600', color: '#181725', marginLeft: 15 },
  separator: { position: 'absolute', bottom: 0, left: 25, right: 25, height: 1, backgroundColor: '#E2E2E2' },
  logoutBtn: { backgroundColor: '#F2F3F2', height: 67, borderRadius: 19, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 25, marginTop: 40 },
  logoutIcon: { position: 'absolute', left: 20 },
  logoutText: { color: '#53B175', fontSize: 18, fontWeight: '600' }
});

export default AccountScreen;