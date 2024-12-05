import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
 
  header: {
    width: '100%',
    height: 100,
    backgroundColor: '#6b1500',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    flexDirection: 'row',
    position: 'relative',
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    position: 'absolute',
    left: '15%', 
    transform: [{ translateX: -30 }], 
  },


  profilep: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    position: 'relative',
    left: '20%', 
    transform: [{ translateX: -30 }], 
    zIndex: 1,
  },

  profile: {
    color: 'white',
    fontSize: 15,
    position: 'absolute',
    right: 80, 
    top: '55%', 
    transform: [{ translateY: -12 }], 
  },
  cardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 15,
  },
  card: {
    width: '48%',  
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardButton: {
    padding: 10,
    backgroundColor: '#6b1500',
    borderRadius: 5,
    alignItems: 'center',
  },
  cardButtonText: {
    color: '#fff',
    fontSize: 14,
  },

  card1: {
    width: '80%',  
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 10,
    left: '10%',
    top: 30,
  },
  scrollView: {
    width: '100%', 
    maxHeight: 250, 
    marginTop: 10, 
    position: 'relative',
  },
  reportItem: {
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  reportTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  reportDate: {
    fontSize: 14,
    color: '#555',
  },
  reportDescription: {
    fontSize: 14,
    color: '#777',
  },
  footer: {
    width: '100%',
    minHeight: 120,
    backgroundColor: '#6b1500',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#4e0f00',
  },
  footerText: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    marginVertical: 3,
  },
  
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: 20,
    left: 110,
  },
  
  profileName: {
    fontSize: 16,
    marginRight: 10,
    color: '#fff',
    fontWeight: 'bold',
    zIndex: 2,
    left: 18,
  },
  
  dropdownArrow: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 5,
  },
  
  dropdown: {
    position: 'absolute',
    top: 60, 
    right: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 3,
  },
  
  dropdownItem: {
    paddingVertical: 10,
  },
  
  dropdownText: {
    fontSize: 16,
    color: '#333',
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  
  formContainer: {
    flex: 1,
    padding: 20,
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  
  formContainer: {
    flex: 1,
    padding: 20,
  },
  
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    height: 120,
    textAlignVertical: 'top',
    marginBottom: 20,
    fontSize: 16,
  },
  
  submitButton: {
    backgroundColor: '#6b1500',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '50%',
    left: 100,
    bottom: -100,
  },
  
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
 
//=======================
containerF: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20,
},
titleF: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 20,
},
cardF: {
  width: '100%',
  padding: 20,
  borderRadius: 10,
  backgroundColor: '#fff',
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowRadius: 10,
  shadowOffset: { width: 0, height: 5 },
  elevation: 5, // For Android shadow effect
},
textInputF: {
  width: '100%',
  height: 50,
  borderColor: '#ccc',
  borderWidth: 1,
  borderRadius: 8,
  padding: 10,
  fontSize: 16,
  marginBottom: 20,
},
letterInputF: {
  height: 200, // For the letter text area
  textAlignVertical: 'top',  // Align text to the top for multiline
},
submitButtonF: {
  marginTop: 20,
  paddingVertical: 10,
  paddingHorizontal: 20,
  backgroundColor: '#6b1500',
  borderRadius: 100,
},
buttonTextF: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
},

headerF: {
  width: '150%',
  height: 80,
  backgroundColor: '#6b1500',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  position: 'absolute',
  paddingHorizontal: 15,
  top: 0,
},
backButton: {
  position: 'absolute',
  left: 90,
  top: 25,
  zIndex: 1, // Ensures the back button is above other elements
},
titleF: {
  fontSize: 20,
  color: 'white',
  fontWeight: 'bold',
},

//=====================
containerA: {
  flex: 1,
  padding: 20,
  backgroundColor: '#f8f9fa',
},
attendanceTitleA: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 20,
  textAlign: 'center',
},
attendanceInfoBoxA: {
  marginTop: 20,
  padding: 15,
  backgroundColor: '#e6e6e6',
  borderRadius: 10,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 5,
  bottom: -200,
},
attendanceInfoTextA: {
  fontSize: 16,
  color: '#333',
},

Cal: {
  position: 'relative',
  top: 180,
},

titleC: {
  fontSize: 20,
  color: 'white',
  fontWeight: 'bold',
  right: 85,
},

backButtonC: {
  right: 185,
}

});

export default styles;
