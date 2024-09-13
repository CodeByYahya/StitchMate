import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

const AddCustomerForm = ({ onAdd, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [size, setSize] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [noOfSuits, setNoOfSuits] = useState('');
  const [buttonType, setButtonType] = useState('');

  const handleSubmit = () => {
    if (!name || !email || !size || !phoneNo || !noOfSuits || !buttonType) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    const newCustomer = {
      id: Date.now().toString(), // Generate a unique ID
      name,
      email,
      size,
      phoneNo,
      noOfSuits: parseInt(noOfSuits, 10),
      buttonType,
    };

    onAdd(newCustomer);
    resetForm();
    onClose();
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setSize('');
    setPhoneNo('');
    setNoOfSuits('');
    setButtonType('');
  };

  return (
    <View className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md mx-auto mb-4">
      <Text className="text-2xl font-bold mb-4">Add New Customer</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
        className="border p-2 mb-2 rounded"
      />
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
        className="border p-2 mb-2 rounded"
      />
      <TextInput
        value={size}
        onChangeText={setSize}
        placeholder="Size"
        className="border p-2 mb-2 rounded"
      />
      <TextInput
        value={phoneNo}
        onChangeText={setPhoneNo}
        placeholder="Phone No"
        keyboardType="phone-pad"
        className="border p-2 mb-2 rounded"
      />
      <TextInput
        value={noOfSuits}
        onChangeText={setNoOfSuits}
        placeholder="Number of Suits"
        keyboardType="numeric"
        className="border p-2 mb-2 rounded"
      />
      <TextInput
        value={buttonType}
        onChangeText={setButtonType}
        placeholder="Button Type"
        className="border p-2 mb-4 rounded"
      />
      <View className="flex-row justify-between">
        <TouchableOpacity
          onPress={handleSubmit}
          className="bg-blue-500 p-2 rounded-lg w-1/2 mr-2"
        >
          <Text className="text-white text-center">Add Customer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onClose}
          className="bg-gray-500 p-2 rounded-lg w-1/2 ml-2"
        >
          <Text className="text-white text-center">Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddCustomerForm;
