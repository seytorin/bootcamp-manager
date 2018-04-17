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
  Body,
  View,
  IconNB,
  Textarea,
  ActionSheet,
} from "native-base";

import styles from "./styles";
var BUTTONS = ["Jazmin Garcia", "Tim Robbins", "Kim Dennings", "Kat Richards"];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

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
    location: {
      value: null,
      valid: false
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

  sendLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(pos => {
      //Reuse pickLocationHandler
      const coordsEvent = {
        nativeEvent: {
          coordinate:{
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude
          }
        }
      };
      this.pickLocationHandler(coordsEvent);
    },
    err => {
      console.log(err);
      alert("Position locator failed. Please restart application");
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
  <Header>
    <Left>
      {/* <Button>
          <IconNB />
      </Button> */}
    </Left>
    <Body>
      <Title>TextArea</Title>
    </Body>
    <Right />
  </Header>

        <Content padder>
          <Textarea rowSpan={5} bordered placeholder="Textarea" />
        </Content>
          {/* <Text>Content goes</Text> */}
        </Content>

        <Footer>
          <FooterTab>
            <Button active full onPress={this.sendLocationHandler} onPress={() =>
              ActionSheet.show(
                {
                  options: BUTTONS,
                  cancelButtonIndex: CANCEL_INDEX,
                  destructiveButtonIndex: DESTRUCTIVE_INDEX,
                  title: "Select an option"
                },
                buttonIndex => {
                  this.setState({ clicked: BUTTONS[buttonIndex] });
                }
              )}>
              <Text> Send Workout Location</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}


export default Anatomy;
