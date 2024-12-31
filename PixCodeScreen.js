import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

export default function PixCodeScreen({ route, navigation }) {
  const { value } = route.params;
  const pixKey = '7palmosmicropub@gmail.com';
  const pixCode = `PIX chave: ${pixKey}, valor: R$ ${value}`;

  const copyToClipboard = () => {
    Clipboard.setString(pixCode);
    alert('Código Pix copiado!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Código Pix</Text>
      <Text style={styles.code}>{pixCode}</Text>
      <Button title="Copiar código Pix" onPress={copyToClipboard} />
      <Button title="Concluir" onPress={() => navigation.navigate('Dashboard')} />
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
  code: {
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 5,
  },
});
