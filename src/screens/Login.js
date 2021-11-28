import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ola2 from '../assets/login/ola_2.svg';
import Ola1 from '../assets/login/ola_1.svg';
import Ola3 from '../assets/login/ola_3.svg';
import Logo from '../assets/login/Logo.svg';

export const Login = () => {
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: '#f2f2f4'}}>
      <Ola3 height={600} width={400} viewBox="80 150 700 520" />
      <View style={{position: 'absolute', opacity: 0.5}}>
        <Ola2 height={600} width={400} viewBox="80 175 700 520" />
      </View>
      <View style={{position: 'absolute', opacity: 0.5}}>
        <Ola1 height={800} width={400} viewBox="80 210 700 520" />
      </View>
      <View style={{position: 'absolute'}}>
        <Logo height={600} width={600} viewBox="20 10 700 520" />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity style={styles.buttL}>
          <Text style={{fontSize: 20, color: '#fafafa'}}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttR}>
          <Text style={{fontSize: 18, color: '#000', fontFamily: 'Poppins'}}>
            Registrarse
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{bottom: 40}}>
          <Text>Necesita ayuda?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttL: {
    width: '55%',
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
    width: '55%',
    height: 60,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAFAFA',
    bottom: 80,
    elevation: 10,
  },
});
