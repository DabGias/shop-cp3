import { NavigationContainer } from "@react-navigation/native"
import { createSharedElementStackNavigator } from "react-navigation-shared-element"
import { FormLogin } from "./src/components/FormLogin"
import { CardStyleInterpolators } from "@react-navigation/stack"
import { Routes } from "./src/routes/Routes"
import { Logoff } from "./src/components/Logoff"
import { FormCadastro } from "./src/components/FormCadastro"

const options = {
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    headerShown: false
}

const Stack = createSharedElementStackNavigator()

function StackRoutes() {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={options}>
                <Stack.Screen name="Routes" component={Routes}/>
                <Stack.Screen name="Cadastro" component={FormCadastro}/>
                <Stack.Screen name="Login" component={FormLogin}/>
                <Stack.Screen name="Logoff" component={Logoff}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default function App() {
    return(
        <StackRoutes/>
    )
}
