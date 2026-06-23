import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button } from '../components/Button';
import { brand } from '../constants/mockData';
import { colors, fontSize, spacing } from '../constants/theme';
import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

export function WelcomeScreen({ navigation }: Props) {
  return (
    <LinearGradient
      colors={[colors.background, '#1A1040', colors.primaryDark]}
      style={styles.container}
    >
      <StatusBar style="light" />

      <View style={styles.content}>
        <View style={styles.logoWrapper}>
          <LinearGradient
            colors={[colors.primary, colors.secondary]}
            style={styles.logoCircle}
          >
            <Text style={styles.logoLetter}>M</Text>
          </LinearGradient>
        </View>

        <Text style={styles.brandName}>{brand.name}</Text>
        <Text style={styles.slogan}>{brand.slogan}</Text>
        <Text style={styles.tagline}>{brand.tagline}</Text>

        <View style={styles.features}>
          {['Seguro', 'Moderno', 'Gratuito'].map((item) => (
            <View key={item} style={styles.featureBadge}>
              <Text style={styles.featureText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.footer}>
        <Button
          title="Acessar o aplicativo"
          onPress={() => navigation.replace('Main')}
        />
        <Text style={styles.footerText}>Seus dados estão protegidos 🔒</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoWrapper: {
    marginBottom: spacing.lg,
  },
  logoCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoLetter: {
    color: colors.white,
    fontSize: 48,
    fontWeight: '900',
  },
  brandName: {
    color: colors.white,
    fontSize: fontSize.hero,
    fontWeight: '900',
    letterSpacing: 1,
    marginBottom: spacing.sm,
  },
  slogan: {
    color: colors.text,
    fontSize: fontSize.lg,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  tagline: {
    color: colors.textMuted,
    fontSize: fontSize.sm,
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: spacing.lg,
  },
  features: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginTop: spacing.xl,
  },
  featureBadge: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
  },
  featureText: {
    color: colors.secondary,
    fontSize: fontSize.sm,
    fontWeight: '600',
  },
  footer: {
    gap: spacing.md,
  },
  footerText: {
    color: colors.textMuted,
    fontSize: fontSize.sm,
    textAlign: 'center',
  },
});
