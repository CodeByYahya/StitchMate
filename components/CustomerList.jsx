import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import CustomerDetail from './CustomerDetail'; // Import the CustomerDetail component
import AddCustomerForm from './AddCustomer'; // Import the AddCustomerForm component

const CustomerList = () => {
  const [customers, setCustomers] = useState([
    { 
      id: '1', 
      name: 'Ahmed Khan', 
      email: 'ahmed.khan@example.com', 
      size: 'Medium', 
      phoneNo: '0300-1234567', 
      noOfSuits: 3, 
      buttonType: 'Wooden' 
    },
    { 
      id: '2', 
      name: 'Fatima Ali', 
      email: 'fatima.ali@example.com', 
      size: 'Large', 
      phoneNo: '0311-2345678', 
      noOfSuits: 2, 
      buttonType: 'Metal' 
    },
    { 
      id: '3', 
      name: 'Omar Farooq', 
      email: 'omar.farooq@example.com', 
      size: 'Small', 
      phoneNo: '0322-3456789', 
      noOfSuits: 1, 
      buttonType: 'Plastic' 
    },
    { 
      id: '4', 
      name: 'Aisha Hussain', 
      email: 'aisha.hussain@example.com', 
      size: 'Medium', 
      phoneNo: '0333-4567890', 
      noOfSuits: 4, 
      buttonType: 'Wooden' 
    },
    { 
      id: '5', 
      name: 'Jamil Qureshi', 
      email: 'jamil.qureshi@example.com', 
      size: 'Large', 
      phoneNo: '0345-5678901', 
      noOfSuits: 5, 
      buttonType: 'Metal' 
    },
    { 
      id: '6', 
      name: 'Sana Sheikh', 
      email: 'sana.sheikh@example.com', 
      size: 'Small', 
      phoneNo: '0356-6789012', 
      noOfSuits: 2, 
      buttonType: 'Plastic' 
    },
    { 
      id: '7', 
      name: 'Rehman Malik', 
      email: 'rehman.malik@example.com', 
      size: 'Medium', 
      phoneNo: '0367-7890123', 
      noOfSuits: 3, 
      buttonType: 'Wooden' 
    },
    { 
      id: '8', 
      name: 'Nadia Ahmed', 
      email: 'nadia.ahmed@example.com', 
      size: 'Large', 
      phoneNo: '0378-8901234', 
      noOfSuits: 1, 
      buttonType: 'Metal' 
    },
    { 
      id: '9', 
      name: 'Usman Tariq', 
      email: 'usman.tariq@example.com', 
      size: 'Small', 
      phoneNo: '0389-9012345', 
      noOfSuits: 2, 
      buttonType: 'Plastic' 
    },
    { 
      id: '10', 
      name: 'Khadija Bibi', 
      email: 'khadija.bibi@example.com', 
      size: 'Medium', 
      phoneNo: '0390-0123456', 
      noOfSuits: 4, 
      buttonType: 'Wooden' 
    },
    { 
      id: '11', 
      name: 'Bilal Shah', 
      email: 'bilal.shah@example.com', 
      size: 'Large', 
      phoneNo: '0312-3456789', 
      noOfSuits: 3, 
      buttonType: 'Metal' 
    },
    { 
      id: '12', 
      name: 'Hina Aslam', 
      email: 'hina.aslam@example.com', 
      size: 'Small', 
      phoneNo: '0321-4567890', 
      noOfSuits: 1, 
      buttonType: 'Plastic' 
    },
    { 
      id: '13', 
      name: 'Saeed Ahmad', 
      email: 'saeed.ahmad@example.com', 
      size: 'Medium', 
      phoneNo: '0331-5678901', 
      noOfSuits: 2, 
      buttonType: 'Wooden' 
    },
    { 
      id: '14', 
      name: 'Mariam Zafar', 
      email: 'mariam.zafar@example.com', 
      size: 'Large', 
      phoneNo: '0341-6789012', 
      noOfSuits: 5, 
      buttonType: 'Metal' 
    },
    { 
      id: '15', 
      name: 'Aftab Iqbal', 
      email: 'aftab.iqbal@example.com', 
      size: 'Small', 
      phoneNo: '0351-7890123', 
      noOfSuits: 3, 
      buttonType: 'Plastic' 
    },
  ]);
  

  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [isAddFormVisible, setAddFormVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Handle adding new customer
  const handleAddCustomer = (newCustomer) => {
    setCustomers(prevCustomers => [newCustomer, ...prevCustomers]);
  };

  // Filter customers based on search query
  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Render each item
  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => setSelectedCustomer(item)}
      className="bg-white p-4 mb-4 rounded-lg shadow-md"
    >
      <Text className="text-lg font-semibold text-green-00">{`${index + 1}. ${item.name}`}</Text>
      <Text className="text-gray-600">{item.email}</Text>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-green-100 p-4">
      {/* Search Input */}
      <TextInput
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search by name or email"
        className="border p-3 mb-4 rounded-lg bg-white"
      />
      {/* Customer List */}
      <FlatList
        data={filteredCustomers}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      {/* Customer Detail */}
      {selectedCustomer && (
        <CustomerDetail
          visible={!!selectedCustomer}
          customer={selectedCustomer}
          onClose={() => setSelectedCustomer(null)}
        />
      )}
      {/* Add Customer Form */}
      {isAddFormVisible && (
        <AddCustomerForm
          onAdd={handleAddCustomer}
          onClose={() => setAddFormVisible(false)}
        />
      )}
      {/* Add Button */}
      <TouchableOpacity
        onPress={() => setAddFormVisible(true)}
        className="bg-yellow-500 p-4 rounded-full fixed bottom-8"
      >
        <Text className="text-white text-center text-xl">+ Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomerList;
