import React from "react"
import { Text } from "react-native"
import { View } from "react-native"
import { storeData, mergeData, getData, rmvData } from "../storage/Storage"

export function Home() {
    function callBack(dados) {
        console.debug(dados)
    }

    getData(callBack, 'user')
    storeData('user', { id: 1, name: 'Gabriel' })

    getData(callBack, 'user')
    storeData('user', { id: 1, name: 'Maria' })
    getData(callBack, 'user')

    mergeData('user', { id: 1, name: 'Pedro' })
    getData(callBack, 'user')

    rmvData('user')

    return(
        <View style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Text>OK</Text>
        </View>
    )
}
