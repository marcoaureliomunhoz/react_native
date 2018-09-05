import React, { Component } from 'react';
import { View, Image } from 'react-native';
import imgTopo from '../../imgs/jokenpo.png';

export default class Topo extends Component {
  render() {
    return (
        <View>
            <Image source={imgTopo} />
        </View>
    );
  }
}
