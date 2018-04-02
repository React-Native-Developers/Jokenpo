import React, { Component } from 'react';
import {
  View,
  Image
} from 'react-native';

const imgTopo = require('../../imgs/jokenpo.png');

class Topo extends Component {
  render() {
    return (
      <View>
        <Image style={{ width: 420 }} source={imgTopo} />
      </View>
    );
  }
}

export default Topo;
