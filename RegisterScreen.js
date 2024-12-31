import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

export default function RegisterScreen({ navigation }) {
  const [form, setForm] = useState({
    nome_completo: '',
    celular: '',
    email: '',
    cpf: '',
    senha: '',
  });

  const handleRegister = async () => {
    const { nome_completo, celular, email, cpf, senha } = form;
    if (!nome_completo || !celular || !email || !cpf || !senha) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios');
      return;
    }

    try {
      const response = await axios.post('http://193.203.175.154/register', form);
      if (response.data.success) {
        Alert.alert('Sucesso', 'Usuário registrado com sucesso!');
        navigation.navigate('Login');
      } else {
        Alert.alert('Erro', response.data.message);
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível conectar ao servidor');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar-se</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        value={form.nome_completo}
        onChangeText={(value) => setForm({ ...form, nome_completo: value })}
      />
      <TextInput
        style={styles.input}
        placeholder="Celular"
        keyboardType="phone-pad"
        value={form.celular}
        onChangeText={(value) => setForm({ ...form, celular: value })}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={form.email}
        onChangeText={(value) => setForm({ ...form, email: value })}
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        keyboardType="numeric"
        value={form.cpf}
        onChangeText={(value) => setForm({ ...form, cpf: value })}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={form.senha}
        onChangeText={(value) => setForm({ ...form, senha: value })}
      />
      <Button title="Registrar" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});
