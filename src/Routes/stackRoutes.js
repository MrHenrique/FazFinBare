import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";
import CadastroFaz from "../pages/CadastroFaz";
import GeralFaz from "../pages/GeralFaz";
import CadastroReb from "../pages/CadastroReb";
const Stack = createNativeStackNavigator();
function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CadastroFaz"
        component={CadastroFaz}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="GeralFaz"
        component={GeralFaz}
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen
        name="CadastroReb"
        component={CadastroReb}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default StackRoutes;
