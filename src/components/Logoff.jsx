import { useEffect, useState } from "react";
import { getData, mergeData } from "../storage/Storage";
import { View } from "react-native";

export function Logoff({ navigation }) {
    useEffect(() => {
        function logoffUser(value) {
            value.login = false

            mergeData('user', value)
            navigation.navigate('Login')
        }

        getData(logoffUser, 'user')
    }, [])

    return(
        <View style={{display: "flex", flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text>Página de Logoff</Text>
        </View>
    )
}
