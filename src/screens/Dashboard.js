import React, { useState }  from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../containers/Header'
import Paragraph from '../components/Paragraph'
import BackButton from '../components/BackButton'
// import Button from '../components/Button'
import VerticalTopToButtomWraper from '../components/VerticalTopToButtomWraper'
import { View, Text, ScrollView, SafeAreaView, StyleSheet, FlatList, Image } from 'react-native';
import MessengeHeader from '../containers/MessengeHeader'
import Footer from '../components/Footer'
import { Title, Avatar, Card, IconButton, Button } from 'react-native-paper';
import CustomScrollView from '../components/CustomScrollView'
import GridView from '../components/GridView'
import UserCard from '../containers/UserCard'
import FooterMenu from '../containers/FooterMenu'

export default function Dashboard({ navigation }) {
  const [dataSource, setDataSource] = useState([]);

  useState(() => {
    let items = Array.apply(null, Array(4)).map((v, i) => {
      return { id: i, src: 'http://placehold.it/200x200?text=' + (i + 1) };
    });
    setDataSource(items);
  }, []);

  return (
    <Background>
      <VerticalTopToButtomWraper>
      <Header title="Family Members" backButton={true} goBack={navigation.goBack}/>
      
      
      <CustomScrollView>
        <FlatList
          data={dataSource}
          renderItem={({ item }) => (
              <UserCard user={item}/>
          )}
          //Setting the number of column
          numColumns={2}
          keyExtractor={(item, index) => index}
        />
      </CustomScrollView>

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

      <FooterMenu/>
        
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
});