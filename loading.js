import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export default function Loading() {
    return <View style={styles.container}>
        <Text style={styles.text}>오늘 날씨 어때요?</Text>
        <Text style={styles.text}>우산은 챙기셨나요?</Text>
        </View>
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#FFC0E4"
    },
    text: {
        color: "#4c4c4c",
        fontSize: 20
    }
    
  });
  