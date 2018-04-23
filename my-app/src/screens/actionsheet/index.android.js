import React, { Component } from "react";
import {
  View,
  Dimensions,
} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Right,
  Body,
  Left,
  List,
  ListItem
} from "native-base";
import AnimatedBar from './AnimatedBar';

const window = Dimensions.get('window');
const DELAY = 100;

class NHPicker extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.generateData();
    this.interval = setInterval(() => {
      this.generateData();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  generateData = () => {
    const data = [];
    for (let i = 0; i < 2; i++) {
      data.push(Math.floor(Math.random() * window.width));
      
    }

    this.setState({
      data,
    });
  }
  render() {
    return (
      <Container style={{ backgroundColor: "#fff" }}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Financial Chart</Title>
          </Body>
          <Right />
        </Header>

        <Content>
         
        <View style={{ flex: 1, backgroundColor: '#F5FCFF', justifyContent: 'center'}}>
          <View>
            {this.state.data.map((value, index) => <AnimatedBar value={value} delay={DELAY * index} key={index} />)}
          </View>
        </View>


        </Content>
      </Container>
    );
  }
}

export default NHPicker;
