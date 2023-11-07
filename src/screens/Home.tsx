/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {SCREENS} from '../utils/screens'

import { Data } from '../utils/stageData'

import {THEME} from '../utils/theme'

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={{
      width : '100%',
      flex : 1,
      justifyContent : 'flex-start',
      paddingTop : 100,
      alignContent : 'center',
      backgroundColor : THEME.COLORS.Background,
      gap : 5,
    }}>

      <View style={styles.row}>
      <TouchableOpacity 
      onPress={
        () => {
          navigation.navigate(SCREENS.Stageone)
        }
      }
      style={{
            width : '45%',
            display : 'flex',
            justifyContent : 'center',
            alignItems : 'center',

            borderWidth :1,
            borderColor : '#FFFFFF',
            borderRadius: 10,
            paddingVertical : 50,
          }}>
            <Text style={styles.stagetext}>Stage I</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          // disabled = {true}
      onPress={
        () => {
          navigation.navigate(SCREENS.Stagetwo)
        }
      }
          style={{
            width : '45%',
            display : 'flex',
            justifyContent : 'center',
            alignItems : 'center',

            borderWidth :1,
            borderColor : '#FFFFFF',
            borderRadius: 10,
            paddingVertical : 50,
          }}>
            <Text style={styles.stagetext}>Stage II</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.row}>
      <TouchableOpacity 
      onPress={
        () => {
          navigation.navigate(SCREENS.Stagethree)
        }
      }
      style={{
            width : '45%',
            display : 'flex',
            justifyContent : 'center',
            alignItems : 'center',

            borderWidth :1,
            borderColor : '#FFFFFF',
            borderRadius: 10,
            paddingVertical : 50,
          }}>
            <Text style={styles.stagetext}>Stage III</Text>
          </TouchableOpacity>
          <TouchableOpacity 
      onPress={
        () => {
          navigation.navigate(SCREENS.Stagefour)
        }
      }
          style={{
            width : '45%',
            display : 'flex',
            justifyContent : 'center',
            alignItems : 'center',

            borderWidth :1,
            borderColor : '#FFFFFF',
            borderRadius: 10,
            paddingVertical : 50,
          }}>
            <Text style={styles.stagetext}>Stage IV</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.row}>
      <TouchableOpacity 
      onPress={
        () => {
          navigation.navigate(SCREENS.Stagefive)
        }
      }
      style={{
            width : '45%',
            display : 'flex',
            justifyContent : 'center',
            alignItems : 'center',

            borderWidth :1,
            borderColor : '#FFFFFF',
            borderRadius: 10,
            paddingVertical : 50,
          }}>
            <Text style={styles.stagetext}>Stage V</Text>
          </TouchableOpacity>
      </View>
  
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  row:{
    paddingVertical : 5,
    width : '100%',
    display : 'flex',
    gap : 5,
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center',
  },
  stagetext : {
    fontFamily : 'Poppins',
    fontSize : 20,
    fontStyle : 'normal',
    fontWeight : 'bold',
  }
})