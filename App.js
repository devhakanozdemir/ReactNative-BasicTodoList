import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import { useState } from 'react';
import TodoTextInput from './components/TodoTextInput';


export default function App() {

  const [value, setValue] = useState("")
  const [value2, setValue2] = useState([])

  const handleButton = () => {
    setValue2([...value2, { text: value, id: Math.random().toString() }])
    setValue("")
  }

  return (
    <View style={styles.container}>

      <View style={styles.container2}>
        <FlatList showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          data={value2}
          keyExtractor={(item, index) => item.id}
          renderItem={(itemText) => {
            return (
              <View style={styles.listStyle}>
                <Text style={{ color: "white" }}>{itemText.item.text}</Text>
              </View>
            )
          }}

        />

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputStyle: {
    backgroundColor: "white",
    width: "80%",
    height: 50,
    borderRadius: 15,
    textAlign: "center",
  },

  buttonStyle: {
    width: "80%",
    height: 50,
    backgroundColor: "gray",
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
  },

  inputContainer: {
    width: "100%",
    alignItems: "center"
  }
});
