import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import ImageAvatar from '../components/ImageAvatar'
import {SettingsDots, MessageIcon, CallIcon, TasksIcon, VideoCallIcon} from './../components/Svgs';

const UserCard = () => {
  return (
    <View style={styles.container}>
        <View style={styles.wrapper}>
            <View style={styles.left}>
                <ImageAvatar size={36} borderRadius={21} src={require('../assets/avater.png')}/>
                <Text style={styles.name}>Shapon Pal Shapon Pal</Text>
            </View>
            <View style={styles.right}>
                <SettingsDots/>
            </View>
        </View>
        
        <View style={styles.actions}>
            <View style={styles.icon}>
                <MessageIcon />
            </View>
            <View style={styles.icon}>
                <CallIcon/>
            </View>
            <View style={styles.icon}>
                <VideoCallIcon />
            </View>
            <View style={styles.icon}>
                <TasksIcon />
            </View>
        </View>
      </View>
  )
}

export default UserCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
        borderRadius: 8,
        margin: 5,
        padding: 16
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "top",
    },
    left:{
        display: 'flex',
        flexDirection: 'row',
        width: '90%',

    },
    right: {
        display: 'flex',
        flexDirection: 'row',
    },
    name:{
        fontSize: 14,
        lineHeight: 17,
        fontWeight: '500',
        color: '#1B1A57',
        paddingLeft: 8,
        flexWrap: 'wrap'
    },
    actions:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: "center",
        marginTop:20
    },
    icon:{

    }
})