import React,{ Component } from 'react';
import {
  AppRegistry,
  View,
} from 'react-vr';
// 引入Canvas
import Canvas from './components/Canvas'

export default class react_360 extends Component {
  
  constructor(){
    super()
    this.state = {
      src: "reactconf_00.jpg"
    }
  }
  
  render() {
    return (
      <View>
        <Canvas src={this.state.src} />
      </View>
    );
  }
};

AppRegistry.registerComponent('react_360', () => react_360);
