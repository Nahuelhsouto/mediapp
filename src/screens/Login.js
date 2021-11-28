import React from 'react';
import {View, Text} from 'react-native';
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
    </View>
  );
};
