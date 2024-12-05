import React, { useState } from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { Calendar } from 'react-native-calendars';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const attendanceData = {
  '2024-12-01': { marked: true, dotColor: 'green', description: 'Entered the Campus' },
  '2024-12-02': { marked: true, dotColor: 'red', description: 'Did not enter the Campus' },
  '2024-12-03': { marked: true, dotColor: 'green', description: 'Entered the Campus' },
  '2024-12-04': { marked: true, dotColor: 'red', description: 'Did not enter the Campus' },
};

const Attendance = () => {
  const navigation = useNavigation(); 
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  return (
    <View style={styles.containerA}>

      <View style={styles.headerF}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButtonC}>
          <Icon name="arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.titleC}>Attendance</Text>
      </View>

      <Calendar style={styles.Cal}
        onDayPress={handleDayPress}
        markedDates={{
          ...attendanceData,
          [selectedDate]: {
            selected: true,
            marked: attendanceData[selectedDate]?.marked,
            selectedColor: '#6b1500',
            arrowColor: '#6b1500',
            selectedDayBackgroundColor: '#6b1500',
            todayTextColor: '#ffcc00',
            dotColor: '#ffcc00',
            selectedDotColor: '#ffffff',
          },
        }}
      
      />
      {selectedDate && attendanceData[selectedDate] && (
        <View style={styles.attendanceInfoBoxA}>
          <Text style={styles.attendanceInfoTextA}>
            {selectedDate}: {attendanceData[selectedDate].description}
          </Text>
        </View>
      )}
      </View>
    
  );
};

export default Attendance;



