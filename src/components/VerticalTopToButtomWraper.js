import React from 'react'
import { ImageBackground, StyleSheet, KeyboardAvoidingView, View } from 'react-native'
import Background from './Background'
import { theme } from '../core/theme'

export default function VerticalTopToButtomWraper({ children }) {
  return (
    <Background style={{padding: '0'}}>
      <View style={styles.container}>
        {children}
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})
