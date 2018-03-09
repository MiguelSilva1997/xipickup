import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, StyleProvider } from 'native-base';
import FooterBar from './components/FooterBar'
import HeaderBar from './components/HeaderBar'

class Welcome extends Component {
  render() {
    return (
        <Container>
          <HeaderBar />
          <Content/>

          <FooterBar />
        </Container>
    );
  }
}

export default Welcome;
