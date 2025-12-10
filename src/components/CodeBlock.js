import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

export default function CodeBlock({ code }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.dot} />
                <View style={styles.dot} />
                <View style={styles.dot} />
                <Text style={styles.headerText}>Exemplo.js</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.code}>{code}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 16,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#262626',
        backgroundColor: '#0f0f0f',
        marginBottom: 25,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#171717',
    },
    dot: {
        width: 9,
        height: 9,
        borderRadius: 999,
        backgroundColor: '#4ade80',
        marginRight: 6,
    },
    headerText: {
        marginLeft: 12,
        fontSize: 12,
        color: '#71717a',
        fontWeight: '500',
    },
    body: {
        paddingHorizontal: 16,
        paddingVertical: 14,
    },
    code: {
        fontSize: 14,
        lineHeight: 22,
        color: '#e5e7eb',
        fontFamily: Platform.select({
            ios: 'Menlo',
            android: 'monospace',
            default: 'monospace',
        }),
    },
});
