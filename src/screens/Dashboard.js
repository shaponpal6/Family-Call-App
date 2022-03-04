import React, { useState }  from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
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
import UserCard from '../components/UserCard'

export default function Dashboard({ navigation }) {
  const [dataSource, setDataSource] = useState([]);

  useState(() => {
    let items = Array.apply(null, Array(60)).map((v, i) => {
      return { id: i, src: 'http://placehold.it/200x200?text=' + (i + 1) };
    });
    setDataSource(items);
  }, []);

  return (
    <Background>
      <VerticalTopToButtomWraper>
      {/* <BackButton goBack={navigation.goBack} /> */}

      <View style={{ 
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
      }}>
        <Text style={{
          fontSize: 18,
          lineHeight: 22,
          fontWeight: '500',
          color: '#1B1A57'
        }}>Family Members</Text>
        <View style={{}}><Avatar.Image size={24} source={require('../assets/avater.png')} /></View>
      </View>

      {/* <Card.Title
        title="Family Members"
        right={(props) => <Avatar.Image size={24} source={require('../assets/avater.png')} />}
        style={{width: '100%', paddingLeft: 26, paddingTop: 12}}
        leftStyle={{ width: '80%'}}
        rightStyle={{ paddingRight: 26}}
      /> */}


      <Card>
        <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
          left={(props) => <Avatar.Image size={36} source={require('../assets/user.png')} />}
          leftStyle={{ marginRight: 8}}
          right={(props) => <Button icon="settings-helper"></Button>}
          rightStyle={{ marginRight: 8}}
        />
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>

      <CustomScrollView>
        <GridView column="2">
          {/* <Card.Title
            title="Card Title"
            subtitle="Card Subtitle"
            left={(props) => <Avatar.Icon {...props} icon="folder" />}
            right={(props) => <IconButton {...props} icon="more-vert" onPress={() => {}} />}
          /> */}
        </GridView>
        
        <FlatList
          data={dataSource}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: 'column', margin: 5, backgroundColor: 'green', }}>
              <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
              <UserCard user={item}/>
            </View>
          )}
          //Setting the number of column
          numColumns={2}
          keyExtractor={(item, index) => index}
        />
      </CustomScrollView>
      <Header>
        <Title >Family Members</Title >
        <Text>Hello 323</Text>
      </Header>
      <MessengeHeader>
        <Text>Hello 2121</Text>
        <Text>Hello 323</Text>
      </MessengeHeader>
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
        <Footer>
          <Text>Hello 33</Text>
          <Text>Hello 33</Text>
          <Text>Hello 33</Text>
          <Text>Hello 33</Text>
        </Footer>
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