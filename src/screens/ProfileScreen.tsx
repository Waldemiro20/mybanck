import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { ScreenContainer } from '../components/ScreenContainer';
import { ProfileMenuItem } from '../components/ProfileMenuItem';
import { profileSettings, user } from '../constants/mockData';
import { colors, borderRadius, fontSize, spacing, shadows } from '../constants/theme';

export function ProfileScreen() {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.getParent()?.reset({
      index: 0,
      routes: [{ name: 'Welcome' }],
    });
  };

  return (
    <ScreenContainer>
      <View style={styles.header}>
        <LinearGradient
          colors={[colors.primary, colors.primaryDark]}
          style={[styles.avatarWrapper, shadows.card]}
        >
          <Text style={styles.avatarText}>{user.avatar}</Text>
        </LinearGradient>

        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>

        <View style={styles.accountBadge}>
          <Text style={styles.accountBadgeText}>{user.accountType}</Text>
        </View>
      </View>

      <View style={[styles.menuCard, shadows.card]}>
        <Text style={styles.menuTitle}>Configurações</Text>
        {profileSettings.map((item, index) => (
          <View key={item.id}>
            <ProfileMenuItem
              label={item.label}
              icon={item.icon}
              danger={item.danger}
              onPress={item.label === 'Sair' ? handleLogout : undefined}
            />
            {index < profileSettings.length - 1 && <View style={styles.divider} />}
          </View>
        ))}
      </View>

      <Text style={styles.version}>MyBanck v1.0.0</Text>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.lg,
  },
  avatarWrapper: {
    width: 88,
    height: 88,
    borderRadius: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  avatarText: {
    color: colors.white,
    fontSize: fontSize.xxl,
    fontWeight: '800',
  },
  name: {
    color: colors.text,
    fontSize: fontSize.xl,
    fontWeight: '800',
    marginBottom: 4,
  },
  email: {
    color: colors.textMuted,
    fontSize: fontSize.sm,
    marginBottom: spacing.md,
  },
  accountBadge: {
    backgroundColor: `${colors.secondary}22`,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.full,
  },
  accountBadgeText: {
    color: colors.secondary,
    fontSize: fontSize.sm,
    fontWeight: '600',
  },
  menuCard: {
    marginHorizontal: spacing.lg,
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
  },
  menuTitle: {
    color: colors.textMuted,
    fontSize: fontSize.xs,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginHorizontal: spacing.md,
  },
  version: {
    color: colors.textDark,
    fontSize: fontSize.xs,
    textAlign: 'center',
    marginTop: spacing.lg,
  },
});
