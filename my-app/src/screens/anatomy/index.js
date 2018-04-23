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
  Textarea
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
    //Constructor for Modal
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //         newFoodName: '',
  //         newFoodDescription: ''
  //     };
  // }
  // showAddModal = () => {
  //     this.refs.myModal.open();
  // }
  // generateKey = (numberOfCharacters) => {
  //     return require('random-string')({length: numberOfCharacters});        
  // }


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
          




    
        
            {/* <Modal
                ref={"myModal"}
                style={{
                    justifyContent: 'center',
                    borderRadius: Platform.OS === 'ios' ? 30 : 0,
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height: 280
                }}
                position='center'
                backdrop={true}
                onClosed={() => {
                    // alert("Modal closed");
                }}
            >
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 40
                }}>New food's information</Text>
                <TextInput
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        marginBottom: 10,
                        borderBottomWidth: 1
                    }}           
                    onChangeText={(text) => this.setState({ newFoodName: text })}
                    placeholder="Enter new food's name"
                    value={this.state.newFoodName}                 
                />
                <TextInput
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 10,
                        marginBottom: 20,
                        borderBottomWidth: 1
                    }}
                    
                    onChangeText={(text) => this.setState({ newFoodDescription: text })}
                    placeholder="Enter new food's description"
                    value={this.state.newFoodDescription}
                />
                <Button
                    style={{ fontSize: 18, color: 'white' }}
                    containerStyle={{
                        padding: 8,
                        marginLeft: 70,
                        marginRight: 70,
                        height: 40,
                        borderRadius: 6,
                        backgroundColor: 'mediumseagreen'
                    }}
                    onPress={() => {
                         if (this.state.newFoodName.length == 0 || this.state.newFoodDescription.length == 0) {
                            alert("You must enter food's name and description");
                            return;
                        }       
                        const newKey = this.generateKey(24);
                        const newFood = {
                            key: newKey,
                            name: this.state.newFoodName,
                            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/64/Foods_%28cropped%29.jpg",
                            foodDescription: this.state.newFoodDescription
                        };    
                        flatListData.push(newFood);    
                        this.props.parentFlatList.refreshFlatList(newKey);                                
                        this.refs.myModal.close();                                                                       
                    }}>
                    Save
                </Button>
            </Modal> */}







        </Content>

        <Footer>
          <FooterTab>
            <Button active full onPress={this.sendLocationHandler}>
              <Text> Send Workout Location</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}


export default Anatomy;
