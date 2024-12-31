import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

export default function AddBalanceScreen({ navigation, route }) {
  const { userData } = route.params;
  const [value, setValue] = useState(0);

  const handlePredefinedValue = (amount) => {
    setValue(amount);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha um valor para adicionar</Text>
      <View style={styles.buttonContainer}>
        <Button title="R$ 50" onPress={() => handlePredefinedValue(50)} />
        <Button title="R$ 100" onPress={() => handlePredefinedValue(100)} />
        <Button title="R$ 150" onPress={() => handlePredefinedValue(150)} />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Outro valor (mínimo R$ 10)"
        keyboardType="numeric"
        onChangeText={(text) => setValue(Number(text))}
      />

      {value >= 10 && (
        <Button
          title="Ir para pagamento"
          onPress={() => navigation.navigate('Payment', { value, userData })}
        />
      )}
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
});
