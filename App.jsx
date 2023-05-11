import { NavigationContainer } from "@react-navigation/native"
import { Home } from "./src/components/Home"
import { createSharedElementStackNavigator } from "react-navigation-shared-element"
import { FormLogin } from "./src/components/FormLogin"
import { CardStyleInterpolators } from "@react-navigation/stack"
import { Routes } from "./src/routes/Routes"

const options = {
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    headerShown: false
}

const Stack = createSharedElementStackNavigator()

function StackRoutes() {
    // TODO: Criar FormCadastro.jsx e Logoff.jsx

    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={options}>
                <Stack.Screen name="Routes" component={Routes}/>
                {/* <Stack.Screen name="Cadastro" component={FormCadastro}/> */}
                <Stack.Screen name="Login" component={FormLogin}/>
                {/* <Stack.Screen name="Logoff" component={Logoff}/> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default function App() {
    return(
        <StackRoutes/>
    )
}
