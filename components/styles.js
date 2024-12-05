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
    alignItems: 'flex-start',
    paddingLeft: 15,
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    width: '100%',
    height: 300,
    padding: 20,
    backgroundColor: '#D3D3D3',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 10, 
    marginBottom: 30, 
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 100,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#6b1500',
    borderRadius: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    width: '100%',
    height: 100,
    backgroundColor: '#6b1500',
    justifyContent: 'center',
    alignItems: 'flex-start',
    position: 'absolute',
    bottom: 0,
    paddingLeft: 15,
    paddingBottom: 10,
  },
  footerText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'left',
    marginBottom: 5,
  },
  
});




export default styles;
