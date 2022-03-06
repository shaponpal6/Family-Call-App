import { StyleSheet, Text, View, Button, Pressable, TextInput  } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types';
import BackButton from '../components/BackButton'
import ImageAvatar from '../components/ImageAvatar'
import {PlusCircleIcon, EmojiSmileIcon, MicrophoneIcon} from '../components/Svgs';


const MessageFooter = (props) => {
  const [textInputValue, setTextInputValue] = React.useState('');
  return (
    <View style={styles.container}>
        <Pressable onPress={()=>props.onNavigate('LoginScreen')}><PlusCircleIcon/></Pressable>
        <View style={styles.messageInput}>
          <TextInput
            style={{ 
              height: 40,
              placeholderTextColor: '#1B1A57',
            }}
            onChangeText={text => setTextInputValue(text)}
            value={textInputValue}
            placeholder="Write a message..."
          />
        </View>
        <Pressable onPress={()=>props.onNavigate('RegisterScreen')}><EmojiSmileIcon/></Pressable>
        <Pressable onPress={()=>props.onNavigate('RegisterScreen')}><MicrophoneIcon/></Pressable>
    </View>
  )
}
MessageFooter.defaultProps  = {
    onNavigate: null,
}
MessageFooter.propTypes = {
    onNavigate: PropTypes.func
  };

export default MessageFooter

const styles = StyleSheet.create({
    container: {
        width: '100%', 
        height: 50,
        backgroundColor: '#FFFFFF',
        // borderRadius: 24,
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
        borderTopColor: '#1B1A57',
        borderTopWidth: 1,
    },
    messageInput:{
      flex: 1,
      marginLeft: 10
    },
})