'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TextInput,
  Item,
  Picker,
} from 'react-native';

import { Select, Option } from 'react-native-select-list';
import Icon from 'react-native-vector-icons/FontAwesome';

class Registro extends Component {

    render() {
      return (
        <View style={styles.container}>
  <Image source={require('./Images/logo.jpg')} style={styles.Image}/>




    <View style={styles.items2}>
    <View style={styles.items3}>
    <View style={styles.VistaIcon}>
    <Icon style={styles.icon1}
     name="user-o"
     pull="center"
     size={20}
     />
    </View>
  <TextInput style={styles.button}placeholder='Nombre'/>
  </View>
  <View style={styles.items3}>
  <View style={styles.VistaIcon}>
  <Icon style={styles.icon1}
   name="university"
   pull="center"
   size={20}
   />
  </View >
  <TextInput style={styles.button}placeholder='Universidad'/>
  </View>


  <View style={styles.items3}>
  <View style={styles.VistaIcon}>
  <Icon style={styles.icon1}
   name="venus-double"
   pull="center"
   size={20}
   />
  </View>
  <View style={styles.items5}>
  <View style={styles.items4}>
  <TouchableHighlight style={styles.WButton}>
  <Text style={styles.TextItems5}> Mujer</Text>
  </TouchableHighlight>
  <TouchableHighlight style={styles.MButton}>
  <Text style={styles.TextItems5}> Hombre</Text>
  </TouchableHighlight>
  </View>
  </View>
  </View>
  <View style={styles.items3}>
  <View style={styles.VistaIcon}>
  <Icon style={styles.icon1}
  name="graduation-cap"
  pull="center"
  size={20}
  />
  </View >
  <View style={styles.VistaLista}>
  <Select>
    <Option  value={1}>Medicina</Option>
    <Option value={2}>Contabilidad</Option>
    <Option value={3}>Negocios</Option>
  </Select>
  </View>
           </View>



  <View style={styles.items3}>
  <View style={styles.VistaRaya}>
  </View>
  </View>


    </View>
    <View style={styles.items4}>
    <TouchableHighlight style={styles.button2}>
    <Text style={styles.Text3}>ENTRAR</Text>
    </TouchableHighlight>
    <View style={styles.VistaIcon2}>
    <Icon style={styles.icon2}
     name="arrow-circle-o-down"
     pull="center"
     size={20}
     />
    </View>

    </View>

        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'rgb(75,85,115)',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: 'absolute',
    },

    Image:{
      width:50,
      height:50,
      marginTop:30
    },
    buttons: {
    flex: 3,
    paddingLeft: 10,
    paddingRight: 10,
    width: 300,
    alignItems: 'center',
      },
    btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
      },
      items1:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'rgb(153,165,191)',
        width:350,
        height:60,
        marginTop:6,
        borderTopLeftRadius:3,
        borderTopRightRadius:3,
      },
      vista1: {
        borderWidth: 2,
        backgroundColor: 'rgb(75, 85, 115)',
        borderColor: 'rgb(75, 85, 115)',
        borderRightWidth:0,
        borderTopLeftRadius:3,
        borderBottomLeftRadius:3,
        width:160,
        height:40
      },
      vista2: {
        borderWidth: 2,
        borderColor: 'rgb(75, 85, 115)',
        borderLeftWidth:0,
        borderTopRightRadius:3,
        borderBottomRightRadius:3,
        width:160,
        height:40
      },
      Text1: {
        fontSize: 13,
        color: 'rgb(45,206,179)',
        textAlign: 'center',
        fontWeight:'bold',
        padding:9
      },
      Text2: {
        fontSize: 13,
        color: 'rgb(255,255,255)',
        textAlign: 'center',
        fontWeight:'bold',
        padding:9
      },
      items2:{
        backgroundColor: 'rgb(255,255,255)',
        width:350,
        height:370,
        borderTopWidth:0,
        marginTop:10,
        borderTopLeftRadius:3,
        borderTopRightRadius:3
      },
      items3:{
        flexDirection:'row',
        marginTop:10,
        alignItems:'center',
        justifyContent:'center'
      },
      button: {
        borderWidth: 2,
        borderRadius: 3,
        backgroundColor: 'rgb(241, 241, 241)',
        borderColor: 'rgb(227, 227, 227)',
        textAlign: 'center',
        fontSize: 14,
        paddingLeft: 10,
        paddingRight: 10,
        width: 260,
        height:45
      },
      VistaIcon:{
        borderWidth: 2,
        borderRightWidth:0,
        borderRadius:3,
        borderTopLeftRadius:0,
        borderBottomLeftRadius:0,
        borderColor: 'rgb(227, 227, 227)',
        paddingLeft: 10,
        paddingRight: 10,
        width: 60,
        height:45,
        alignItems:'center',
      justifyContent:'center'
      },
      VistaRaya:{
        borderWidth: 2,
        borderColor: 'rgb(217,217,217)',
        paddingLeft: 10,
        paddingRight: 10,
        width: 320,
        borderBottomWidth:0,
        borderLeftWidth:0,
        borderRightWidth:0,
        marginTop:10
      },
      buttonf: {
        padding: 9,
      },
      items4:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
      },
      button2: {
        borderRadius: 3,
        borderRightWidth:0,
        borderTopLeftRadius:0,
        borderTopRightRadius:0,
        borderBottomRightRadius:0,
        backgroundColor: 'rgb(153, 165, 191)',
        paddingLeft: 10,
        paddingRight: 10,
        width: 300,
        height:45,
        alignItems:'center',
        justifyContent:'center'
      },
      VistaIcon2:{
        borderTopLeftRadius:0,
        borderLeftWidth:0,
        borderRadius:3,
        borderTopRightRadius:0,
        backgroundColor:'rgb(0, 209, 196)',
        borderBottomLeftRadius:0,
        paddingLeft: 10,
        paddingRight: 10,
        width: 50,
        height:45,
        alignItems:'center',
      justifyContent:'center'
      },
      Text3: {
        fontSize: 14,
        color: 'rgb(255,255,255)',
        textAlign: 'center',
        fontWeight:'bold',
        padding:9,
        alignItems:'center',
        justifyContent:'center'
      },
      icon1: {
      color:'rgb(98, 106, 136)',
      },
      icon2: {
      color:'rgb(255, 255, 255)',
      },
      items5:{
        borderWidth: 2,
        borderRadius: 3,
        backgroundColor: 'rgb(241, 241, 241)',
        borderColor: 'rgb(227, 227, 227)',
        paddingLeft: 10,
        paddingRight: 10,
        width: 260,
        height:45,
        alignItems:'center',
        justifyContent:'center'
      },
      WButton:{
      borderWidth: 2,
      borderRadius: 3,
      borderRightWidth:0,
      backgroundColor: 'rgb(153, 165, 191)',
      borderColor: 'rgb(75, 85, 115)',
        width:110,
        height:28,
        alignItems:'center',
        justifyContent:'center'
    },
    MButton:{
    borderWidth: 2,
    borderRadius: 3,
    backgroundColor: 'rgb(75, 85, 115)',
    borderColor: 'rgb(75, 85, 115)',
    borderTopLeftRadius:0,
    borderBottomLeftRadius:0,
    width:110,
    height:28,
    alignItems:'center',
    justifyContent:'center'

  },
  TextItems5:{
    textAlign:'center',
    color:'rgb(255,255,255)',
    fontSize:14,
    fontWeight:'bold'
  },
  VistaLista: {
    borderWidth: 2,
    borderRadius: 3,
    backgroundColor: 'rgb(241, 241, 241)',
    borderColor: 'rgb(227, 227, 227)',
    width: 260,
    height:45,

  },

  });
  module.exports = Registro;
