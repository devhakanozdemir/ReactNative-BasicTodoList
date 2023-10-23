import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TodoTextInput = () => {
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
                onPress={() => handleButton()}
            >
                <Text style={{ color: "white", fontWeight: "bold" }}>Kaydet</Text>
            </Pressable>
        </View>
    )
}

export default TodoTextInput

const styles = StyleSheet.create({})