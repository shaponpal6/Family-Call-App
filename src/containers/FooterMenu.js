import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types';
import BackButton from '../components/BackButton'
import ImageAvatar from '../components/ImageAvatar'
import {HomeIcon, MessageIcon, CallIcon, ScheduleIcon, SettingsIcon, HistoryIcon} from '../components/Svgs';


const FooterMenu = (props) => {
    console.log('props', props)
  return (
    <View style={styles.container}>
        <HomeIcon/>
        <HistoryIcon/>
        <MessageIcon/>
        <ScheduleIcon/>
        <SettingsIcon/>
    </View>
  )
}
FooterMenu.defaultProps  = {
    title: "",
    backButton: false,
    goBack: null,
}
FooterMenu.propTypes = {
    title: PropTypes.string.isRequired,
    backButton: PropTypes.bool,
    goBack: PropTypes.func
  };

export default FooterMenu

const styles = StyleSheet.create({
    container: {
        width: '100%', 
        height: 50,
        backgroundColor: '#2C6EFF',
        borderRadius: 24,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 30,
        paddingHorizontal: 26,
        shadowColor: '#2C6EFF',
        shadowOffset: {width: 2, height: 4},
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