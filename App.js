import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
} from 'react-native';
import { useState } from 'react';


export default function App() {

  const [value, setValue] = useState("")
  const [value2, setValue2] = useState([])

  const handleButton = () => {
    setValue2([...value2, value])
    setValue("")
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        placeholder='You can add todos here'
        onChangeText={setValue}
        value={value}
      />

      <View style={styles.container2}>

        {
          value2.map((item, index) => {
            return (
              <View key={index} style={styles.listStyle}>
                <Text>{item}</Text>
              </View>
            )
          })
        }

      </View>

      <Pressable
        style={styles.buttonStyle}
        onPress={() => handleButton()}
      >
        <Text>Kaydet</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputStyle: {
    backgroundColor: "tomato",
    width: "80%",
    height: 50,
    borderRadius: 15,
    textAlign: "center",
  },

  buttonStyle: {
    width: "80%",
    height: 50,
    backgroundColor: "green",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },

  container2: {
    width: "80%",
    height: 400,
    backgroundColor: "yellow",
    marginTop: 15,
    alignItems: "center",
    padding: 20,
  },

  listStyle: {
    width: 200,
    height: 30,
    backgroundColor: "green",
    marginBottom: 5,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  }
});
