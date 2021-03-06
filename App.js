import React, {useRef} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Animated} from 'react-native';
import Ola1 from './src/assets/login/ola_1.svg';
import Ola3 from './src/assets/login/ola_3.svg';
import Ola2 from './src/assets/login/ola_2.svg';
import Logo from './src/assets/login/Logo.svg';

const App = () => {
  const Ola = useRef(new Animated.Value(20)).current;
  const Olas = useRef(new Animated.Value(-20)).current;
  const Olis = useRef(new Animated.Value(-50)).current;

  const subenOlas = () => {
    Animated.timing(Ola, {
      toValue: 20,
      duration: 1000,
      useNativeDriver: false,
    }).start(),
      Animated.timing(Olas, {
        toValue: -20,
        duration: 1400,
        useNativeDriver: false,
      }).start(),
      Animated.timing(Olis, {
        toValue: -50,
        duration: 1300,
        useNativeDriver: false,
      }).start();
  };

  const bajanOlas = () => {
    Animated.timing(Ola, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: false,
    }).start(),
      Animated.timing(Olas, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }).start(),
      Animated.timing(Olis, {
        toValue: -80,
        duration: 1500,
        useNativeDriver: false,
      }).start();
  };

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#f2f2f4',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <Animated.View style={{opacity: 1, bottom: Ola, left: -5}}>
        <Ola3 height={600} width={400} viewBox="80 150 700 520" />
      </Animated.View>
      <Animated.View style={{position: 'absolute', top: Olas}}>
        <Ola2 height={600} width={400} viewBox="80 175 700 520" />
      </Animated.View>
      <Animated.View style={{position: 'absolute', bottom: Olis}}>
        <Ola1 height={800} width={400} viewBox="80 210 700 520" />
      </Animated.View>
      <Animated.View
        style={{
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: Olas,
        }}>
        <Logo height={500} width={550} viewBox="-120 60 750 520" />
      </Animated.View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity style={styles.buttL} onPress={bajanOlas}>
          <Text style={{fontSize: 20, color: '#fafafa'}}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttR} onPress={subenOlas}>
          <Text style={{fontSize: 18, color: '#000', fontFamily: 'Poppins'}}>
            Registrarse
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{bottom: 40}}>
          <Text>??Necesita ayuda?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttL: {
    width: 200,
    height: 60,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundGradient: 'horizontal',
    backgroundGradientLeft: '#90caf9',
    backgroundGradientRight: '#448aff',
    backgroundColor: 'skyblue',
    bottom: 120,
    elevation: 10,
    shadowColor: 'black',
  },
  buttR: {
    width: 200,
    height: 60,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAFAFA',
    bottom: 80,
    elevation: 10,
  },
});

export default App;
