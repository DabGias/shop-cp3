import React, { useEffect } from "react"
import { Pressable, Text, TextInput } from "react-native"
import { View } from "react-native"
import { getData } from "../storage/Storage"
import { styles } from "../style/Style"

export function Home({ navigation, route }) {
    useEffect(() => {
        function handleStatusChange(data) {
            if (!data) {
                navigation.navigate("Cadastro")

                return true
            } 

            if (!data.login) {
                navigation.navigate("Login")

                return true
            }

            getData(handleStatusChange, 'user')
        }
    }, [])

    return(
        <View style={{display: "flex", flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text>Home</Text>
        </View>
    )
}
