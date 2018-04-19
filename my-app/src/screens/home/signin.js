
import React, { Component } from "react";
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
          <Container style={styles.container}>
            <Header>
              <Left>
               
              </Left>
              <Body>
                <Title>Sign in</Title>
              </Body>
              <Right />
            </Header>
    
            <Content>
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
      </Container>
        );
      }

}

export default Signin;