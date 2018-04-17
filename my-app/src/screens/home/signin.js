
import React, { Component } from "react";
import { ImageBackground, View, StatusBar, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Label,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Text
} from "native-base";
import styles from "./styles";


const launchscreenBg = require("../../../assets/launchscreen-bg.png");
const launchscreenLogo = require("../../../assets/logo-kitchen-sink.png");

class Signin extends Component {

    render() {
        return (
          <Container>
          <StatusBar barStyle="light-content" />
          <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
            <View style={styles.logoContainer}>
              <ImageBackground source={launchscreenLogo} style={styles.logo} />
            </View>
            <View
              style={{
                alignItems: "center",
                marginBottom: 50,
                backgroundColor: "transparent"
              }}
            >
              
              <View style={{ marginTop: 8 }} />
              <View >
               <Content style={styles.signin}>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input secureTextEntry />
            </Item>
          </Form>
          <Button block style={{ margin: 15, marginTop: 50 }} onPress={() => this.props.navigation.navigate("Home")}>
            <Text>Sign In</Text>
          </Button>
        </Content>
               </View>
              <View />
            </View>
            <View style={{ marginBottom: 80 }}>
            
            </View>
          </ImageBackground>
        </Container>

     
        );
      }

}

export default Signin;