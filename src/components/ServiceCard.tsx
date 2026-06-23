import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, borderRadius, fontSize, spacing, shadows } from '../constants/theme';

type IconName = React.ComponentProps<typeof Ionicons>['name'];

type Props = {
  name: string;
  description: string;
  icon: IconName;
  color: string;
  onPress?: () => void;
};

export function ServiceCard({ name, description, icon, color, onPress }: Props) {
  return (
    <TouchableOpacity style={[styles.card, shadows.card]} onPress={onPress} activeOpacity={0.8}>
      <View style={[styles.iconWrapper, { backgroundColor: `${color}22` }]}>
        <Ionicons name={icon} size={26} color={color} />
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <Ionicons name="chevron-forward" size={18} color={colors.textDark} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  iconWrapper: {
    width: 52,
    height: 52,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
  },
  name: {
    color: colors.text,
    fontSize: fontSize.md,
    fontWeight: '700',
    marginBottom: 4,
  },
  description: {
    color: colors.textMuted,
    fontSize: fontSize.sm,
    lineHeight: 20,
  },
});
