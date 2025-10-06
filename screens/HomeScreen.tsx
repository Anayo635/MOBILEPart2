import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Christoffel's Kitchen</Text>
      <Text style={styles.subtitle}>Private Chef Services</Text>
      
      <Image 
        source={{uri: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836'}}
        style={styles.image}
      />
      
      <Button 
        title="View Menu"
        onPress={() => navigation.navigate('Menu')}
        color="#e35a51"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
    color: 'gray'
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 40,
    borderRadius: 10
  }
});










/*
import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Christoffel's Kitchen</Text>
      <Text style={styles.subtitle}>Private Chef Services</Text>
      
      <Image 
        source={{uri: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836'}}
        style={styles.image}
      />
      
      <Button 
        title="View Menu"
        onPress={() => navigation.navigate('Menu')}
        color="#e35a51"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
    color: 'gray'
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 40,
    borderRadius: 10
  }
});
*/