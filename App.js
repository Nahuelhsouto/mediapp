import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {Login} from './src/screens/Login';
const App = () => {
  return (
    <View>
      <Login />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
