import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import BackButton from '../components/BackButton'
import Button from '../components/Button'
import VerticalTopToButtomWraper from '../components/VerticalTopToButtomWraper'
import { View, Text } from 'react-native'
import MessengeHeader from '../containers/MessengeHeader'

export default function Dashboard({ navigation }) {
  return (
    <Background>
      <VerticalTopToButtomWraper>
      {/* <BackButton goBack={navigation.goBack} /> */}
      <Header>
        <Text>Hello 2121</Text>
        <Text>Hello 323</Text>
      </Header>
      <MessengeHeader>
        <Text>Hello 2121</Text>
        <Text>Hello 323</Text>
      </MessengeHeader>
        <Text>Hello 11</Text>
        <Text>Hello 22</Text>
        <Button
          mode="outlined"
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: 'StartScreen' }],
            })
          }
        >
          Logout
        </Button>
        <Text>Hello 33</Text>
      </VerticalTopToButtomWraper>
    </Background>
  )
}
