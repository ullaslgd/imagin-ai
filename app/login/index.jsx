import { View, Text, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'






export default function Login() {



  return (
    <View>
       <Image   source={require('../../assets/images/login.jpg')} style={styles.loginImage} />

       <View style={
              {
                backgroundColor:'white',
                borderTopLeftRadius:30,
                borderTopRightRadius:30,
                marginTop:-60,
                height:700
              }
       }>
        <Text style={{
            textAlign:'center',
            fontSize:30,
            fontWeight:'bold',
            paddingTop:30,
        }}>Welcome to Imagin AI </Text>
        <Text style={{
            textAlign:'center',
            fontSize:15,
            padding:6,
            color:Colors.GRAY,
        }}>Generate ai images in just one click</Text>

        <View style={{
              backgroundColor:Colors.PRIMARY,
              paddingVertical:12,
              borderRadius:12,
              width:'60%',
              alignSelf:'center',
              marginTop:20
       }}>
        <Text style={{

            textAlign:'center',
            color:'white',
            fontSize:20,
            fontWeight:'bold',
        }}>Continue</Text>
         </View>

         <Text style={{
            textAlign:'center',
            fontSize:15,
            padding:6,
            marginTop:20,
            color:Colors.GRAY,
         }}>by clicking you accept terms & conditions</Text>





       </View>




        </View>
  )}

  const styles = StyleSheet.create({
    loginImage:{
        width:'100%',
        height:600,
    }

  })
