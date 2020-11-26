import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <View>
      <Icon
        iconFont="FontAwesome Icons"
        name="arrow-up"
        style={styles.Icon_3}
      />
      <Icon name="arrow-down" style={styles.Icon_5} />
      <Icon name="arrow-right" style={styles.Icon_7} />
      <Icon name="arrow-left" style={styles.Icon_9} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },
  View_1: {},
  Icon_3: {
    marginTop: 202,
    marginBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    alignSelf: "center",
    fontSize: 20,
    textAlign: "left",
    textAlignVertical: "center",
    textDecorationLine: "none",
    textTransform: "none",
    lineHeight: 12,
    letterSpacing: 0
  },
  Icon_5: { marginTop: 32, alignSelf: "center" },
  Icon_7: { marginRight: 107, marginTop: -67, alignSelf: "flex-end" },
  Icon_9: { marginLeft: 108, marginTop: -35 }
})
