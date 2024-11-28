import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import styles from '../Styles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AllProfiles')}>
        <Text style={styles.buttonText}>VIEW ALL STAFF PROFILES</Text>
      </TouchableOpacity>
       <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ProfileList')}>
        <Text style={styles.buttonText}>UPDATE STAFF PROFILES</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.roundButton}
        onPress={() => navigation.navigate('Settings')}>
         <Ionicons name="settings" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
