/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {THEME} from '../utils/theme'

const StagFive = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>StagFive</Text>
    </View>
  )
}

export default StagFive

const styles = StyleSheet.create({
  text : {
    fontSize: 20,
    fontWeight: 'bold',
    color : '#000000',
    textAlign: 'center',
    margin: 10,
  },
  container : {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.Background,
    flexDirection : 'column',
    padding: 20,
  },
})