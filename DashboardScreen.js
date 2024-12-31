import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import CardView from 'react-native-cardview';

export default function DashboardScreen({ route, navigation }) {
  const { userData } = route.params;

  return (
    <View style={styles.container}>
      <CardView
        cardElevation={5}
        cardMaxElevation={5}
        cornerRadius={5}
        style={styles.card}
      >
        <Text style={styles.title}>Informações do Usuário</Text>
        <Text>Nome: {userData.nome_completo}</Text>
        <Text>Celular: {userData.celular}</Text>
        <Text>Email: {userData.email}</Text>
        <Text>CPF: {userData.cpf}</Text>
        <Text>Saldo: R$ {parseFloat(userData.saldo).toFixed(2)}</Text>
      </CardView>

      <Button
        title="Adicionar Saldo"
        onPress={() => navigation.navigate('AddBalance', { userData })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  card: {
    padding: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
