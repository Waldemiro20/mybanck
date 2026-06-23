import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScreenContainer } from '../components/ScreenContainer';
import { VirtualCard } from '../components/VirtualCard';
import { QuickActionButton } from '../components/QuickActionButton';
import { balance, quickActions, user } from '../constants/mockData';
import { colors, borderRadius, fontSize, spacing, shadows } from '../constants/theme';

function formatCurrency(value: number) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export function HomeScreen() {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <ScreenContainer>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Olá, {user.firstName} </Text>
          <Text style={styles.subGreeting}>Bem-vindo de volta ao MyBanck</Text>
        </View>
        <TouchableOpacity style={styles.notificationBtn}>
          <Ionicons name="notifications-outline" size={22} color={colors.text} />
        </TouchableOpacity>
      </View>

      <View style={[styles.balanceCard, shadows.card]}>
        <View style={styles.balanceHeader}>
          <Text style={styles.balanceLabel}>Saldo disponível</Text>
          <TouchableOpacity onPress={() => setShowBalance((prev) => !prev)}>
            <Ionicons
              name={showBalance ? 'eye-outline' : 'eye-off-outline'}
              size={20}
              color={colors.textMuted}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.balanceValue}>
          {showBalance ? formatCurrency(balance.available) : 'R$ ••••••'}
        </Text>
        <View style={styles.accountInfo}>
          <Text style={styles.accountText}>
            Ag {user.agency} · Cc {user.account}
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cartão Virtual</Text>
        <VirtualCard />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ações rápidas</Text>
        <View style={styles.actionsRow}>
          {quickActions.map((action) => (
            <QuickActionButton
              key={action.id}
              label={action.label}
              icon={action.icon}
              color={action.color}
            />
          ))}
        </View>
      </View>

      <View style={[styles.promoCard, shadows.card]}>
        <View style={styles.promoIcon}>
          <Ionicons name="gift" size={24} color={colors.secondary} />
        </View>
        <View style={styles.promoContent}>
          <Text style={styles.promoTitle}>Cashback de 5%</Text>
          <Text style={styles.promoText}>
            Em compras com parceiros MyBanck este mês
          </Text>
        </View>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    marginBottom: spacing.lg,
  },
  greeting: {
    color: colors.text,
    fontSize: fontSize.xl,
    fontWeight: '800',
  },
  subGreeting: {
    color: colors.textMuted,
    fontSize: fontSize.sm,
    marginTop: 4,
  },
  notificationBtn: {
    width: 44,
    height: 44,
    borderRadius: borderRadius.md,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  balanceCard: {
    marginHorizontal: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.lg,
  },
  balanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  balanceLabel: {
    color: colors.textMuted,
    fontSize: fontSize.sm,
    fontWeight: '500',
  },
  balanceValue: {
    color: colors.text,
    fontSize: fontSize.xxl,
    fontWeight: '800',
    marginBottom: spacing.sm,
  },
  accountInfo: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: spacing.sm,
  },
  accountText: {
    color: colors.textDark,
    fontSize: fontSize.xs,
  },
  section: {
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: fontSize.md,
    fontWeight: '700',
    marginBottom: spacing.md,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  promoCard: {
    marginHorizontal: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  promoIcon: {
    width: 48,
    height: 48,
    borderRadius: borderRadius.md,
    backgroundColor: `${colors.secondary}22`,
    alignItems: 'center',
    justifyContent: 'center',
  },
  promoContent: {
    flex: 1,
  },
  promoTitle: {
    color: colors.text,
    fontSize: fontSize.md,
    fontWeight: '700',
    marginBottom: 2,
  },
  promoText: {
    color: colors.textMuted,
    fontSize: fontSize.sm,
  },
});
