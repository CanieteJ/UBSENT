import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Homescreen'; 
import styles from './components/styles';
import Attendance from './attendance';
import SubmitLetter from './SubmitLetter';

const Stack = createStackNavigator();



export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (navigation) => {
    const hardcodedUsername = 'testuser';
    const hardcodedPassword = 'password123';

    if (!username || !password) {
      Alert.alert('Error', 'Please fill in all fields!');
      return;
    }

    if (username === hardcodedUsername && password === hardcodedPassword) {
      navigation.replace('Home');
    } else {
      Alert.alert('Error', 'Invalid username or password');
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Attendance" component={Attendance} options={{ headerShown: false }}/>
      <Stack.Screen name="SubmitLetter" component={SubmitLetter} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" options={{ headerShown: false }}>
          {(props) => (
            <View style={styles.container}>
              
              <View style={styles.header}>
                <Image source={require('./assets/logo2.png')} style={styles.logo} />
              </View>

              <View style={styles.formContainer}>
                <View style={styles.card}>
                  <Text style={styles.title}>UBIAN S.E.N.T</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                  />
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleLogin(props.navigation)}  
                  >
                    <Text style={styles.buttonText}>Login</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.footer}>
                <Text style={styles.footerText}>© 2024 University of Batangas</Text>
                <Text style={styles.footerText}>Address: Hilltop RD, Kumintang Ibaba, Batangas City</Text>
                <Text style={styles.footerText}>Batangas 4200</Text>
              </View>
            </View>
          )}
        </Stack.Screen>

        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}