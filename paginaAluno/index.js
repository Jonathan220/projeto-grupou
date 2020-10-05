import React from "react";
import { View, Text, StyleSheet, Button, _Text } from "react-native";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tabs = createBottomTabNavigator();

export default function paginaAluno() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={ambienteAluno} />
      <Tabs.Screen name="Perfil" component={perfilAluno} />
      <Tabs.Screen name="Disciplinas" component={disciplinasCursadas} />
      <Tabs.Screen name="Chat" component={chat} />
    </Tabs.Navigator>
  );
}

function ambienteAluno() {
  return (
    <View>
      <Text>Ambiente do aluno</Text>
    </View>
  );
}

function perfilAluno() {
  return (
    <View>
      <Text>Informações de cadastro do aluno</Text>
    </View>
  );
}

function disciplinasCursadas() {
  return (
    <View>
      <Text>Disciplinas que o aluno cursa e os grupos que participa</Text>
    </View>
  );
}

function chat() {
  return (
    <View>
      <Text>Abre o chat com a lista de grupos que participa</Text>
    </View>
  );
}
