/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {THEME} from '../utils/theme'

const StageTwo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>StageTwo</Text>
    </View>
  )
}

export default StageTwo

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.Background,
    flexDirection : 'column',
    padding: 20,
  },
  text : {
    fontSize: 20,
    fontWeight: 'bold',
    color : '#000000',
    textAlign: 'center',
    margin: 10,
  }
})