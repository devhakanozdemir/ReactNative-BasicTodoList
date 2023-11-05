import { useState } from 'react'

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Pressable,
} from 'react-native'

const TodoTextInput = (props) => {

    const [value, setValue] = useState("")



    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.inputStyle}
                placeholder='You can add todos here'
                onChangeText={setValue}
                value={value}
            />

            <Pressable
                style={styles.buttonStyle}
                onPress={() => { props.onTaskHandler(value), setValue("") }}
            >
                <Text style={{ color: "white", fontWeight: "bold" }}>Kaydet</Text>
            </Pressable>
        </View>
    )
}

export default TodoTextInput

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        alignItems: "center"
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


})