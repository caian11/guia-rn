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
        paddingHorizontal: 18,
        paddingBottom: 24,
    },
    header: {
        marginTop: 16,
        marginBottom: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: '900',
        color: '#ffffff',
    },
    subtitle: {
        fontSize: 15,
        color: '#a1a1aa',
    },
    chipRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 16,
        gap: 8,
    },
    chip: {
        backgroundColor: '#171717',
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 7,
        borderWidth: 0,
    },
    chipText: {
        fontSize: 12,
        color: '#d4d4d4',
        fontWeight: '500',
    },
    list: {
        paddingTop: 10,
        paddingBottom: 40,
    },
});
