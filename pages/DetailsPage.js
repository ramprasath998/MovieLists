import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Alert,Image,Dimensions,Container,Row,Col  } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

function Detail(props) {
    const { route, navigation } = props
    var width = Dimensions.get('window').width; 
    const details = JSON.parse(props.route.params)
    console.log(details.poster_path)
    props.navigation


  return (
    <View style={styles.container}>
      <ScrollView>
      <Image source={{uri:details.poster_path}}  style={{width:width, height:250,alignSelf: 'stretch'}} />
      <View style={{flex: 1, flexDirection: 'row'}}>
      <Text style={styles.cardText}>{details.title}</Text>
      </View>
      <Text style={styles.cardTextNormal}>{details.overview}</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:10,
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
  },
  card: {
    width: 350,
    height: 200,
    borderRadius: 10,
    backgroundColor: '#101010',
    margin: 10,
    padding: 10,
    alignItems: 'center'
  },
  cardText: {
    fontSize: 25,
    color: '#000000',
    margin: 5,
    fontFamily:'Roboto',
    fontWeight: 'bold'
  },
  cardTextNormal: {
    fontSize: 19,
    color: '#000000',
  
    fontFamily:'Roboto',
   
    padding:5,
    marginTop:10
  },
  buttonContainer: {
    backgroundColor: '#222',
    borderRadius: 5,
    padding: 10,
    margin: 20
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  }
})

export default Detail