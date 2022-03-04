import React from 'react'
import { ScrollView, StyleSheet, KeyboardAvoidingView, View } from 'react-native'
import { theme } from '../core/theme'

export default function GridView({ children }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{paddingHorizontal: 24}}>
        {children}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    // maxWidth: 340,
    // padding: 20,
    flexDirection: 'row',
    // alignSelf: 'center',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    // backgroundColor: '#987',
  },
})