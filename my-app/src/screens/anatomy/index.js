import React, { Component } from "react";
import MapView from "react-native-maps";
// import Dimensions from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Footer,
  FooterTab,
  Left,
  Right,
  Body
} from "native-base";

import styles from "./styles";

class Anatomy extends Component {
//State of maps
  state = {
    locationSpot:{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    //Renders longitudeDelta dynamically based on device location
    longitudeDelta: 0.0421
    }
  }

  //Event handler for onPress with maps
  pickLocationHandler = event => {

  }
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
        <MapView
   initialRegion={this.state.locationSpot}
    style = {styles.maps}
    // onPress={}
  />
          {/* <Text>Content goes</Text> */}
        </Content>

        <Footer>
          <FooterTab>
            <Button active full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}


export default Anatomy;
