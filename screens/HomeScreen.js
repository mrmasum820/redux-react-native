import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, selectCount } from '../store/counterSlice';
import { selectTheme, toggleTheme } from '../store/themeSlice';

export default function HomeScreen() {
    const dispatch = useDispatch();
    const count = (useSelector(selectCount));
    const mode = (useSelector(selectTheme));

    const bgColor = mode === 'light' ? '#fff' : '#000';
    const textColor = mode === 'light' ? '#000' : '#fff';

    return (
        <View style={[styles.container, { backgroundColor: bgColor }]}>
            <Text style={{ color: textColor }}>Count: {count}</Text>
            <TouchableOpacity onPress={() => dispatch(increment())}>
                <Text style={{ color: textColor }}>increment</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => dispatch(decrement())}>
                <Text style={{ color: textColor }}>decrement</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => dispatch(toggleTheme('dark'))}>
                <Text style={{ color: textColor }}>make theme dark</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => dispatch(toggleTheme('light'))}>
                <Text style={{ color: textColor }}>make theme light</Text>
            </TouchableOpacity>

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