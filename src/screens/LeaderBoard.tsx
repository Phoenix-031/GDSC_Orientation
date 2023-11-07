/* eslint-disable keyword-spacing */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */


import { FlatList, StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'

import {THEME} from '../utils/theme'
import { SafeAreaInsetsContext, SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Data } from '../utils/stageData'

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { LeaderBoardData } from '../utils/leaderboarddata'


const LeaderBoard = () => {
  const bottomTabHeight = useBottomTabBarHeight();
  
  return (
    <SafeAreaView style={{
      width : '100%',
      flex : 1,
      justifyContent : 'flex-start',
      alignContent : 'center',
      backgroundColor : THEME.COLORS.Background,
    }}>

        <FlatList
        contentContainerStyle={{
          paddingBottom: bottomTabHeight + 25,
          // borderWidth : 1,
          // borderColor : 'red',
          padding : 15,
          paddingTop : 20,
          gap :5,
        }}  
        data = {LeaderBoardData}
        renderItem = {({item, index}) => {
          let icon = styles.iconstyle
          if(index === 0){
            icon = {...styles.iconstyle, color : '#FFD700'}
          }else if(index === 1){
            icon = {...styles.iconstyle, color :'#c0c0c0'}
          }else if(index === 2){
            icon = {...styles.iconstyle, color : '#cd7f32'}
          }
          return (
            <TouchableOpacity style={{
              width : '100%',
              display : 'flex',
              justifyContent : 'space-between',
              gap : 30,
              paddingHorizontal :15,
              alignItems : 'center',
              flexDirection : 'row',
              borderWidth :1,
              borderColor : '#FFFFFF',
              borderRadius: 10,
              paddingVertical : 30,
            }}>
              <FontAwesome5 name="award" size={40} style={icon}/>
              <View style={{
                display : 'flex',
                flexDirection : 'column',
                justifyContent : 'center',
                alignItems : 'center',
                gap :10,
              }}>
                <Text style={{
                  fontSize : 18,
                  fontWeight : 'bold',
                  color : 'floralwhite',
                }}>{item.teamName}</Text>
                <Text style={{
                  fontSize : 15,
                  fontWeight : 'bold',
                  color : 'floralwhite',
                }}>{item.stage}</Text>
              </View>
              <View>
                <Text style={{
                  fontSize : 18,
                  fontWeight : 'bold',
                  color : 'floralwhite',
                }}>
                  {item.score}
                </Text>
              </View>
            </TouchableOpacity>
            )
        }
        }
        keyExtractor={item => item.id.toString()}
        />
    </SafeAreaView>
  )
}

export default LeaderBoard

const styles = StyleSheet.create({
  iconstyle : {
    color : 'gray',
  }
})