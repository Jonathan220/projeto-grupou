import React from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

export default telaLoginAluno = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Matrícula:</Text>
      <TextInput style={styles.CaixaDetexto} />
      <Text>Senha:</Text>
      <TextInput style={styles.CaixaDetexto} />
      <View style={styles.botao}>
        <Button
          title="Entrar"
          color="orange"
          onPress={() => navigation.push("Ambiente do Aluno")}
        />
      </View>
      <Text style={styles.esqueceuSenha}>Esqueceu Senha</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 60,
  },
  CaixaDetexto: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: 200,
    margin: 20,
    backgroundColor: "white",
  },
  botao: {
    marginTop: 20,
    marginBottom: 20,
    width: 200,
  },
  esqueceuSenha: {
    marginTop: 10,
    color: "blue",
  },
});
