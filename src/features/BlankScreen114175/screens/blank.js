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

  state = { TextInput_3: "", TextInput_2: "" }

  render = () => (
    <View>
      <TextInput
        placeholder="Number Input Placeholder"
        style={styles.TextInput_3}
        value={this.state.TextInput_3}
        onChangeText={nextValue => this.setState({ TextInput_3: nextValue })}
      />
      <Button
        title="Press me!"
        style={styles.Button_5}
        onPress={() => alert("Pressed!")}
      />
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_2}
        onChangeText={nextValue => this.setState({ TextInput_2: nextValue })}
      />
      <Text style={styles.Text_4}>
        Sample text content fgsvrfvc rtfgfvcx gtrefc fdvsc vfdcx rfvdcx fdc
        rgvfcx tbgvf jmukjnhfgbfv fgbvc etgbfvdc trgfvdcsx
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  TextInput_2: {},
  TextInput_3: { height: 100, alignSelf: "center" },
  Text_4: { alignSelf: "center" },
  Button_5: { fontSize: 16, fontFamily: "RobotoMono-BoldItalic" },
  View_1: {},
  TextInput_3: { height: 100, alignSelf: "center" },
  Button_5: { fontSize: 16, fontFamily: "RobotoMono-BoldItalic" },
  TextInput_2: {},
  Text_4: { alignSelf: "center" }
})
