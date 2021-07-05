/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import type {Node} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  Button,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

class Idol extends Component {
  render() {
    let idolImg = '';
    if (this.props.type == 'firstImage') {
      idolImg = require('./assets/jaehyun.jpg');
    } else if (this.props.type == 'secondImage') {
      idolImg = require('./assets/jaehyun2.jpg');
    }

    return (
      <View>
        <Image source={idolImg} style={{width: 100, height: 100}}></Image>
      </View>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: '',
    };
  }

  writeAddress = () => {
    this.setState({
      address: '서초구 양재동',
    });
  };

  resetAddress = () => {
    this.setState({
      address: '',
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>Hello World!!</Text>
        <Idol type={'firstImage'}></Idol>
        <Idol type={'secondImage'}></Idol>

        <Text>{this.state.address}</Text>
        <Button title={'My address'} onPress={this.writeAddress}></Button>
        <Button title={'Reset'} onPress={this.resetAddress}></Button>
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
  hello: {
    color: 'white',
  },
});

export default App;
