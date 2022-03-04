import React from 'react'
import { ScrollView, StyleSheet, KeyboardAvoidingView, View } from 'react-native'
import { theme } from '../core/theme'

export default function CustomScrollView({ children }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{paddingHorizontal: 16, paddingVertical: 20}}>
        {children}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // display: 'flex',
    width: '100%',
    // maxWidth: 340,
    // padding: 20,
    // flexDirection: 'row',
    // alignSelf: 'center',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    // backgroundColor: '#987',
  },
})