import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';

const CustomerDetail = ({ visible, customer, onClose }) => {
  if (!customer) return null;

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
        <View className="bg-white p-6 rounded-lg shadow-lg w-11/12">
          <Text className="text-2xl font-bold mb-4">{customer.name}</Text>
          <Text className="text-lg mb-2"><Text className="font-semibold">Email:</Text> {customer.email}</Text>
          <Text className="text-lg mb-2"><Text className="font-semibold">Size:</Text> {customer.size}</Text>
          <Text className="text-lg mb-2"><Text className="font-semibold">Phone No:</Text> {customer.phoneNo}</Text>
          <Text className="text-lg mb-2"><Text className="font-semibold">Number of Suits:</Text> {customer.noOfSuits}</Text>
          <Text className="text-lg mb-4"><Text className="font-semibold">Button Type:</Text> {customer.buttonType}</Text>
          <TouchableOpacity
            onPress={onClose}
            className="bg-blue-500 p-2 rounded-lg"
          >
            <Text className="text-white text-center">Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CustomerDetail;
