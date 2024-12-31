import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function PaymentScreen({ navigation, route }) {
  const { value, userData } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione o método de pagamento</Text>
      <Button
        title="Pix"
        onPress={() => navigation.navigate('PixCode', { value })}
      />
      <Button title="Cartão de Crédito" disabled />
      <Button title="Cartão de Débito" disabled />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
