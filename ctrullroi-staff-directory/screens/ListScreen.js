import { useState, useEffect } from 'react';
import {
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import alert from '../alert';
import styles from '../Styles';

export default function ProfileList({ navigation }) {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [postcode, setPostcode] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');


  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    loadProfiles();
  }, []);

  const saveProfiles = async (newProfiles) => {
    try {
      await AsyncStorage.setItem('profiles', JSON.stringify(newProfiles));
      console.log('Profiles saved successfully');
    } catch (error) {
      console.error('Error saving Profile:', error);
    }
  };

  const loadProfiles = async () => {
    try {
      const savedProfiles = await AsyncStorage.getItem('profiles');
      if (savedProfiles !== null) {
        setProfiles(JSON.parse(savedProfiles));
      }
    } catch (error) {
      console.error('Error loading profile:', error);
    }
  };

  const handleAddProfile = () => {
    /* Validation - check if all fields are filled*/
    if (
      id.trim() !== '' &&
      name.trim() !== '' &&
      phoneNumber.trim() !== '' &&
      streetAddress.trim() !== '' &&
      city.trim() !== '' &&
      state.trim() !== '' &&
      postcode.trim() !== '' &&
      country.trim() !== ''
    ) {
      const newProfile = {
        id,
        name,
        phoneNumber,
        streetAddress,
        city,
        state,
        postcode,
        country
      };

      const newProfiles = profiles.concat(newProfile);
      setProfiles(newProfiles);
      saveProfiles(newProfiles);

      /* Reset form fields*/
      setId('');
      setName('');
      setPhoneNumber('');
      setStreetAddress('');
      setCity('');
      setState('');
      setPostcode('');
      setCountry('');

      alert('Success', 'Profile has been added successfully.');
    } else {
      return alert('Missing Fields', 'Please fill out all the fields.');
    }
  };

  const viewProfileHandler = (profile) => {
    navigation.navigate('ViewScreen', { profile });
  };

  const deleteProfile = (index) => {
    let updatedProfiles = profiles.concat();
    updatedProfiles.splice(index, 1);
    setProfiles(updatedProfiles);
    saveProfiles(updatedProfiles);
  };

  const deleteHandler = (index) => {
    return alert(
      'Delete Profile',
      'Are you sure you want to delete ' + profiles[index].name + '?',
      [
        {
          text: 'Yes',
          onPress: () => deleteProfile(index),
        },
        {
          text: 'No',
        },
      ]
    );
  };

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Add Staff Details</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter ID"
          placeholderTextColor="#D9D9D9"
          value={id}
          onChangeText={(text) => setId(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter First Name and Lastname"
          placeholderTextColor="#D9D9D9"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Phone Number"
          placeholderTextColor="#D9D9D9"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Street Address"
          placeholderTextColor="#D9D9D9"
          value={streetAddress}
          onChangeText={(text) => setStreetAddress(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter City"
          placeholderTextColor="#D9D9D9"
          value={city}
          onChangeText={(text) => setCity(text)}
        />
         <TextInput
          style={styles.input}
          placeholder="Enter State"
          placeholderTextColor="#D9D9D9"
          value={state}
          onChangeText={(text) => setState(text)}
        />
         <TextInput
          style={styles.input}
          placeholder="Enter Postcode"
          placeholderTextColor="#D9D9D9"
          value={postcode}
          onChangeText={(text) => setPostcode(text)}
        />  
          <TextInput
          style={styles.input}
          placeholder="Enter Country"
          placeholderTextColor="#D9D9D9"
          value={country}
          onChangeText={(text) => setCountry(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddProfile}>
          <Text style={styles.buttonText}>ADD STAFF DETAILS</Text>
        </TouchableOpacity>
        <FlatList
          data={profiles}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.profileItem}>
              <Text style={styles.profileField}>
                ID: <Text style={styles.profileText}>{item.id}</Text>
              </Text>
              <Text style={styles.profileField}>
                Name: <Text style={styles.profileText}>{item.name}</Text>
              </Text>
              <Text style={styles.profileField}>
                PhoneNumber: <Text style={styles.profileText}>{item.phoneNumber}</Text>
              </Text>
            
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={() => viewProfileHandler(item)}>
                  <Text style={styles.actionText}>VIEW PROFILE</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  key={index}
                  style={styles.actionButton}
                  onPress={() => deleteHandler(index)}>
                  <Text style={styles.actionText}>DELETE PROFILE</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
}
