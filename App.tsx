/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable semi */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RootStackNavigator from './src/navigation/RootStackNavigator'

import { SafeAreaProvider } from 'react-native-safe-area-context'

const App = () => {
  return (
    <SafeAreaProvider>
      <RootStackNavigator />
    </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({})