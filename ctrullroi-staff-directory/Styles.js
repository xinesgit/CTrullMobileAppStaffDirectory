import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    backgroundColor: '#E9CDCE',
    paddingTop: 20,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 50,
    margin: 20,
  },
  mainContainer: {
    backgroundColor: '#E9CDCE',
    fontFamily: 'Trebuchet',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  container: {
    backgroundColor: '#E9CDCE',
    fontFamily: 'Trebuchet',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 5,
    marginHorizontal: 5,
    textAlign: 'center',
    fontFamily: 'Trebuchet',
    fontWeight: 'bold',
  },
  profileItem: {
    flex: 1,
    alignItems: 'flex-start',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
  },
  profileField: {
    fontFamily: 'Trebuchet',
    fontSize: 16,
    color: '#000000',
    marginBottom: 10,
  },
  profileText: {
    fontSize: 16,
    fontFamily: 'Trebuchet',
    color: '#000000',
    textAlign: 'left',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    margin: 14,
    width: 250,
    height: 50,
    backgroundColor: '#941A1D',
    padding: 15,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontFamily: 'Trebuchet',
    fontSize: 18,
    textAlign: 'center',
  },
  actionButton: {
    margin: 7,
    width: '45%',
    height: 40,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#8AC6D0',
  },
  actionText: {
    color: '#ffffff',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Trebuchet',
  },
  input: {
    height: 30,
    width: '90%',
    borderColor: '#595959',
    color: '#F5F5F5',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontFamily: 'Trebuchet',
    backgroundColor: "#FFFFFF",
  },
  settingItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
  },
  settingText: {
    fontSize: 16,
    fontFamily: 'Trebuchet',
    color: '#8AC6D0',
    textAlign: 'left',
  },
  icon: {
    width: 200,
    height: 50,
    resizeMode: 'contain',
    marginRight: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    margin: 5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40, // Circle avatar
    marginBottom: 10,
  },
  roundButton: {
    position: 'absolute',      // Position it at the bottom center
    bottom: 30,                // 30px from the bottom of the screen
    left: '50%',               // Horizontal center of the screen
    transform: [{ translateX: -35 }], // Adjust for centering by shifting it back
    width: 70,                 // Width of the button
    height: 70,                // Height of the button (same as width)
    borderRadius: 35,          // Round the button
    backgroundColor: '#941A1D', // Background color of the button
    justifyContent: 'center',  // Center the icon horizontally
    alignItems: 'center',      // Center the icon vertically
    shadowColor: '#000',       // Optional shadow for the button
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,           
  },
   profileBox: {
    width: '95%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginTop: 20, // Adds space from the top of the screen
    alignItems: 'center', // Center contents horizontally
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40, // Circle avatar
    marginBottom: 10, // Space between avatar and text
  },
  text: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center', // Center the text inside the box
  },
   addressContainer: {
    marginTop: 20, // Add space between the profile box and description
    padding: 20,
    alignItems: 'center', // Center horizontally
  },
});