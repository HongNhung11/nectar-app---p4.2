import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';

export default function OrderAccepted({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.center}>
        <Image source={require('../assets/anh/Group.png')} style={styles.img} resizeMode="contain" />
        <Text style={styles.title}>Your Order has been{'\n'}accepted</Text>
        <Text style={styles.desc}>Your items has been placed and is on its way to being processed</Text>
      </View>
      
      <View style={styles.footer}>
        <TouchableOpacity style={styles.btn}><Text style={styles.btnText}>Track Order</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('MyCart')}>
          <Text style={styles.backText}>Back to home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 30 },
  img: { width: 250, height: 250, marginBottom: 40 },
  title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center' },
  desc: { fontSize: 16, color: '#7C7C7C', textAlign: 'center', marginTop: 20 },
  footer: { padding: 25 },
  btn: { backgroundColor: '#53B175', height: 65, borderRadius: 19, justifyContent: 'center', alignItems: 'center' },
  btnText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  backText: { textAlign: 'center', marginTop: 20, fontSize: 18, fontWeight: '600' }
});