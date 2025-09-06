import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width:'100%',
    flexGrow: 1,
    flexDirection: 'column',
    padding: 20,
    backgroundColor: '#f2f2f2'
  },
  logoContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
 
  },
 
  
  label: {
    marginTop: 15,
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold'
  },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 6,
    padding: 10
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  gpsButton: {
    marginLeft: 8,
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 6
  },
  gpsText: {
    fontSize: 18
  },
  button: {
    marginTop: 30,
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 6,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18
  }
  

});