import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TodoTask = (props) => {
    return (
        <View style={styles.listStyle}>
            <Text style={{ color: "white" }}>{props.onAddTask}</Text>
        </View>
    )
}

export default TodoTask

const styles = StyleSheet.create({
    listStyle: {
        width: 200,
        height: 30,
        backgroundColor: "green",
        marginBottom: 5,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
    },
})