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
        backgroundColor: '#171717',
        borderRadius: 20,
        padding: 20,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#262626',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    badge: {
        fontSize: 12,
        textTransform: 'uppercase',
        letterSpacing: 1.5,
        color: '#facc15',
        fontWeight: '700',
    },
    progress: {
        fontSize: 13,
        color: '#71717a',
    },
    title: {
        fontSize: 20,
        fontWeight: '800',
        color: '#ffffff',
        marginBottom: 8,
    },
    summary: {
        fontSize: 15,
        color: '#a1a1aa',
        marginBottom: 16,
        lineHeight: 22,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 8,
        borderTopWidth: 0.5,
        borderTopColor: '#262626',
    },
    level: {
        fontSize: 13,
        color: '#4ade80',
        fontWeight: '600',
        textTransform: 'uppercase',
    },
    cta: {
        fontSize: 14,
        color: '#60a5fa',
        fontWeight: '600',
    },
});
