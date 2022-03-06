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
        
        <View style={innerContainer(props.backButton).wrapper}>
            {props.imageleft !== null && props.imageleft}
            <View style={styles.titleContainer}>
                {props.title !== "" && <Text style={styles.title}>{props.title}</Text>}
                {props.subTitle !== "" && <Text style={styles.subTitle}>{props.subTitle}</Text>}
            </View>
        </View>
        {props.right !== null && props.right}
      </View>
  )
}
Header.defaultProps  = {
    title: "",
    subTitle: "",
    backButton: false,
    goBack: null,
    left: null,
    right: null,
}
Header.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    backButton: PropTypes.bool,
    goBack: PropTypes.func,
    imageleft: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ]),
    right: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ])
  };

export default Header

const styles = StyleSheet.create({
    container: {
        width: '100%', 
        // height: 50,
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
    titleContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft:10
    },
    title:{
        fontSize: 18,
        lineHeight: 22,
        fontWeight: '500',
        color: '#1B1A57'
    },
    subTitle:{
        fontSize: 12,
        lineHeight: 18,
        fontWeight: '400',
        color: '#4F5E7B'
    },
});

const innerContainer = (backButton) => StyleSheet.create({
    wrapper : {
        marginLeft: backButton ? 10 : 0,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    }
});