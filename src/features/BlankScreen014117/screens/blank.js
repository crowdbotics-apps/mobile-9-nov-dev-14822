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

  state = {
    CheckBox_7: true,
    DateTimePicker_5: new Date(""),
    CheckBox_9: true,
    CheckBox_11: true,
    TextInput_4: "",
    Switch_6: true
  }

  render = () => (
    <View>
      <CheckBox
        title="Radio button"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={this.state.CheckBox_7}
        onPress={nextChecked => this.setState({ CheckBox_7: nextChecked })}
      />
      <DateTimePicker
        showIcon={false}
        date={this.state.DateTimePicker_5}
        onDateChange={selectedDate =>
          this.setState({ DateTimePicker_5: selectedDate })
        }
      />
      <CheckBox
        title="Checkbox"
        checked={this.state.CheckBox_9}
        onPress={nextChecked => this.setState({ CheckBox_9: nextChecked })}
      />
      <Text>Sample text content</Text>
      <CheckBox
        title="Radio button"
        checked={this.state.CheckBox_11}
        onPress={nextChecked => this.setState({ CheckBox_11: nextChecked })}
      />
      <Text>Sample text content</Text>
      <TextInput
        placeholder="Sample text input placeholder"
        value={this.state.TextInput_4}
        onChangeText={nextValue => this.setState({ TextInput_4: nextValue })}
      />
      <Icon name="star" />
      <Switch
        trackColor={{ false: "#C0CCDA", true: "#409EFF" }}
        style={styles.Switch_6}
        value={this.state.Switch_6}
        onValueChange={nextChecked => this.setState({ Switch_6: nextChecked })}
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
  CheckBox_7: {},
  DateTimePicker_5: {},
  CheckBox_9: {},
  Text_10: {},
  CheckBox_11: {},
  Text_2: {},
  TextInput_4: {},
  Icon_8: {},
  Switch_6: { alignSelf: "flex-start" }
})
