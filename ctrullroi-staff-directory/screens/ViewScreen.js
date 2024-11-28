import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import {useRoute} from '@react-navigation/native';
import styles from '../Styles';

export default function ViewProfile({route, navigation})
{
  const profile = route.params.profile;

  return(
    <View style={styles.container}>
    <View style={styles.profileBox}>
      <Image
          source = {require('../assets/avatarimage.png')}
          style = {styles.image}
           />
         <Text style = {styles.title}> Staff Member Details</Text>
         <Text style= {styles.profileField}>
       Staff ID: <Text style={styles.profileText}>{profile.id}</Text>
    </Text>
    <Text style= {styles.profileField}>
    <Text style={styles.profileText}>{profile.name}</Text>
    </Text>
     </View>
 <View style={styles.addressContainer}>
        <Text style={styles.profileField}>
          Phone Number: <Text style={styles.profileText}>{profile.phoneNumber}</Text>
        </Text>
        <Text style={styles.profileField}>
          Street Address: <Text style={styles.profileText}>{profile.streetAddress}</Text>
        </Text>
        <Text style={styles.profileField}>
          City: <Text style={styles.profileText}>{profile.city}</Text>
        </Text>
        <Text style={styles.profileField}>
          State: <Text style={styles.profileText}>{profile.state}</Text>
        </Text>
        <Text style={styles.profileField}>
          Postcode: <Text style={styles.profileText}>{profile.postcode}</Text>
        </Text>
        <Text style={styles.profileField}>
          Country: <Text style={styles.profileText}>{profile.country}</Text>
        </Text>
      </View>
    </View>
  );

}
