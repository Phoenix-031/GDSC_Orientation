/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/func-call-spacing */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView,ScrollView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'

import { useState, useEffect, useLayoutEffect } from 'react'

import { generateUniqueCode } from '../utils/generateCode'
import { SafeAreaInsetsContext, SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import { SCREENS } from '../utils/screens'
import {THEME} from '../utils/theme'

const TeamOnboard = ({navigation}) => {

  const [tmcode, setTeamCode] = useState('');

  useLayoutEffect (() => {
    console.log ('TeamOnboard')
    const teamCode = generateUniqueCode();
    setTeamCode(tmcode);
    console.log (teamCode);
  }, [])

  const teamCode = generateUniqueCode();
  
  return (
    <SafeAreaView style={{
     flex : 1,
     justifyContent : 'center',
     alignItems : 'center',
     backgroundColor : THEME.COLORS.Background,
    }}>

<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
<KeyboardAvoidingView 
      style = {{flex : 1, width : '100%'}}
      behavior={Platform.OS === 'ios' ? "height" : "padding"}
      keyboardVerticalOffset={Platform.OS === 'ios'? 30 : 0}
      >
  {/* <ScrollView
  ref = {(ref) => (scrollView = ref)}
  bounces = {false}
  contentContainerStyle={{
    flex:1,
  }}> */}
<View style={{
      width : '100%',
      height : '100%',
      flex: 1,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: THEME.COLORS.Background,
      flexDirection : 'column',
      padding: 20,

      // borderWidth : 1,
      // borderColor : 'red',
    }}>
      <View style = {{
      width : '100%',
      flex : 1,
      justifyContent : 'center',
      alignItems : 'center',
      display : 'flex',
      padding : 10,
      }}>
      <View>
        {teamCode ? (
          <Text style={styles.tmcode}>
            {teamCode}
          </Text>
        ) : (
          <Text style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: '#000000',
            textAlign: 'center',
            marginBottom: 20,
          }}>
            Loading...
          </Text>
        )
        }
      </View>
      <View  style={{
        width: '100%',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
      }}>
        <Text style={styles.inpheader}>Enter Team name : </Text>
        <TextInput 
         style={styles.inpfield} />
      </View>

      <View style={{
        width: '100%',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
      }}>
        <Text style={styles.inpheader}>Team Leader : </Text>
        <TextInput 
        placeholder='Number of members'
         style={styles.inpfield}/>
      </View>

      <View style={{
        width: '100%',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
      }}>
        <Text style={styles.inpheader}>Number of Members: </Text>
        <TextInput 
         style={styles.inpfield}/>

      <TouchableOpacity onPress={
        () => {
          navigation.navigate(SCREENS.Home, {
            teamCode : teamCode,
          })
      }}>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'floralwhite',
          textAlign: 'center',
          marginBottom: 10,
          borderWidth : 1,
          borderColor : 'gray',
          borderRadius: 10,
          padding: 10,
        }}>Create Team</Text>
      </TouchableOpacity>

      </View>
      </View>

    </View>
    {/* </ScrollView> */}
    </KeyboardAvoidingView>
</TouchableWithoutFeedback>
    </SafeAreaView>
  )
}

export default TeamOnboard

const styles = StyleSheet.create({
  inpheader : {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'floralwhite',
    textAlign: 'center',
    marginBottom: 10,
  },
  tmcode : {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'floralwhite',
      textAlign: 'center',
      marginBottom: 20,
  },
  inpfield : {
          width: '80%',
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 10,
          padding: 10,
          fontSize: 15,
          color : 'floralwhite',
          textAlign: 'center',
          marginBottom: 10,
  }
})