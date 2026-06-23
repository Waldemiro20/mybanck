import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScreenContainer } from '../components/ScreenContainer';
import { SectionTitle } from '../components/SectionTitle';
import { brand, company } from '../constants/mockData';
import { colors, borderRadius, fontSize, spacing, shadows } from '../constants/theme';

function InfoBlock({ title, content }: { title: string; content: string }) {
  return (
    <View style={[styles.block, shadows.card]}>
      <Text style={styles.blockTitle}>{title}</Text>
      <Text style={styles.blockContent}>{content}</Text>
    </View>
  );
}

export function AboutScreen() {
  return (
    <ScreenContainer>
      <View style={styles.header}>
        <SectionTitle
          title="Sobre a Empresa"
          subtitle={`Conheça a história e os valores do ${brand.name}`}
        />
      </View>

      <View style={[styles.heroCard, shadows.card]}>
        <View style={styles.heroIcon}>
          <Ionicons name="business" size={32} color={colors.primary} />
        </View>
        <Text style={styles.heroTitle}>{brand.name}</Text>
        <Text style={styles.heroSubtitle}>{brand.slogan}</Text>
      </View>

      <View style={styles.content}>
        <InfoBlock title="História" content={company.history} />
        <InfoBlock title="Missão" content={company.mission} />
        <InfoBlock title="Visão" content={company.vision} />

        <View style={[styles.block, shadows.card]}>
          <Text style={styles.blockTitle}>Valores</Text>
          <View style={styles.tagsRow}>
            {company.values.map((value) => (
              <View key={value} style={styles.tag}>
                <Text style={styles.tagText}>{value}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={[styles.block, shadows.card]}>
          <Text style={styles.blockTitle}>Diferenciais</Text>
          {company.differentiators.map((item) => (
            <View key={item} style={styles.diffItem}>
              <Ionicons name="checkmark-circle" size={18} color={colors.accent} />
              <Text style={styles.diffText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
  },
  heroCard: {
    marginHorizontal: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    alignItems: 'center',
    marginBottom: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },
  heroIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: `${colors.primary}22`,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  heroTitle: {
    color: colors.text,
    fontSize: fontSize.xl,
    fontWeight: '800',
    marginBottom: 4,
  },
  heroSubtitle: {
    color: colors.textMuted,
    fontSize: fontSize.sm,
    textAlign: 'center',
  },
  content: {
    paddingHorizontal: spacing.lg,
    gap: spacing.sm,
  },
  block: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  blockTitle: {
    color: colors.primary,
    fontSize: fontSize.sm,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: spacing.sm,
  },
  blockContent: {
    color: colors.textMuted,
    fontSize: fontSize.sm,
    lineHeight: 22,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  tag: {
    backgroundColor: `${colors.primary}22`,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.full,
  },
  tagText: {
    color: colors.primary,
    fontSize: fontSize.sm,
    fontWeight: '600',
  },
  diffItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginBottom: spacing.sm,
  },
  diffText: {
    color: colors.textMuted,
    fontSize: fontSize.sm,
    flex: 1,
  },
});
