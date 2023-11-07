/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import {THEME} from '../utils/theme'

const StageOne = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text style={styles.text}>Stage One</Text>
      </View>
    </SafeAreaProvider>
  )
}

export default StageOne

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
    color : '#FFFFFF',
    textAlign: 'center',
    margin: 10,
  },
})