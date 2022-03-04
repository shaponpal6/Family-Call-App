import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const UserCard = () => {
  return (
    <View style={styles.container}>
        <View style={{}}>
            <View style={{}}>
                <Image size={24} source={require('../assets/avater.png')} />
                <Text style={{
                    fontSize: 18,
                    lineHeight: 22,
                    fontWeight: '500',
                    color: '#1B1A57'
                    }}>Family Members</Text>
            </View>
        </View>
        
        <View style={{}}>
            <Image size={24} source={require('../assets/avater.png')} />
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
        padding: 10
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
    }

})