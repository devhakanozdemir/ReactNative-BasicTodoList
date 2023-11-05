import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import { useState } from 'react';
import TodoTextInput from './components/TodoTextInput';
import TodoTask from './components/TodoTask';


export default function App() {

  const [value2, setValue2] = useState([])


  const handleButton = (inputTextData) => {
    setValue2([...value2, { text: inputTextData, id: Math.random().toString() }])
  }

  return (
    <View style={styles.container}>

      <TodoTextInput onTaskHandler={handleButton} />

      <View style={styles.container2}>
        <FlatList showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          data={value2}
          keyExtractor={(item, index) => item.id}
          renderItem={(itemText) => {
            return (
              <TodoTask onAddTask={itemText.item.text} />
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

  container2: {
    width: "80%",
    height: 400,
    backgroundColor: "yellow",
    marginTop: 15,
    alignItems: "center",
    padding: 20,
  },
});
