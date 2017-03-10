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
class modo extends Component {
  constructor(props) {
         super(props);
         this.state = {
             pressed: false
         }
     }

    render() {
      return (
        <View style={styles.container}>
        <View style={styles.items1}>
        <View style={styles.vista1}>
        <Icon style={styles.icon}
        name="bars"
        pull="center"
        size={25}
        />
        </View>
        <View style={styles.vista2}>
        <View style={styles.VistaIcons}>
        <Icon style={styles.icon}
        name="bell"
        pull="center"
        size={25}
        />
        <Icon style={styles.icon2}
        name="arrow-circle-right"
        pull="center"
        size={25}
        />
        </View>
        </View>
        </View>
        <Image source={require('./Images/logo.jpg')} style={styles.Image}/>

        <View>
        <Text style={styles.Text1}>ELIGE UN MODO:</Text>
        </View>
        <View style={styles.items3}>
        <TouchableHighlight onPress={
                ()=> {
                }
            } style={[styles.button, this.state.pressed ? {borderColor: 'rgb(115, 67, 159)',
             backgroundColor:'rgb(115, 67, 159)'} : {}]}
            onHideUnderlay={()=>{this.setState({pressed: false})}}
            onShowUnderlay={()=>{this.setState({pressed: true})}}>
            <Text onPress={
                    ()=> {
                    }
                } style={[styles.TextB, this.state.pressed ? {color:'rgb(68,200,196)'} : {}]}
                onHideUnderlay={()=>{this.setState({pressed: false})}}
                onShowUnderlay={()=>{this.setState({pressed: true})}}>DESAFIO</Text>
            </TouchableHighlight>
        </View>
        <View style={styles.items3}>
        <TouchableHighlight style={styles.button}>
        <Text style={styles.TextB}> CATEGORÍAS </Text>
        </TouchableHighlight>
        </View>

        <View style={styles.items4}>
        <View style={styles.items5}>
        <TouchableHighlight style={styles.buttonMenos}>
        <Text style={styles.TextMS}> - </Text>
        </TouchableHighlight>
        <View style={styles.buttonResult}>
        <Text style={styles.TextMenos}> 29</Text>
        </View>
        <TouchableHighlight style={styles.buttonMas}>
        <Text style={styles.TextMS}> + </Text>
        </TouchableHighlight>
        </View>
        <TouchableHighlight style={styles.buttoncant}>
        <Text style={styles.TextB}> Cantidad de Preguntas </Text>
        </TouchableHighlight>
        </View>
        <View style={styles.VistaText}>
        <Text style={styles.TextVista}> este es una prueba de los textos de reto enarm para el reto.</Text>
        </View>

        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'rgb(241,241,241)',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: 'absolute',
    },

    Image:{
      width:50,
      height:50,
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
        backgroundColor: 'rgb(241,241,241)',
        width:350,
        height:60,
        marginTop:20,
        borderTopLeftRadius:3,
        borderTopRightRadius:3,
      },
      vista1:{
        width:100,
        height:40,
      alignItems:'flex-start'
      },
      vista2: {
        width:200,
        height:40,
        alignItems:'flex-end',
      },
  VistaIcons:{
      flexDirection:'row',
  },
  icon: {
  color:'rgb(75, 85, 115)',
  },
  icon2:{
    color:'rgb(98, 106, 136)',
    marginLeft:10
  },
  Text1:{
    color:'rgb(75, 85, 115)',
    fontSize:18,
    fontWeight:'bold',
    marginTop:10
  },
  items3:{
    flexDirection:'row',
    marginTop:13,
    alignItems:'center',
    justifyContent:'center'
  },
  buttonC: {
    borderWidth: 2,
    borderRadius: 3,
    backgroundColor: 'rgb(189, 197, 213)',
    borderColor: 'rgb(189, 197, 213)',
    paddingLeft: 10,
    paddingRight: 10,
    width: 300,
    height:45,
    alignItems:'center',
    justifyContent:'center'
  },
  TextB:{
    color:'rgb(81, 85, 176)',
    fontSize:14,
    fontWeight:'bold'
  },
  items4:{
    flexDirection:'row',
    marginTop:13,
    alignItems:'center',
    justifyContent:'center'
  },
  button: {
    borderWidth: 2,
    borderRadius: 3,
    backgroundColor: 'rgb(189, 197, 213)',
    borderColor: 'rgb(189, 197, 213)',
    paddingLeft: 10,
    paddingRight: 10,
    width: 300,
    height:45,
    alignItems:'center',
    justifyContent:'center'
  },
  items5:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  buttoncant: {
    borderWidth: 2,
    borderTopRightRadius:3,
    borderBottomRightRadius:3,
    backgroundColor: 'rgb(189, 197, 213)',
    borderColor: 'rgb(189, 197, 213)',
    paddingLeft: 10,
    paddingRight: 10,
    width: 200,
    height:45,
    alignItems:'center',
    justifyContent:'center'
  },
  buttonMenos: {
    backgroundColor: 'rgb(0, 209, 196)',
    width: 28,
    height:45,
    alignItems:'center',
    justifyContent:'center',
    borderColor: 'rgb(189, 197, 213)',
    borderTopLeftRadius:3,
    borderBottomLeftRadius:3,
    borderTopWidth:2,
    borderLeftWidth:2,
    borderBottomWidth:2
  },
  buttonResult: {
    backgroundColor: 'rgb(255, 255, 255)',
    width: 43,
    height:45,
    alignItems:'center',
    justifyContent:'center',
    borderColor: 'rgb(189, 197, 213)',
    borderTopWidth:2,
    borderBottomWidth:2
  },
  buttonMas: {
    backgroundColor: 'rgb(0, 209, 196)',
    width: 28,
    height:45,
    alignItems:'center',
    justifyContent:'center',
    borderColor: 'rgb(189, 197, 213)',
    borderTopWidth:2,
    borderBottomWidth:2
  },
  TextMS:{
    color:'rgb(255, 255, 255)',
    fontWeight:'bold',
    textAlign:'center'
  },
  VistaText:{
    alignItems:'center',
    justifyContent:'center',
    width:300,
    marginTop:12
  },
  TextVista:{
  textAlign:'center',
  color:'rgb(160, 165, 190)',
  fontWeight:'bold'
  },
  });
  module.exports = modo;
