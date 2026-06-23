import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScreenContainer } from '../components/ScreenContainer';
import { SectionTitle } from '../components/SectionTitle';
import { ServiceCard } from '../components/ServiceCard';
import { services } from '../constants/mockData';
import { spacing } from '../constants/theme';

export function ServicesScreen() {
  return (
    <ScreenContainer>
      <View style={styles.header}>
        <SectionTitle
          title="Serviços"
          subtitle="Tudo o que você precisa para gerenciar suas finanças"
        />
      </View>

      <View style={styles.list}>
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            name={service.name}
            description={service.description}
            icon={service.icon}
            color={service.color}
          />
        ))}
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
  },
  list: {
    paddingHorizontal: spacing.lg,
  },
});
