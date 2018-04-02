import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
  
import Topo from './src/components/topo';
import Icone from './src/components/icone';

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },
  painelAcoes: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  palco: {
    alignItems: 'center',
    margin: 10
  },
  textoResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'blue',
    height: 60
  }
});

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { escolhaUsuario: ' ', escolhaComputador: ' ', resultado: ' ' };
  }

  jokenpo(escolhaU) {
    //gera numero aleatorio (0, 1, 2)
    const numeroAleatorio = Math.floor(Math.random() * 3);
    let escolhaC;

    switch (numeroAleatorio) {
      case 0: escolhaC = 'Pedra'; break;
      case 1: escolhaC = 'Papel'; break;
      case 2: escolhaC = 'Tesoura'; break;
      default: escolhaC = ' ';
    }

    let resultadoF = ' ';

    if (escolhaC === escolhaU) {
      resultadoF = 'Empate';
    } else {      
      if (escolhaC === 'Pedra') {
        if (escolhaU === 'Papel') {
          resultadoF = 'Você Ganhou';
        } else {
          resultadoF = 'Você Perdeu';
        }
      } else if (escolhaC === 'Papel') {
        if (escolhaU === 'Tesoura') {
          resultadoF = 'Você Ganhou';
        } else {
          resultadoF = 'Você Perdeu';
        }
      } else {
        if (escolhaU === 'Pedra') {
          resultadoF = 'Você Ganhou';
        } else {
          resultadoF = 'Você Perdeu';
        }
      }
    }

    this.setState({ escolhaUsuario: escolhaU, escolhaComputador: escolhaC, resultado: resultadoF });
  }

  render() {
    return (
      <View>
        <Topo />

        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}>
            <Button title="pedra" onPress={() => { this.jokenpo('Pedra'); }} />
          </View>

          <View style={styles.btnEscolha}>
            <Button title="papel" onPress={() => { this.jokenpo('Papel'); }} />
          </View>

          <View style={styles.btnEscolha}>
            <Button title="tesoura" onPress={() => { this.jokenpo('Tesoura'); }} />
          </View>
        </View>

        <View style={styles.palco}>
          <Text style={styles.textoResultado}> {this.state.resultado} </Text>

          <Icone escolha={this.state.escolhaComputador} jogador="Computador" />
          <Icone escolha={this.state.escolhaUsuario} jogador="Você" />
        </View>
      </View>
    );
  }
}
