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
        borderColor: '#1f2937',
        backgroundColor: '#020617',
        marginBottom: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#111827',
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 999,
        backgroundColor: '#4b5563',
        marginRight: 4,
    },
    headerText: {
        marginLeft: 8,
        fontSize: 11,
        color: '#6b7280',
    },
    body: {
        paddingHorizontal: 12,
        paddingVertical: 10,
    },
    code: {
        fontSize: 13,
        lineHeight: 19,
        color: '#e5e7eb',
        fontFamily: Platform.select({
            ios: 'Menlo',
            android: 'monospace',
            default: 'monospace',
        }),
    },
});
