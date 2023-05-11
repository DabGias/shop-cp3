import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"
import { Home } from "../components/Home"
import { Icons } from "../icon/Icon"

const Drawer = createDrawerNavigator()

export function Routes() {
    const components = [
        {
            route: 'Home',
            label: 'Home',
            typeIcon: Icons.Feather,
            icon: 'home',
            component: Home,
            notification: 0
        }
    ]

    return(
        <Drawer.Navigator>
            {
                components.map((element, index) =>
                    <Drawer.Screen 
                        key={index}
                        name={element.route}
                        component={element.component}
                        options={{element: element}}
                    />
                )
            }
        </Drawer.Navigator>
    )
}
