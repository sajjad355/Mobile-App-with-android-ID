import React from 'react';
import { ScrollView, Alert, TextInput, ImageBackground, TouchableOpacity, BackHandler, Dimensions, StyleSheet, Text, View, Image, StatusBar, ActivityIndicator } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { getUniqueId, getManufacturer, getAndroidId } from 'react-native-device-info';
import Clipboard from '@react-native-clipboard/clipboard';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: '···',
        username: '···'
      },
      androidId: '',
    };

  }

  componentDidMount = async () => {
    DeviceInfo.getAndroidId().then((androidId) => {
      console.log(androidId)
      this.setState({
        androidId: androidId
      })
    });

  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 10, marginRight: 10, marginTop: -10, paddingTop: 5, paddingBottom: 5, backgroundColor: '#43a047', paddingLeft: 10 }}>
            FAREAST PR
          </Text>
          <Text style={{ color: 'black', textAlign: 'center', marginTop: 30, fontSize:15 }}>
            - ANDROID ID -
          </Text>
          {/* <Text style={{ color: 'black', fontWeight: 'bold', textAlign: 'center' }}>
            {this.state.androidId}
          </Text> */}

          <TextInput
            autoCorrect={false}
            editable={false}
            autoCapitalize='none'
            value={this.state.androidId}
            textColor="black"
            keyboardType='text'
            placeholder="Re-type new Password"
            style={[styles.inputs, { textAlign: 'center' }]}
            underlineColorAndroid='transparent'
            placeholderTextColor="#e0e0e0"
            fontFamily={"Quicksand-Medium"}
          />

          <TouchableOpacity onPress={() => Clipboard.setString(this.state.androidId)}>
            <View style={{ flexDirection: 'row', alignSelf: 'center', backgroundColor: '#43a047', width: 150, marginTop: 30 }}>
              <Text style={{ color: 'white', paddingLeft: 18, marginTop: 7, paddingBottom: 8 }}>
                Copy to Clipboard
                {/* <Icon name='content-copy' color='#000' size={60 * 1.3}></Icon> */}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 30,
    paddingBottom: 50,
    backgroundColor: 'white',
    borderRadius: 10
  },
  inputs: {
    borderWidth: 2,
    borderRadius: 8,
    padding: 12.5,
    height: 50,
    borderColor: '#43a047',
    marginBottom: 10,
    color: '#000',
    fontFamily: 'Quicksand-Medium',
    fontSize: 20,
    marginTop:10,
    marginLeft:10,
    marginRight:10
  },
});