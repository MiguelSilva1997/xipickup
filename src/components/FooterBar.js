import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { StyleSheet } from 'react-native';

class FooterBar extends Component {
  render() {
    return (
        <Footer style={styles.container}>
          <FooterTab>
            <Button vertical>
              <Icon style={{color: '#fff'}} active name="home" />
              <Text style={{color: '#fff'}} >Home</Text>
            </Button>
            <Button vertical>
              <Icon style={{color: '#fff'}} active name="search" />
              <Text style={{color: '#fff'}} >Search</Text>
            </Button>
            <Button vertical>
              <Icon style={{color: '#fff'}} active name="football" />
              <Text style={{color: '#fff'}} >Games</Text>
            </Button>
            <Button vertical>
              <Icon style={{color: '#fff'}} active name="person" />
              <Text style={{color: '#fff'}} >Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0d9910'
  },
});

export default FooterBar;
