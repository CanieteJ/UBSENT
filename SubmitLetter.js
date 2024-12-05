import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import styles from './styles'; 
import Icon from 'react-native-vector-icons/MaterialIcons';

const SubmitLetter = () => {
  const navigation = useNavigation(); 
  const [letter, setLetter] = useState(''); 
  const [date, setDate] = useState(''); 
  const [recipient, setRecipient] = useState(''); 

  const handleSubmit = () => {
    if (!letter.trim() || !date.trim() || !recipient.trim()) {
      Alert.alert('Error', 'Please fill in all fields!');
      return;
    }

    
    Alert.alert('Success', 'Letter submitted!');
    setLetter(''); 
    setDate(''); 
    setRecipient(''); 
  };

  return (
    <View style={styles.containerF}>
      {/* Header Section */}
      <View style={styles.headerF}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.titleF}>Compose Letter</Text>
      </View>

      {/* Form Section */}
      <View style={styles.cardF}>
        <TextInput
          style={styles.textInputF}
          placeholder="Recipient"
          value={recipient}
          onChangeText={setRecipient} 
        />

        <TextInput
          style={styles.textInputF}
          placeholder="Enter the date (YYYY-MM-DD)"
          value={date}
          onChangeText={setDate} 
        />

        <TextInput
          style={[styles.textInputF, styles.letterInputF]}
          multiline
          numberOfLines={10}
          placeholder="Write your letter here..."
          value={letter}
          onChangeText={setLetter}
        />

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButtonF} onPress={handleSubmit}>
          <Text style={styles.buttonTextF}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SubmitLetter;
