import React from 'react';
import { StyleSheet, Text, Image, View, ScrollView, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

const listBackgroundColors = {
  1: '#E68B02',
  2: '#429909',
  3: '#6414AF',
  4: '#E8B4D8',
  5: '#B20728',
  6: '#21937A',
  7: '#96EF86',
  8: '#AD5006',
  9: '#E0E41F',
  10: '#40414F',
};

const soundList = {
  1: require('./assets/one.wav'),
  2: require('./assets/two.wav'),
  3: require('./assets/three.wav'),
  4: require('./assets/four.wav'),
  5: require('./assets/five.wav'),
  6: require('./assets/six.wav'),
  7: require('./assets/seven.wav'),
  8: require('./assets/eight.wav'),
  9: require('./assets/nine.wav'),
  10: require('./assets/ten.wav')
};

export default class App extends React.Component {
  playSound = async number => {
    const soundObject = new Audio.Sound();
    try {
      let path = soundList[number];
      await soundObject.loadAsync(path);
      await soundObject.playAsync()
      .then(async playbackStatus => {
        setTimeout(() => {
          soundObject.unloadAsync();
        }, playbackStatus.playableDurationMillis);
      })
      .catch(error => {
        console.log(error)
      })
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return(
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('./assets/logo.png')}
        ></Image>
        <ScrollView style={styles.gridContainer}>
          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[
                {backgroundColor: listBackgroundColors[1]},
                styles.item
              ]}
              onPress={() => {this.playSound(1)}}
            >
              <Text style={styles.itemText}>One</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                {backgroundColor: listBackgroundColors[2]},
                styles.item
              ]}
              onPress={() => {this.playSound(2)}}
            >
              <Text style={styles.itemText}>Two</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[
                {backgroundColor: listBackgroundColors[3]},
                styles.item
              ]}
              onPress={() => {this.playSound(3)}}
            >
              <Text style={styles.itemText}>Three</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                {backgroundColor: listBackgroundColors[4]},
                styles.item
              ]}
              onPress={() => {this.playSound(4)}}
            >
              <Text style={styles.itemText}>Four</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[
                {backgroundColor: listBackgroundColors[5]},
                styles.item
              ]}
              onPress={() => {this.playSound(5)}}
            >
              <Text style={styles.itemText}>Five</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                {backgroundColor: listBackgroundColors[6]},
                styles.item
              ]}
              onPress={() => {this.playSound(6)}}
            >
              <Text style={styles.itemText}>Six</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[
                {backgroundColor: listBackgroundColors[7]},
                styles.item
              ]}
              onPress={() => {this.playSound(7)}}
            >
              <Text style={styles.itemText}>Seven</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                {backgroundColor: listBackgroundColors[8]},
                styles.item
              ]}
              onPress={() => {this.playSound(8)}}
            >
              <Text style={styles.itemText}>Eight</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[
                {backgroundColor: listBackgroundColors[9]},
                styles.item
              ]}
              onPress={() => {this.playSound(9)}}
            >
              <Text style={styles.itemText}>Nine</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                {backgroundColor: listBackgroundColors[10]},
                styles.item
              ]}
              onPress={() => {this.playSound(10)}}
            >
              <Text style={styles.itemText}>Ten</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  gridContainer: {
    flex: 1,
    marginHorizontal: 5
  },
  logo: {
    alignSelf: 'center',
    marginTop: 50
  },
  rowContainer: {
    flexDirection: 'row'
  },
  item: {
    flex: 1,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2
  },
  itemText: {
    color: '#fff',
    fontSize: 20,
    alignContent: 'center'
  }
});
