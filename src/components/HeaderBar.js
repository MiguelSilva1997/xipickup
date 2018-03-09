import React, { Component } from 'react';
import { Header, Left, Body, Right, Button, Icon, Title, Subtitle } from 'native-base';
import { StyleSheet } from 'react-native';

class HeaderBar extends Component {
  render() {
    return (
      <Header style={styles.container}>
        <Left>
          <Button transparent>
            <Icon style={{color: '#fff'}} active name='arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title style={{color: '#fff'}} >XI Pick-Up</Title>
          <Subtitle style={{color: '#fff'}} >Subtitle</Subtitle>
        </Body>
        <Right>
          <Button transparent>
            <Icon style={{color: '#fff'}} active name='navigate' />
          </Button>
        </Right>
      </Header>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0d9910'
  },
});

export default HeaderBar;
