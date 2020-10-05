import React from "react";
import { View, Text, StyleSheet, Button, _Text } from "react-native";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const TabsNavigation = createBottomTabNavigator();

export default function paginaProfessor() {
  return (
    <TabsNavigation.Navigator>
      <TabsNavigation.Screen name="Home" component={ambienteProfessor} />
      <TabsNavigation.Screen name="Perfil" component={perfilProfessor} />
      <TabsNavigation.Screen
        name="Disciplinas"
        component={disciplinasLecionadas}
      />
      <TabsNavigation.Screen name="Grupos" component={gerenciarGrupos} />
    </TabsNavigation.Navigator>
  );
}

function ambienteProfessor() {
  return (
    <View>
      <Text>Ambiente do aluno</Text>
    </View>
  );
}

function perfilProfessor() {
  return (
    <View>
      <Text>Informações de cadastro do professor</Text>
    </View>
  );
}

function disciplinasLecionadas() {
  return (
    <View>
      <Text>gerenciar tarefas das disciplinas lecionadas pelo professor</Text>
    </View>
  );
}

function gerenciarGrupos() {
  return (
    <View>
      <Text>gerenciar grupos das disciplinas lecionadas pelo professor</Text>
    </View>
  );
}
