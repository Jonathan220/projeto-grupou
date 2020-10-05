//Aluno: Jonathan Abreu Pereira Silva
//Matrícula: 2017102141
//
//Aluno:Eduardo do Nascimento Azevedo 
//matrícula:2017101709
//AV1 - Desenvolvimento de aplicações moveis
//
//Aluno:Leonardo Gonçalves da Silva 
//matrícula:2017200442
//
//************************************************** */

import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import telaLoginAluno from "./telaLoginAluno";
import telaLoginProfessor from "./loginProfessor";
import paginaAluno from "./paginaAluno";
import paginaProfessor from "./paginaProfessor";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Aluno" component={telaLoginAluno} />
        <Stack.Screen name="Professor" component={telaLoginProfessor} />
        <Stack.Screen name="Ambiente do Aluno" component={paginaAluno} />
        <Stack.Screen
          name="Ambiente do Professor"
          component={paginaProfessor}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.botao}>
        <Text style={styles.texto}>Selecione a página de login:</Text>
        <Button
          title="Aluno"
          color="orange"
          onPress={() => navigation.push("Aluno")}
        />
      </View>
      <View style={styles.botao}>
        <Button
          color="orange"
          title="Professor"
          onPress={() => navigation.push("Professor")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  botao: {
    marginTop: 10,
    marginBottom: 20,
    width: 250,
  },
  texto: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 30,
  },
});
