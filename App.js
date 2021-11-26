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
import SVGatorComponent from './src/assets/Demo';
const App = () => {
  return (
    <View>
      <SVGatorComponent width={400} height={400} />
      <Text>Hola</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
