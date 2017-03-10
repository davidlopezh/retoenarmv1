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

class tabla extends Component {

    render() {
      return (

        //   <ReactNative.NavigatorIOS
        //      barTintColor='rgb(75, 85, 115)'
        //        titleTextColor='rgb(0, 209, 196)'
        //    title: 'RESULTADOS DE DESAFIO' />
        
        <View style={styles.container}>

        <View style={styles.items1}>
        <TouchableHighlight style={styles.vista1}>
        <Text style={styles.Text1}>USUARIO</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.vista2}>
        <Text style={styles.Text2}>UNIVERSIDAD</Text>
        </TouchableHighlight>
        </View>


    <View style={styles.items3}>
  <TextInput style={styles.button}placeholder='Busqueda por usuario...'/>
  </View>

  <View style={styles.items3}>
  <View style={styles.VistaLista}>
  <Select>
    <Option  value={1}>Especialidad</Option>
    <Option value={2}>Medicina</Option>
    <Option value={3}>Gastronimia</Option>
  </Select>
  </View>
  </View>

  <View style={styles.items3}>
  <View style={styles.VistaLista}>
  <Select style={styles.button}placeholder='Busqueda por usuario...'>
    <Option  value={1}>Universidad</Option>
    <Option value={2}>TEC</Option>
    <Option value={3}>UTVT</Option>
  </Select>
  </View>
  </View>
  <View style={styles.items3}>
  <TouchableHighlight style={styles.button2}>
  <Text style={styles.Text3}>BUSCAR</Text>
  </TouchableHighlight>
</View>
  <View style={styles.items3}>
<View style={styles.vistaperf}>
  <View style={styles.vistad}>
<View style={styles.vistaImagD}>
  <Image source={require('./Images/mujer1.jpg')} style={styles.image2}/>
  <Text style={styles.Textm}>Nombre {'\n'}<Text style={styles.Textc}>Carrera</Text></Text>
  </View>
  <View style={styles.vistaUri}>
  <Text style={styles.Textcal}>#URI{'\n'}1.8835</Text>
</View>
  </View>

  <View style={styles.vistad}>
  <View style={styles.vistaPro}>
  <Text style={styles.Textcan}>Promedio por pregunta: 0 seg.</Text>
</View>
<View style={styles.vistaR}>
<Text style={styles.TextR}>10/10</Text>
</View>
</View>
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
      backgroundColor: 'rgb(241,241,241)',
      left: 0,
      right: 0,
      top: 65,
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
        marginTop:15,
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
        marginTop:7,
        alignItems:'center',
        justifyContent:'center'
      },
      button: {
        borderWidth: 2,
        borderRadius: 3,
        backgroundColor: 'rgb(241, 241, 241)',
        borderColor: 'rgb(227, 227, 227)',
        textAlign: 'left',
        fontSize: 14,
        paddingLeft: 10,
        paddingRight: 10,
        width: 320,
        height:45,
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
        backgroundColor: 'rgb(0, 209, 196)',
        paddingLeft: 10,
        paddingRight: 10,
        width: 280,
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
    width: 320,
    height:45
  },
  image2:{
    width:50,
    height:50,
   borderRadius: 25,
   marginLeft:12,
   marginBottom:17,
   marginTop:19
  },
  vistaperf:{
    borderWidth: 2,
    borderRadius: 3,
    borderColor: 'rgb(206, 206, 206)',
    width:320,
    height:115,
    marginTop:20
  },
  vistad: {
  flexDirection:'row',
  },
  vistaImagD:{
    borderWidth: 2,
    backgroundColor: '#ffffff',
    borderColor: 'rgb(214, 214, 214)',
    width:220,
    height:75,
    borderRightWidth:0,
    borderLeftWidth:0,
    borderBottomWidth:0,
    borderTopWidth:0,
    alignItems:'center',
    flexDirection:'row',
    borderRadius:(3,0)
  },
  Textm: {
    padding:0,
    fontSize: 12,
    color: 'rgb(47, 50, 50)',
    textAlign: 'center',
    fontWeight:'bold'
  },
  vistaUri:{
    borderWidth: 2,
    backgroundColor: 'rgb(115, 68, 157)',
    width:96,
    height:76,
    marginLeft:0,
    borderRightWidth:0,
    borderLeftWidth:0,
    borderBottomWidth:0,
    borderTopWidth:0,
    justifyContent:'center',
    alignItems:'center'
  },
  Textcal: {
    padding:0,
    fontSize: 12,
    color: 'rgb(255, 255, 255)',
    textAlign: 'center',
    fontWeight:'bold',
  },
  vistaPro: {
    backgroundColor: 'rgb(189, 197, 213)',
    borderRightWidth:0,
    borderLeftWidth:0,
    borderBottomWidth:0,
    borderTopWidth:0,
    height:35,
   width:220,
     justifyContent:'center',
     alignItems:'center'
  },
  Textcan: {
    padding:0,
    fontSize: 10,
    color: 'rgb(255, 255, 255)',
    textAlign: 'center',
    fontWeight:'bold'
  },
  vistaR: {
    backgroundColor: 'rgb(175,241,236)',
    borderRightWidth:0,
    borderLeftWidth:0,
    borderBottomWidth:0,
    borderTopWidth:0,
    width:96,
    height:35,
    justifyContent:'center',
    alignItems:'center'
  },
  TextR: {
    padding:0,
    fontSize: 12,
    color: 'rgb(115, 68, 157)',
    textAlign: 'center',
    fontWeight:'bold'

  },
  });
  module.exports = tabla;
