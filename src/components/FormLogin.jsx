import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { getData, mergeData } from "../storage/Storage";

export function FormLogin({ navigation }) {
    // TODO: Criar validação do formulário

    const [error, setError] = useState("")
    const [form, setForm] = useState({})
    var data = ""

    useState(() => {
        function findData(value) {
            data = value
        }

        getData(findData, data)
    }, [])

    function validate() {
        return (form.user && form.pass) ? true : false
    }

    function next() {
        data.login = true

        mergeData('user', data)
        navigation.navigate('Routes')
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
            <Text>Login</Text>
            
            <TextInput
                value={form.pass}
                placeholder="Usuário"
            />

            <TextInput
                value={form.pass}
                placeholder="Senha"
            />

            <Pressable
                style={{backgroundColor: "red", padding: 15}}
            >
                <Text>Logar</Text>
            </Pressable>
        </View>
    )
}
