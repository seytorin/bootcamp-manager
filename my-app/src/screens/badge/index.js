import React, { Component } from "react";
import {Platform, TouchableHighlight, Alert, Image, FlatList, StyleSheet, Dimensions, TextInput } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Badge,
  Text,
  Left,
  Right,
  Body,
  View
} from "native-base";
import Swipeout from 'react-native-swipeout';
import flatListData from './flatListData';
// import Anatomy from '../anatomy/index';
import AddModal from './AddModal';
import styles from "./styles";

var screen = Dimensions.get('window');

class FlatListItem extends Component {
        constructor(props) {
            super(props);   
            this.state = {
                activeRowKey: null
            };          
        }
        render() {   
            const swipeSettings = {
                autoClose: true,
                onClose: (secId, rowId, direction) => {
                    if(this.state.activeRowKey != null) {
                        this.setState({ activeRowKey: null });
                    }              
                },          
                onOpen: (secId, rowId, direction) => {
                    this.setState({ activeRowKey: this.props.item.key });
                },      
                right: [
                    { 
                        onPress: () => {    
                            const deletingRow = this.state.activeRowKey;          
                            Alert.alert(
                                'Alert',
                                'Are you sure you want to delete ?',
                                [                              
                                  {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                  {text: 'Yes', onPress: () => {        
                                    flatListData.splice(this.props.index, 1); 
                                    //Refresh FlatList ! 
                                    this.props.parentFlatList.refreshFlatList(deletingRow);
                                  }},
                                ],
                                { cancelable: true }
                              ); 
                        }, 
                        text: 'Delete', type: 'delete' 
                    }
                ],  
                rowId: this.props.index, 
                sectionId: 1    
            };               
            return (  
                <Swipeout {...swipeSettings}>
                    <View style={{
                    flex: 1,
                    flexDirection:'column',                                
                    }}>            
                        <View style={{
                                flex: 1,
                                flexDirection:'row',
                                // backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen': 'tomato'                
                                backgroundColor: '#4ABDAC'
                        }}>            
                            <Image 
                                source={{uri: this.props.item.imageUrl}}
                                style={{width: 100, height: 100, margin: 5}}
                            >
    
                            </Image>
                            <View style={{
                                    flex: 1,
                                    flexDirection:'column',   
                                    height: 100                 
                                }}>            
                                    <Text style={styles.flatListItem}>{this.props.item.name}</Text>
                                    <Text style={styles.flatListItem}>{this.props.item.foodDescription}</Text>
                            </View>              
                        </View>
                        <View style={{
                            height: 1,
                            backgroundColor:'#F5FCFF'                            
                        }}>
                    
                        </View>
                    </View>   
                </Swipeout>      
                
            );
        }
    }
  
    
    export default class NHBadge extends Component {
        constructor(props) {
            super(props);     
            this.state = ({
                deletedRowKey: null,            
            });
            this._onPressAdd = this._onPressAdd.bind(this);        
        }
        refreshFlatList = (activeKey) => {
            this.setState((prevState) => {
                return {
                    deletedRowKey: activeKey
                };
            });
            this.refs.flatList.scrollToEnd();
        }
        _onPressAdd () {
            // alert("You add Item");
            this.refs.addModal.showAddModal();
        }
        render() {
          return (
            <View style={{flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0}}>
                <View style={{
                    backgroundColor: '#3551B5', 
                    flexDirection: 'row',
                    justifyContent:'flex-end',                
                    alignItems: 'center',
                    height: 64}}>

                     
          <Left>
            <Button
            transparent
            onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon style={{
                  color:'white'
              }} name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        
                    <TouchableHighlight 
                        style={{marginRight: 10}}
                        underlayColor='tomato'
                        onPress={this._onPressAdd}
                        >
                    <Image
                        style={{width: 35, height: 35}}
                        source={require('./icons-add.png')}
                    />
                </TouchableHighlight>
                </View>
                <FlatList 
                    ref={"flatList"}
                    data={flatListData}
                    renderItem={({item, index})=>{
                        //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                        return (
                        <FlatListItem item={item} index={index} parentFlatList={this}>
    
                        </FlatListItem>);
                    }}
                    >
    
                </FlatList>
                <AddModal ref={'addModal'} parentFlatList={this} >
    
                </AddModal>
            </View>
          );
        }
    }




