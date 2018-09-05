import React from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native'

const styles = StyleSheet.create({  
    container: {
      flex: 1,
      backgroundColor: 'white'
    }, 
    padding: {
      padding: 5
    }
})

const MyPanel = (props) => (
    <View style={[styles.container, styles.padding]}>
        {props.children}
    </View>
)

const MyImagePanel = (props) => (
    <ImageBackground style={{ flex: 1, width: null }} source={props.img}>
        <View style={styles.padding}>
            {props.children}
        </View>
    </ImageBackground>
)

export { MyPanel, MyImagePanel }
