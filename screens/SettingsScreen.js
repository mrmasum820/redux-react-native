import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectCount } from '../store/counterSlice';
import { selectTheme } from '../store/themeSlice';

export default function SettingsScreen() {
    const count = (useSelector(selectCount));
    const mode = (useSelector(selectTheme));

    const bgColor = mode === 'light' ? '#fff' : '#000';
    const textColor = mode === 'light' ? '#000' : '#fff';

    return (
        <View style={[styles.container, { backgroundColor: bgColor }]}>
            <Text style={{ color: textColor }}>SettingsScreen</Text>
            <Text style={{ color: textColor }}>Count: {count}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});