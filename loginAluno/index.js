import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function loginAluno({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Aluno" onPress={() => navigation.push("Aluno")} />
    </View>
  );
}
