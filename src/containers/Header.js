import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types';
import BackButton from '../components/BackButton'
import ImageAvatar from '../components/ImageAvatar'


const Header = (props) => {
    console.log('props', props)
  return (
    <View style={styles.container}>
        {props.backButton && <BackButton goBack={props.goBack} />}
        <Text style={titleStyle(props.backButton).text}>{props.title}</Text>
        <ImageAvatar size={36} borderRadius={21} src={require('../assets/avater.png')}/>
      </View>
  )
}
Header.defaultProps  = {
    title: "",
    backButton: false,
    goBack: null,
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
    backButton: PropTypes.bool,
    goBack: PropTypes.func
  };

export default Header

const styles = StyleSheet.create({
    container: {
        width: '100%', 
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: 'white',
        paddingVertical: 30,
        paddingHorizontal: 26,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    title:{
        fontSize: 18,
        lineHeight: 22,
        fontWeight: '500',
        color: '#1B1A57'
    },
})
const titleStyle = (backButton) => StyleSheet.create({
    text : {
        marginLeft: backButton ? 10 : 0,
        fontSize: 18,
        lineHeight: 22,
        fontWeight: '500',
        color: '#1B1A57'
    }
});