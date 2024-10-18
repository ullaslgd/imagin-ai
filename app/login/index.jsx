import { View, Text, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'
import * as WebBrowser from 'expo-web-browser';
import { Link } from 'expo-router';
import { useOAuth } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'
import { TouchableOpacity } from 'react-native';

export const useWarmUpBrowser = () => {
    React.useEffect(() => {
      // Warm up the android browser to improve UX
      // https://docs.expo.dev/guides/authentication/#improving-user-experience
      void WebBrowser.warmUpAsync()
      return () => {
        void WebBrowser.coolDownAsync()
      }
    }, [])
  }

  WebBrowser.maybeCompleteAuthSession()

export default function Login() {

    useWarmUpBrowser()

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' })

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('/dashboard', { scheme: 'myapp' }),
      })

      if (createdSessionId) {
        // setActive!({ session: createdSessionId })
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error('OAuth error', err)
    }
  }, [])


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

        <TouchableOpacity style={{
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
        }} onPress={onPress}>Continue</Text>
         </TouchableOpacity>

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
