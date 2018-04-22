// import React, { Component } from 'react';
// import { AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert, Platform, TouchableHighlight } from 'react-native';
// import flatListData from './flatListData';
// import Anatomy from './anatomy/index';

// export default class BasicFlatList extends Component {
//   constructor(props) {
//       super(props);     
//       this.state = ({
//           deletedRowKey: null,            
//       });
//       this._onPressAdd = this._onPressAdd.bind(this);        
//   }
//   refreshFlatList = (activeKey) => {
//       this.setState((prevState) => {
//           return {
//               deletedRowKey: activeKey
//           };
//       });
//       this.refs.flatList.scrollToEnd();
//   }
//   _onPressAdd () {
//       // alert("You add Item");
//       this.refs.anatomy.showAnatomy();
//   }
//   render() {
//     return (
//       <View style={{flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0}}>
//           <View style={{
//               backgroundColor: 'tomato', 
//               flexDirection: 'row',
//               justifyContent:'flex-end',                
//               alignItems: 'center',
//               height: 64}}>
//               <TouchableHighlight 
//                   style={{marginRight: 10}}
//                   underlayColor='tomato'
//                   onPress={this._onPressAdd}
//                   >
//               <Image
//                   style={{width: 35, height: 35}}
//                   source={require('../icons/icons-add.png')}
//               />
//           </TouchableHighlight>
//           </View>
//           <FlatList 
//               ref={"flatList"}
//               data={flatListData}
//               renderItem={({item, index})=>{
//                   //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
//                   return (
//                   <NHBadge item={item} index={index} parentFlatList={this}>

//                   </NHBadge>);
//               }}
//               >

//           </FlatList>
//           <Anatomy ref={'anatomy'} parentFlatList={this} >

//           </Anatomy>
//       </View>
//     );
//   }
// }