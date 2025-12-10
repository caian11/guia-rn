import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TopicCard({ topic, index, total, onPress }) {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={styles.card}
        >
            <View style={styles.cardHeader}>
                <Text style={styles.badge}>{topic.badge}</Text>
                <Text style={styles.progress}>
                    {index + 1}/{total}
                </Text>
            </View>

            <Text style={styles.title}>{topic.title}</Text>
            <Text style={styles.summary}>{topic.summary}</Text>

            <View style={styles.footer}>
                <Text style={styles.level}>{topic.level}</Text>
                <Text style={styles.cta}>Ver lição →</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#020617',
        borderRadius: 18,
        padding: 16,
        marginBottom: 14,
        borderWidth: 1,
        borderColor: '#1f2937',
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    badge: {
        fontSize: 11,
        textTransform: 'uppercase',
        letterSpacing: 1,
        color: '#fbbf24',
    },
    progress: {
        fontSize: 12,
        color: '#6b7280',
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: '#e5e7eb',
        marginBottom: 6,
    },
    summary: {
        fontSize: 14,
        color: '#9ca3af',
        marginBottom: 14,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    level: {
        fontSize: 12,
        color: '#4ade80',
        textTransform: 'capitalize',
    },
    cta: {
        fontSize: 13,
        color: '#60a5fa',
        fontWeight: '500',
    },
});
