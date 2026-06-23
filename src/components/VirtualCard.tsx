import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, borderRadius, fontSize, spacing, shadows } from '../constants/theme';
import { user } from '../constants/mockData';

export function VirtualCard() {
  return (
    <LinearGradient
      colors={[colors.primary, colors.primaryDark, '#3D2FA0']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.card, shadows.card]}
    >
      <View style={styles.header}>
        <Text style={styles.brand}>MyBanck</Text>
        <View style={styles.chip}>
          <View style={styles.chipLine} />
          <View style={styles.chipLine} />
        </View>
      </View>

      <View style={styles.numberRow}>
        <Text style={styles.number}>•••• •••• •••• 4829</Text>
      </View>

      <View style={styles.footer}>
        <View>
          <Text style={styles.label}>TITULAR</Text>
          <Text style={styles.value}>{user.name.toUpperCase()}</Text>
        </View>
        <View>
          <Text style={styles.label}>VALIDADE</Text>
          <Text style={styles.value}>12/28</Text>
        </View>
      </View>

      <View style={styles.circle1} />
      <View style={styles.circle2} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    minHeight: 190,
    overflow: 'hidden',
    position: 'relative',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brand: {
    color: colors.white,
    fontSize: fontSize.lg,
    fontWeight: '800',
    letterSpacing: 1,
  },
  chip: {
    width: 40,
    height: 30,
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: 6,
    padding: 6,
    justifyContent: 'space-between',
  },
  chipLine: {
    height: 3,
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: 2,
  },
  numberRow: {
    marginTop: spacing.xl,
  },
  number: {
    color: colors.white,
    fontSize: fontSize.lg,
    letterSpacing: 3,
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.lg,
  },
  label: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: fontSize.xs,
    letterSpacing: 1,
    marginBottom: 4,
  },
  value: {
    color: colors.white,
    fontSize: fontSize.sm,
    fontWeight: '600',
  },
  circle1: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255,255,255,0.06)',
    top: -30,
    right: -20,
  },
  circle2: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255,255,255,0.04)',
    bottom: -20,
    left: 40,
  },
});
