import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Ola3 from './src/assets/login/ola_3.svg';
import Ola2 from './src/assets/login/ola_2.svg';
import Ola1 from './src/assets/login/ola_1.svg';
const App = () => {
  return (
    <View>
      <Ola3 styles={{width: 400}} />

      <Text>Hola</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
