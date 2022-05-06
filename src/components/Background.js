import React from 'react'
import PropTypes from 'prop-types';
import { ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { theme } from '../core/theme'

export default function Background(props) {
  return (
    <ImageBackground
      source={require('../assets/background_dot.png')}
      resizeMode="repeat"
      style={styles.background}
    >
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {props.children}
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}
Background.defaultProps  = {
  src: '',
  children: null,
}
Background.propTypes = {
  src: PropTypes.string,
  children: PropTypes.oneOfType([
          PropTypes.arrayOf(PropTypes.node),
          PropTypes.node
      ]),
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    // backgroundColor: theme.colors.surface,
  },
  container: {
    flex: 1,
    // padding: 20,
    width: '100%',
    // maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
