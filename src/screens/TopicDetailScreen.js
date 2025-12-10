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
        paddingHorizontal: 18,
        paddingBottom: 24,
    },
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 12,
        marginBottom: 12,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 12,
        backgroundColor: '#171717',
        borderWidth: 1,
        borderColor: '#262626',
    },
    backIcon: {
        fontSize: 16,
        color: '#f5f5f5',
        marginRight: 6,
    },
    backText: {
        fontSize: 14,
        color: '#a1a1aa',
        fontWeight: '500',
    },
    progress: {
        fontSize: 14,
        color: '#71717a',
        fontWeight: '500',
    },
    scrollContent: {
        paddingTop: 10,
        paddingBottom: 100,
    },
    badge: {
        fontSize: 13,
        textTransform: 'uppercase',
        letterSpacing: 2,
        color: '#facc15',
        fontWeight: '700',
        marginBottom: 6,
    },
    title: {
        fontSize: 28,
        fontWeight: '900',
        color: '#ffffff',
        marginBottom: 12,
    },
    description: {
        fontSize: 16,
        color: '#d4d4d4',
        lineHeight: 24,
        marginBottom: 25,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#facc15',
        marginBottom: 10,
        marginTop: 15,
    },
    tip: {
        fontSize: 15,
        color: '#a1a1aa',
        lineHeight: 22,
        marginBottom: 10,
    },
    bottomNav: {
        position: 'absolute',
        left: 18,
        right: 18,
        bottom: 18,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(10, 10, 10, 0.9)',
        borderRadius: 16,
        padding: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 10,
        backdropFilter: 'blur(10px)',
    },
    navButton: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: 12,
        backgroundColor: '#262626',
        marginHorizontal: 4,
        alignItems: 'center',
    },
    navButtonDisabled: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#3f3f46',
    },
    navButtonText: {
        fontSize: 15,
        color: '#ffffff',
        fontWeight: '600',
    },
    navButtonTextDisabled: {
        color: '#52525b',
    },
});
