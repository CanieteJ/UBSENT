import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Modal } from 'react-native';
import styles from './styles'; 
import Icon from 'react-native-vector-icons/MaterialIcons';


const reports = [
  { id: 1, title: 'Attendance for', date: '2024-12-01', description: 'Your son has enetered the UBBC Campus' },
  { id: 2, title: 'Attendance for', date: '2024-12-02', description: 'Your son has left the UBBC Campus' },
  { id: 3, title: 'Attendance for', date: '2024-12-03', description: 'Your son has enetered the UBBC Campus' },
  { id: 4, title: 'Attendance for', date: '2024-12-04', description: 'Your son has left the UBBC Campus' },
];


const Home = ({ navigation }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleLogout = () => {
    console.log('Logging out...');
    navigation.replace('Login'); 
  };


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/logo2.png')} style={styles.logo} />
        <View style={styles.profileContainer}>
          <Text style={styles.profileName}>Divina Casao</Text>
          <Image source={require('./assets/dp.png')} style={styles.profilep} />
          <TouchableOpacity onPress={() => setDropdownVisible(!dropdownVisible)}>
            <Icon name="keyboard-arrow-down" size={24} color="white" />
            </TouchableOpacity>
          {dropdownVisible && (
            <View style={styles.dropdown}>
              <TouchableOpacity style={styles.dropdownItem} onPress={handleLogout}>
                <Text style={styles.dropdownText}>Log Out</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>

      <View style={styles.cardsRow}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Attendance</Text>
          <TouchableOpacity
        style={styles.cardButton}
        onPress={() => navigation.navigate('Attendance')}
          >
        <Text style={styles.cardButtonText}>Check Attendance</Text>
      </TouchableOpacity>
      </View>

  <View style={styles.card}>
    <Text style={styles.cardTitle}>Write a Letter</Text>
    <TouchableOpacity
      style={styles.cardButton}
      onPress={() => navigation.navigate('SubmitLetter')}
    >
      <Text style={styles.cardButtonText}>Compose</Text>
    </TouchableOpacity>
  </View>
</View>

      <View style={styles.card1}>
        <Text style={styles.cardTitle}>Report History</Text>

        <ScrollView style={styles.scrollView}>
          {reports.map((report) => (
            <View key={report.id} style={styles.reportItem}>
              <Text style={styles.reportTitle}>{report.title}</Text>
              <Text style={styles.reportDate}>{report.date}</Text>
              <Text style={styles.reportDescription}>{report.description}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 UBian SENT || Version 1.0</Text>
          <Text style={styles.footerText}>Address: Hilltop RD, Kumintang Ibaba, Batangas City</Text>
            <Text style={styles.footerText}>Batangas 4200</Text>
          </View>
      </View>
  );
};

export default Home;
