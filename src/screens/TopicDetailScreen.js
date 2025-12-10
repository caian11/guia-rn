import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import CodeBlock from '../components/CodeBlock';

export default function TopicDetailScreen({topic, index, total, onBack, onNext, onPrev,}) {
    const disablePrev = index === 0;
    const disableNext = index === total - 1;

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={onBack}
                    activeOpacity={0.8}
                >
                    <Text style={styles.backIcon}>←</Text>
                    <Text style={styles.backText}>Tópicos</Text>
                </TouchableOpacity>

                <Text style={styles.progress}>
                    {index + 1} de {total}
                </Text>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                <Text style={styles.badge}>{topic.badge}</Text>
                <Text style={styles.title}>{topic.title}</Text>

                <Text style={styles.description}>{topic.content}</Text>

                <Text style={styles.sectionTitle}>Exemplo de código</Text>
                <CodeBlock code={topic.code} />

                <Text style={styles.sectionTitle}>Como praticar</Text>
                <Text style={styles.tip}>
                    1. Copie o código para um novo projeto ou arquivo.{'\n'}
                    2. Altere textos, estilos e valores de estado.{'\n'}
                    3. Quebre o código em componentes menores.{'\n'}
                    4. Adicione console.log em pontos diferentes para ver o fluxo.
                </Text>
            </ScrollView>

            <View style={styles.bottomNav}>
                <TouchableOpacity
                    style={[styles.navButton, disablePrev && styles.navButtonDisabled]}
                    onPress={onPrev}
                    disabled={disablePrev}
                    activeOpacity={0.8}
                >
                    <Text
                        style={[
                            styles.navButtonText,
                            disablePrev && styles.navButtonTextDisabled,
                        ]}
                    >
                        ← Anterior
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.navButton, disableNext && styles.navButtonDisabled]}
                    onPress={onNext}
                    disabled={disableNext}
                    activeOpacity={0.8}
                >
                    <Text
                        style={[
                            styles.navButtonText,
                            disableNext && styles.navButtonTextDisabled,
                        ]}
                    >
                        Próximo →
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 8,
        marginBottom: 8,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 999,
        backgroundColor: '#020617',
        borderWidth: 1,
        borderColor: '#1f2937',
    },
    backIcon: {
        fontSize: 14,
        color: '#e5e7eb',
        marginRight: 4,
    },
    backText: {
        fontSize: 13,
        color: '#9ca3af',
    },
    progress: {
        fontSize: 12,
        color: '#6b7280',
    },
    scrollContent: {
        paddingTop: 6,
        paddingBottom: 80,
    },
    badge: {
        fontSize: 12,
        textTransform: 'uppercase',
        letterSpacing: 1,
        color: '#fbbf24',
        marginBottom: 4,
    },
    title: {
        fontSize: 22,
        fontWeight: '800',
        color: '#f9fafb',
        marginBottom: 8,
    },
    description: {
        fontSize: 15,
        color: '#d1d5db',
        lineHeight: 22,
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fbbf24',
        marginBottom: 8,
        marginTop: 4,
    },
    tip: {
        fontSize: 14,
        color: '#9ca3af',
        lineHeight: 20,
        marginBottom: 8,
    },
    bottomNav: {
        position: 'absolute',
        left: 16,
        right: 16,
        bottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    navButton: {
        flex: 1,
        paddingVertical: 10,
        borderRadius: 999,
        backgroundColor: '#111827',
        marginHorizontal: 4,
        alignItems: 'center',
    },
    navButtonDisabled: {
        backgroundColor: '#020617',
        borderWidth: 1,
        borderColor: '#1f2937',
    },
    navButtonText: {
        fontSize: 14,
        color: '#e5e7eb',
        fontWeight: '500',
    },
    navButtonTextDisabled: {
        color: '#6b7280',
    },
});
