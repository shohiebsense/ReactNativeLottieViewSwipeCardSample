import React, { Component, useState } from 'react'
import Swiper from 'react-native-deck-swiper'
import { Button, StyleSheet, Text, View, ImageBackground } from 'react-native'
import { Platform } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import ToolbarAndroid from '@react-native-community/toolbar-android'
import LottieView from 'lottie-react-native'
import ProgressBar from 'react-native-progress/Bar'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

export default class Landing extends Component {
  _isMounted = false

  constructor(props) {
    super(props)
    this.state = {
      loadingType: 1,
      text: `Loading Type 1`,
      progress: 0,
    }
  }

  loadingProcess(loadingText) {
    let loadingType = this.state.loadingType
    loadingType++
    setTimeout(() => {
      this.setState({
        loadingType: loadingType,
        text: loadingText,
      })
      console.log(`type : ${loadingType}`)
    }, 1000)
  }

  generateLoadingText(loadingType) {
    switch (loadingType) {
      case 1:
        return 'Memuat kisah Chendy saat masih kecil'
      case 2:
        return 'Memuat kisah Chendy saat sudah sekolah'
      case 3:
        return 'Memuat kisah Chendy saat jadian'
      case 4:
        return 'Memuat kisah Chendy saat udah gede'
      case 5:
        return 'Memuat kisah Chendy saat udah tau discord'
      default:
        return 'Memuat selesai'
    }
  }

  render() {
    let loadingType = this.state.loadingType
    let progress = this.state.progress

    let loadingText = this.generateLoadingText(loadingType)
    if (loadingType < 6) {
      loadingType++
      progress += 0.2
      setTimeout(() => {
        this.setState({
          loadingType: loadingType,
          text: `type : ${loadingType}`,
          progress: progress,
        })

        console.log(`type : ${loadingType}`)
      }, 3000)
    } else {
      setTimeout(() => {
        this.props.navigation.navigate('App')
      }, 3000)
    }
    return (
      <View style={styles.container}>
        {/* <ImageBackground
          style={styles.imgBackground}
          source={require('../assets/bg.png')}
        > */}
        <View style={styles.middle}>
          <LottieView
            source={require('../assets/loading.json')}
            autoPlay
            loop
          />
        </View>
        <View style={styles.middle}>
          <ProgressBar progress={this.state.progress} width={200} />
          <Text style={styles.text}>{loadingText}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    alignSelf: 'stretch',
  },
  imgBackground: {
    flex: 1,
    alignItems: 'center',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  middle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 16,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 48,
  },
  text: {
    padding: 16,
    textAlign: 'justify',
    fontSize: 18,
    color: '#191919',
    backgroundColor: 'transparent',
  },
})
