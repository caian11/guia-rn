import React, { useState, useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import { TOPICS } from './src/data/topics';
import TopicListScreen from './src/screens/TopicListScreen';
import TopicDetailScreen from './src/screens/TopicDetailScreen';

export default function App() {
    const [currentTopicId, setCurrentTopicId] = useState(null);

    const currentTopicIndex = useMemo(
        () => TOPICS.findIndex((t) => t.id === currentTopicId),
        [currentTopicId]
    );

    const currentTopic =
        currentTopicIndex >= 0 ? TOPICS[currentTopicIndex] : null;

    const totalTopics = TOPICS.length;

    function handleOpenTopic(id) {
        setCurrentTopicId(id);
    }

    function handleBack() {
        setCurrentTopicId(null);
    }

    function handleNext() {
        if (currentTopicIndex < totalTopics - 1) {
            setCurrentTopicId(TOPICS[currentTopicIndex + 1].id);
        }
    }

    function handlePrev() {
        if (currentTopicIndex > 0) {
            setCurrentTopicId(TOPICS[currentTopicIndex - 1].id);
        }
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar style="light" />
            {currentTopic ? (
                <TopicDetailScreen
                    topic={currentTopic}
                    index={currentTopicIndex}
                    total={totalTopics}
                    onBack={handleBack}
                    onNext={handleNext}
                    onPrev={handlePrev}
                />
            ) : (
                <TopicListScreen
                    topics={TOPICS}
                    onSelectTopic={handleOpenTopic}
                />
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#030712',
    },
});
