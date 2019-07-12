import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Simples from './src/componentes/Simples';
import ParImpar from './src/componentes/ParImpar';
import { Inverter, Megasena } from './src/componentes/Multi';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Simples texto='Flexível!!!' />
        <ParImpar numero={20} />
        <Inverter texto='React Nativo' />
        <Megasena numeros={8} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
