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

  state = { TextInput_4: "", TextInput_5: "", TextInput_6: "" }

  render = () => (
    <View>
      <Text>Sample text content</Text>
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <TextInput
        placeholder="Number Input Placeholder"
        value={this.state.TextInput_4}
        onChangeText={nextValue => this.setState({ TextInput_4: nextValue })}
      />
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_5}
        onChangeText={nextValue => this.setState({ TextInput_5: nextValue })}
      />
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_6}
        onChangeText={nextValue => this.setState({ TextInput_6: nextValue })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  Text_2: {},
  Button_3: {},
  TextInput_4: {},
  TextInput_5: {},
  Switch_6: { alignSelf: "flex-start" },
  CheckBox_7: {},
  Icon_8: {},
  CheckBox_9: {},
  View_1: {},
  View_1: {},
  Text_2: {},
  Button_3: {},
  TextInput_4: {},
  TextInput_5: {},
  Switch_6: { alignSelf: "flex-start" },
  CheckBox_7: {},
  CheckBox_8: {},
  Icon_9: {},
  View_1: {},
  View_1: {},
  Text_2: {},
  Button_3: {},
  TextInput_4: {},
  TextInput_5: {},
  View_1: {},
  Text_2: {},
  Button_3: {},
  TextInput_4: {},
  TextInput_5: {},
  View_1: {},
  Text_2: {},
  Button_3: {},
  TextInput_4: {},
  TextInput_5: {},
  TextInput_6: {}
})
