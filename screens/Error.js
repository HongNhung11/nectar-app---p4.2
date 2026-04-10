import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ErrorScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity style={styles.closeBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={28} color="#181725" />
        </TouchableOpacity>

        <Image source={require('../assets/anh/image13.png')} style={styles.img} resizeMode="contain" />
        <Text style={styles.title}>Oops! Order Failed</Text>
        <Text style={styles.subTitle}>Something went terribly wrong.</Text>

        <TouchableOpacity style={styles.retryBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.retryText}>Please Try Again</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.backHome}>Back to home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F2F3F2', justifyContent: 'center', padding: 25 },
  card: { backgroundColor: 'white', borderRadius: 20, padding: 20, alignItems: 'center' },
  closeBtn: { alignSelf: 'flex-start' },
  img: { width: 200, height: 200, marginVertical: 20 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#181725' },
  subTitle: { fontSize: 16, color: '#7C7C7C', textAlign: 'center', marginTop: 10 },
  retryBtn: { backgroundColor: '#53B175', width: '100%', height: 65, borderRadius: 19, justifyContent: 'center', alignItems: 'center', marginTop: 40, marginBottom: 15 },
  retryText: { color: 'white', fontSize: 18, fontWeight: '600' },
  backHome: { fontSize: 18, fontWeight: '600', color: '#181725' }
});

export default ErrorScreen;