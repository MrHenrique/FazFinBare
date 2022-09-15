import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import CadastroFaz from "../pages/CadastroFaz";
import StackRoutes from "../Routes/stackRoutes";
import PageListavacas from "../pages/Vacas";
import PageLancavacas from "../pages/Contasvaca";
import GeralFaz from "../pages/GeralFaz";
import CadastroReb from "../pages/CadastroReb";

const Drawer = createDrawerNavigator();
function Routes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,

        drawerStyle: {
          backgroundColor: "#004513",
          paddingTop: 20,
        },
        drawerPosition: "right",
        drawerActiveBackgroundColor: "#0F6D00",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#FFF",
      }}
    >
      <Drawer.Screen
        name="HomeDrawer"
        component={StackRoutes}
        options={{
          title: "Bem vindo.",
          drawerIcon: ({ focused, size, color }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="CadastroFaz"
        component={CadastroFaz}
        options={{
          title: "Cadastro de fazendas",
          drawerIcon: ({ focused, size, color }) => (
            <Ionicons
              name={focused ? "person-add" : "person-add-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Vacas"
        component={PageListavacas}
        options={{
          title: "Lista de Vacas",
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name={focused ? "account-cowboy-hat" : "account-cowboy-hat"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Contas"
        component={PageLancavacas}
        options={{
          title: "Lancar contas",
          drawerIcon: ({ focused, size, color }) => (
            <MaterialIcons
              name={focused ? "attach-money" : "attach-money"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Visão geral Fazenda"
        component={GeralFaz}
        options={{
          title: "Visão geral Fazenda",
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name={focused ? "finance" : "finance"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Cadastro Rebanho"
        component={CadastroReb}
        options={{
          title: "Cadastro Rebanho",
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons 
              name={focused ? "cow-off" : "cow"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
    
  );
}

export default Routes;
