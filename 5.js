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
  ScrollView
} from 'react-native';

import { Select, Option } from 'react-native-select-list';
import Icon from 'react-native-vector-icons/FontAwesome';

class resultados extends Component {
  constructor(props) {
         super(props);
         this.state = {
             pressed: false
         }
     }

    render() {
          var _scrollView: ScrollView;
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

<View style={styles.items2}>
<Text style={styles.TextItems2}>Ranking</Text>
<Text style={styles.TextItems2}> Universidad</Text>
<Text style={styles.TextItems2}> Prom. #URI </Text>
</View>
<View style={styles.vistagene}>
  <ScrollView  automaticallyAdjustContentInsets={false} pagingEnabled={true}>
<View style={styles.items3}>
<View style={styles.View1}>
<Text style={styles.TextItems2}>1</Text>
</View>
<View style={styles.View2}>
<Text style={styles.TextItems2}>UNAM-México D.F.</Text>
</View>
<View style={styles.View3}>
<Text style={styles.TextItems2}> 168.9</Text>
</View>


</View>
<View style={styles.items3}>
<View style={styles.View1}>
<Text style={styles.TextItems2}>2</Text>
</View>
<View style={styles.View2}>
<Text style={styles.TextItems2}>UNAM-Morelos</Text>
</View>
<View style={styles.View3}>
<Text style={styles.TextItems2}> 168.9</Text>
</View>
</View>

<View style={styles.items3}>
<View style={styles.View1}>
<Text style={styles.TextItems2}>3</Text>
</View>
<View style={styles.View2}>
<Text style={styles.TextItems2}>UNAM-Morelos</Text>
</View>
<View style={styles.View3}>
<Text style={styles.TextItems2}> 168.9</Text>
</View>
</View>
<View style={styles.items3}>
<View style={styles.View1}>
<Text style={styles.TextItems2}>4</Text>
</View>
<View style={styles.View2}>
<Text style={styles.TextItems2}>UNAM-Morelos</Text>
</View>
<View style={styles.View3}>
<Text style={styles.TextItems2}> 168.9</Text>
</View>
</View>


<View style={styles.items3}>
<View style={styles.View1}>
<Text style={styles.TextItems2}>5</Text>
</View>
<View style={styles.View2}>
<Text style={styles.TextItems2}>Lorem Ipsum</Text>
</View>
<View style={styles.View3}>
<Text style={styles.TextItems2}> 169.9</Text>
</View>
</View>
</ScrollView>
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
marginTop:80,
borderTopLeftRadius:3,
borderTopRightRadius:3,
},
vista1: {
borderWidth: 2,
backgroundColor: 'rgb(75, 85, 115)',
borderColor: 'rgb(75, 85, 115)',
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
flexDirection:'row',
justifyContent:'space-between',
alignItems:'flex-start',
marginTop:17,
width:300
},
TextItems2:{
color:'rgb(164,167,180)'
},
items3:{
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',
marginTop:0,
width:300,
height:40,
backgroundColor:'rgb(255,255,255)',

},
View1:{
borderRightWidth:1,
width:75,
height:40,
justifyContent:'center',
alignItems:'center',

},

View2:{
  width:150,
  height:40,
  justifyContent:'center',
  alignItems:'center',
},
View3:{
  borderLeftWidth:1,
  width:75,
  height:40,
  justifyContent:'center',
  alignItems:'center',
  borderTopRightRadius:3
},
vistagene:{
  marginTop:5,
  borderWidth:1,
  borderColor:'black',
  borderRadius:3,
  backgroundColor:'rgb(255,255,255)'

}

});
   module.exports = resultados;
