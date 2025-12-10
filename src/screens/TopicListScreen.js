import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import TopicCard from '../components/TopicCard';

export default function TopicListScreen({ topics, onSelectTopic }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Guia React Native</Text>
                <Text style={styles.subtitle}>
                    Conceitos essenciais explicados de forma prática.
                </Text>
            </View>

            <View style={styles.chipRow}>
                <View style={styles.chip}>
                    <Text style={styles.chipText}>📚 Teoria + código</Text>
                </View>
                <View style={styles.chip}>
                    <Text style={styles.chipText}>⚡ Comece de qualquer tema</Text>
                </View>
            </View>
            <FlatList
                data={topics}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.list}
                renderItem={({ item, index }) => (
                    <TopicCard
                        topic={item}
                        index={index}
                        total={topics.length}
                        onPress={() => onSelectTopic(item.id)}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingBottom: 24,
    },
    header: {
        marginTop: 8,
        marginBottom: 16,
    },
    title: {
        fontSize: 26,
        fontWeight: '800',
        color: '#f9fafb',
    },
    subtitle: {
        fontSize: 14,
        color: '#9ca3af',
        marginTop: 4,
    },
    chipRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 12,
        gap: 8,
    },
    chip: {
        backgroundColor: '#020617',
        borderRadius: 999,
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderWidth: 1,
        borderColor: '#1f2937',
    },
    chipText: {
        fontSize: 11,
        color: '#9ca3af',
    },
    list: {
        paddingTop: 6,
        paddingBottom: 40,
    },
});
