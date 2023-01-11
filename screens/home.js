import { StyleSheet, Text, TouchableOpacity, View , Image} from 'react-native'
import React from 'react'
import Title from '../component/title'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title titleText='QUIZZLER'/>
      <View style={styles.bannercontainer}>
      <Image source={require('../src/logo.png')} style={styles.banner}
      resizeMode="contain"/>
       
      </View>

      <TouchableOpacity onPress={()=>navigation.navigate("Quiz")}style={styles.button}>
        <Text style={styles.buttontext}>Start</Text>

      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    banner:{
        height: 300,
        width:300

    },
    bannercontainer:{
        justifyContent:'center',
        alignItems:'center',
        flex: 1
    },
    container:{
        paddingTop: 40,
        paddingHorizontal:20,
        height:'100%'
    },
    button:{
        width:'100%',
        backgroundColor:"#2B9348",
        padding: 20,
        borderRadius: 16,
        alignItems:'center',
        marginBottom:30
    },
    buttontext:{
        fontSize: 24,
        fontWeight:'600',
        color:'#fff'
        
    }

})


