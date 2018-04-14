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
    },
    //This is for the placing a marker
    locationChosen: false
  }

  //Event handler for onPress with maps
  pickLocationHandler = event => {
    const coords = event.nativeEvent.coordinate;
    //Javascript object for map animate
    this.map.animateToRegion({
      ...this.state.locationSpot,
      latitude: coords.latitude,
      longitude: coords.longitude
    });
    this.setState(prevState => {
      return{
        locationSpot: {
        //Copies previous state
          ...prevState.locationSpot,
          latitude: coords.latitude,
          longitude: coords.longitude
        },
        //Changes state of marker placement chosen to true
        locationChosen: true
      };
    });
  }

  render() {
    let marker = null;
    //if locationChosen is true
    if (this.state.locationChosen){
      marker = <MapView.Marker coordinate={this.state.locationSpot}/>;
    }
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
    onPress={this.pickLocationHandler}
    //ref creates a reference to the mapview opject
    ref={ref => this.map = ref}
  >
    {marker}
  </MapView>
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
