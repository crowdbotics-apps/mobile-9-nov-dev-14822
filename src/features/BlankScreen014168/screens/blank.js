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

  state = { TextInput_17: "", Switch_31: true }

  render = () => (
    <View>
      <View style={styles.View_2}>
        <View style={styles.View_3}>
          <Text>Sample text content</Text>
          <TextInput
            placeholder="Sample text input placeholder"
            value={this.state.TextInput_17}
            onChangeText={nextValue =>
              this.setState({ TextInput_17: nextValue })
            }
          />
          <Button title="Press me!" onPress={() => alert("Pressed!")} />
          <Switch
            style={styles.Switch_31}
            value={this.state.Switch_31}
            onValueChange={nextChecked =>
              this.setState({ Switch_31: nextChecked })
            }
          />
        </View>
        <View />
        <View />
        <View />
        <View />
        <View style={styles.View_11} />
      </View>
      <View>
        <View />
        <View />
      </View>
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
  View_7: {}
})
