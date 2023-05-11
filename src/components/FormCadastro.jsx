import { useState } from "react"
import { mergeData } from "../storage/Storage"
import { Text, TextInput, View } from "react-native"
import Pressable from "react-native/Libraries/Components/Pressable/Pressable"

export function FormCadastro({ navigation }) {
    const [error, setError] = useState("")
    const [form, setForm] = useState("")

    function validate() {
        return (
            form.user
            && form.pass
            && form.email
            && form.phone 
        ) ? true : false
    }

    function next() {
        var clone = Object.assign({}, form)
        clone.login = true

        mergeData('user', clone)
        navigation.navigate("Routes")
    }

    function onPress() {
        (validate()) ? next() : setError("Cadastro inválido!")
    }

    function callBack(key, data) {
        var clone = Object.assign({}, form)
        clone[key] = data

        setForm(clone)
    }
    
    return(
        <View style={{display: "flex", flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text>Cadastro</Text>

            <TextInput
                value={form.user}
                placeholder="Usuário"
            />
            <TextInput
                value={form.name}
                placeholder="Nome"
            />
            <TextInput
                value={form.pass}
                placeholder="Senha"
            />
            <TextInput
                value={form.email}
                placeholder="E-mail"
            />
            <TextInput
                value={form.tel}
                placeholder="Telefone"
            />

            <Text>{error}</Text>

            <Pressable>
                <Text>Cadastrar</Text>
            </Pressable>
        </View>
    )
}
