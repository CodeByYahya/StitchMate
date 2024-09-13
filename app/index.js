import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

const HomeScreen = () => {
  return (
    <View className="flex-1 justify-center items-center bg-yellow-100 p-4">
      <Text className="text-3xl font-bold mb-6 text-gray-800">
        Welcome to the Tailoring Customer Management App
      </Text>
      <TouchableOpacity
        className="bg-yellow-500 px-6 py-3 rounded-lg shadow-lg"
        onPress={() => router.push('customer')}
      >
        <Text className="text-white text-lg font-semibold text-center">
          Go to Customer List
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
