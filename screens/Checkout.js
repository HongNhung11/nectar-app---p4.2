import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, Image, Pressable } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';

const CheckoutSheet = ({ visible, onClose, onPlaceOrder, totalPrice }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <Pressable style={styles.modalOverlay} onPress={onClose}>
        <Pressable style={styles.checkoutSheet}>
          {/* Header */}
          <View style={styles.sheetHeader}>
            <Text style={styles.sheetTitle}>Checkout</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={28} color="#181725" />
            </TouchableOpacity>
          </View>

          {/* Content */}
          <View style={styles.sheetContent}>
            <CheckoutRow label="Delivery" value="Select Method" />
            <CheckoutRow label="Pament" isIcon={true} />
            <CheckoutRow label="Promo Code" value="Pick discount" />
            <CheckoutRow label="Total Cost" value={`$${totalPrice}`} />

            <Text style={styles.termsText}>
              By placing an order you agree to our 
              <Text style={styles.termsBold}> Terms</Text> And 
              <Text style={styles.termsBold}> Conditions</Text>
            </Text>

            <TouchableOpacity 
              style={styles.placeOrderBtn}
              onPress={onPlaceOrder}
            >
              <Text style={styles.placeOrderText}>Place Order</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

const CheckoutRow = ({ label, value, isIcon }) => (
  <View style={styles.checkoutRow}>
    <Text style={styles.rowLabel}>{label}</Text>
    <View style={styles.rowRight}>
      {isIcon ? (
        <Image source={require('../assets/anh/card.png')} style={styles.cardIcon} />
      ) : (
        <Text style={styles.rowValue}>{value}</Text>
      )}
      <Entypo name="chevron-right" size={20} color="#181725" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
  checkoutSheet: { backgroundColor: 'white', borderTopLeftRadius: 30, borderTopRightRadius: 30, paddingBottom: 30 },
  sheetHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 25, borderBottomWidth: 1, borderBottomColor: '#E2E2E2' },
  sheetTitle: { fontSize: 24, fontWeight: '600', color: '#181725' },
  sheetContent: { paddingHorizontal: 25 },
  checkoutRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 20, borderBottomWidth: 1, borderBottomColor: '#E2E2E2' },
  rowLabel: { fontSize: 18, color: '#7C7C7C', fontWeight: '500' },
  rowRight: { flexDirection: 'row', alignItems: 'center' },
  rowValue: { fontSize: 16, color: '#181725', fontWeight: '600', marginRight: 10 },
  cardIcon: { width: 25, height: 18, marginRight: 10, resizeMode: 'contain' },
  termsText: { fontSize: 14, color: '#7C7C7C', marginTop: 20, lineHeight: 22 },
  termsBold: { color: '#181725', fontWeight: '600' },
  placeOrderBtn: { backgroundColor: '#53B175', height: 67, borderRadius: 19, justifyContent: 'center', alignItems: 'center', marginTop: 25 },
  placeOrderText: { color: 'white', fontSize: 18, fontWeight: '600' },
});

export default CheckoutSheet;