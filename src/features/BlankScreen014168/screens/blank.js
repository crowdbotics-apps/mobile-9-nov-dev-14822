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

  state = { CheckBox_3: true, CheckBox_5: true }

  render = () => (
    <View>
      <Text>Sample text content</Text>
      <CheckBox
        title="Checkbox"
        checked={this.state.CheckBox_3}
        onPress={nextChecked => this.setState({ CheckBox_3: nextChecked })}
      />
      <Icon name="star" />
      <CheckBox
        title="Radio button"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={this.state.CheckBox_5}
        onPress={nextChecked => this.setState({ CheckBox_5: nextChecked })}
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
  View_2: { flexDirection: "row" },
  View_3: { width: 100, height: 100 },
  View_4: {},
  View_8: {},
  View_9: {},
  View_10: {},
  View_11: { width: 100, height: 100 },
  View_5: {},
  View_6: {},
  View_7: {},
  View_1: {},
  View_2: { flexDirection: "row" },
  View_3: { width: "100%", height: "100%" },
  Text_13: {},
  TextInput_17: {},
  Button_15: {},
  Switch_31: { alignSelf: "flex-start" },
  View_4: {},
  View_8: {},
  View_9: {},
  View_10: {},
  View_11: { width: 100, height: 100 },
  View_5: {},
  View_6: {},
  View_7: {},
  View_1: {},
  View_1: {},
  Text_2: {},
  CheckBox_3: {},
  Icon_4: {},
  CheckBox_5: {}
})
