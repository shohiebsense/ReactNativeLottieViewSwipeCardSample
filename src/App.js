import React, { Component } from 'react'
import Swiper from 'react-native-deck-swiper'
import { Button, StyleSheet, Text, View, ImageBackground } from 'react-native'
import { Platform } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import ToolbarAndroid from '@react-native-community/toolbar-android'
import LottieView from 'lottie-react-native'
import images from './Images'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: images,
      swipedAllCards: true,
      swipeDirection: '',
      cardIndex: 0,
    }
  }

  renderCard = (card, index) => {
    return (
      <View style={styles.card}>
        <LinearGradient
          colors={['#09203f', '#537895']}
          start={[0.1, 0.1]}
          style={styles.linearGradient}
        >
          <View style={styles.top}>
            <LottieView source={card.image} autoPlay loop />
          </View>

          <View style={styles.bottom}>
            <Text style={styles.text}>{card.text}</Text>
          </View>
        </LinearGradient>
      </View>
    )
  }

  onSwiped = (type) => {
    console.log(`di swip ke: ${type}`)
  }

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true,
    })
  }

  swipeLeft = () => {
    this.swiper.swipeLeft()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>AAAA</Text>
        <Swiper
          style={styles.swiper}
          ref={(swiper) => {
            this.swiper = swiper
          }}
          backgroundColor={'#ffffff'}
          useViewOverflow={Platform.OS === 'ios'}
          //onSwiped={() => this.onSwiped("general")}
          onSwipedLeft={() => this.onSwiped('left')}
          onSwipedRight={() => this.onSwiped('right')}
          onSwipedTop={() => this.onSwiped('top')}
          onSwipedBottom={() => this.onSwiped('bottom')}
          marginBottom={0}
          animateOverlayLabelsOpacity
          animateCardOpacity
          swipeBackCard
          //onTapCard={this.swipeLeft}
          cards={this.state.cards}
          cardIndex={this.state.cardIndex}
          cardVerticalMargin={75}
          renderCard={this.renderCard}
          //onSwipedAll={this.onSwipedAllCards}
          stackSize={3}
          stackSeparation={1}
          //   overlayLabels={{
          //     bottom: {
          //       title: "BLEAH",
          //       style: {
          //         label: {
          //           backgroundColor: "black",
          //           borderColor: "black",
          //           color: "white",
          //           borderWidth: 1,
          //         },
          //         wrapper: {
          //           flexDirection: "column",
          //           alignItems: "center",
          //           justifyContent: "center",
          //         },
          //       },
          //     },
          //     left: {
          //       title: "NOPE",
          //       style: {
          //         label: {
          //           backgroundColor: "black",
          //           borderColor: "black",
          //           color: "white",
          //           borderWidth: 1,
          //         },
          //         wrapper: {
          //           flexDirection: "column",
          //           alignItems: "flex-end",
          //           justifyContent: "flex-start",
          //           marginTop: 30,
          //           marginLeft: -30,
          //         },
          //       },
          //     },
          //     right: {
          //       title: "LIKE",
          //       style: {
          //         label: {
          //           backgroundColor: "black",
          //           borderColor: "black",
          //           color: "white",
          //           borderWidth: 1,
          //         },
          //         wrapper: {
          //           flexDirection: "column",
          //           alignItems: "flex-start",
          //           justifyContent: "flex-start",
          //           marginTop: 30,
          //           marginLeft: 30,
          //         },
          //       },
          //     },
          //     top: {
          //       title: "SUPER LIKE",
          //       style: {
          //         label: {
          //           backgroundColor: "black",
          //           borderColor: "black",
          //           color: "white",
          //           borderWidth: 1,
          //         },
          //         wrapper: {
          //           flexDirection: "column",
          //           alignItems: "center",
          //           justifyContent: "center",
          //         },
          //       },
          //     },
          //   }}
        >
          <ToolbarAndroid
            titleColor="#FFFFFF"
            title="Kisah Chendol"
            style={styles.toolbar}
          />
          <ImageBackground style={styles.imgBackground}></ImageBackground>
        </Swiper>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    flexDirection: 'column',
  },
  card: {
    flex: 1,
    marginTop: 40,
  },
  text: {
    padding: 16,
    textAlign: 'justify',
    fontSize: 18,
    color: '#FFFFFF',
    backgroundColor: 'transparent',
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent',
  },
  linearGradient: {
    flex: 1,
    width: '100%',
    height: '100%',
    opacity: 0.95,
    justifyContent: 'space-between',
  },
  swiper: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  toolbar: {
    backgroundColor: '#09203f',
    height: 70,
    textAlign: 'center',
    alignSelf: 'stretch',
    elevation: 9,
  },
  imgBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  top: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingVertical: 16,
  },
  bottom: {
    borderTopWidth: 1,
    borderTopColor: 'white',
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
  },
})
