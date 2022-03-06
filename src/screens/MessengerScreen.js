import React, { useState }  from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../containers/Header'
import Paragraph from '../components/Paragraph'
import BackButton from '../components/BackButton'
// import Button from '../components/Button'
import VerticalTopToButtomWraper from '../components/VerticalTopToButtomWraper'
import { View, Text, ScrollView, SafeAreaView, StyleSheet, FlatList, Image, Pressable } from 'react-native';
import MessengeHeader from '../containers/MessengeHeader'
import Footer from '../components/Footer'
import { Title, Avatar, Card, IconButton, Button } from 'react-native-paper';
import CustomScrollView from '../components/CustomScrollView'
import ImageAvatar from '../components/ImageAvatar'
import GridView from '../components/GridView'
import UserCard from '../containers/UserCard'
import MessageFooter from '../containers/MessageFooter'
import {SettingsDotsVertical, VideoCallIcon, CallIcon, BackArrowIcon} from '../components/Svgs'


const HeaderRight = (props) => {
  console.log('props', props)
  return (
    <View style={styles.headerRight}>
        <Pressable onPress={()=>props.onNavigate('AudioCallScreen')}><View style={styles.headerButton}><CallIcon/></View></Pressable>
        <Pressable onPress={()=>props.onNavigate('VideoCallScreen')}><View style={styles.headerButton}><VideoCallIcon/></View></Pressable>
        <Pressable onPress={()=>props.onNavigate('MessengerScreen')}><View style={styles.headerButton}><SettingsDotsVertical/></View></Pressable>
    </View>
  )
}

export default function MessengerScreen({ navigation }) {
  const [dataSource, setDataSource] = useState([]);

  useState(() => {
    let items = Array.apply(null, Array(4)).map((v, i) => {
      return { id: i, src: 'http://placehold.it/200x200?text=' + (i + 1) };
    });
    setDataSource(items);
  }, []);

  const onNavigationHandler = (screen) => {
    console.log('screen', screen)
    navigation.reset({
      index: 0,
      routes: [{ name: screen || "Dashboard" }],
    })
  }

  return (
    <Background>
      <VerticalTopToButtomWraper>
      <Header
        title="Family Mate"
        subTitle="7 Online, from 12 peoples"
        backButton={true}
        goBack={navigation.goBack}
        imageleft={<ImageAvatar size={36} borderRadius={21} src={require('../assets/avater.png')}/>}
        right={<HeaderRight onNavigate={onNavigationHandler}/>}
      />

      <CustomScrollView>
        
      </CustomScrollView>

      <MessageFooter/>
        
      </VerticalTopToButtomWraper>
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  headerRight:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerButton:{
    marginLeft: 10
  }
});