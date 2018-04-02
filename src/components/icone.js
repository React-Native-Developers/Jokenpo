import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const imgPedra = require('../../imgs/pedra.png');
const imgPapel = require('../../imgs/papel.png');
const imgTesoura = require('../../imgs/tesoura.png');

const styles = StyleSheet.create({
  icone: {
    alignItems: 'center',
    marginBottom: 20,
  },
  textoJogador: {
    fontSize: 18
  }
});

class Icone extends Component {
  render() {
    if (this.props.escolha === 'Pedra') {
      return (
        <View style={styles.icone}>
          <Text style={styles.textoJogador}>{this.props.jogador}</Text>
          <Image source={imgPedra} />
        </View>
      );      
    } else if (this.props.escolha === 'Papel') {
      return (
        <View style={styles.icone}>
          <Text style={styles.textoJogador}>{this.props.jogador}</Text>
          <Image source={imgPapel} />
        </View>
      ); 
    } else if (this.props.escolha === 'Tesoura') {
      return (
        <View style={styles.icone}>
          <Text style={styles.textoJogador}>{this.props.jogador}</Text>
          <Image source={imgTesoura} />
        </View>
      ); 
    } 
    return false;
  }
}

export default Icone;
