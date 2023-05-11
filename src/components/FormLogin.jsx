import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { getData, mergeData } from "../storage/Storage";

export function FormLogin({ navigation }) {
    const [error, setError] = useState("")
    const [form, setForm] = useState({
        user: "",
        pass: ""
    })
    var data = ""

    useState(() => {
        function findData(value) {
            data = value
        }

        getData(findData, data)
    }, [])

    function setUser(value) {
        setForm({...form, ["user"]: value})
    }

    function verifUser() {
        return form["user"] === data["user"] ? true : false
    }

    function setPass(value) {
        setForm({...form, ["pass"]: value})
    }

    function verifPass() {
        return form["pass"] === data["pass"] ? true : false
    }

    function validate() {
        return verifUser() && verifPass() ? true : false
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
                onChange={(value) => setUser(value)}
                onEndEditing={validate}
            />

            <TextInput
                value={form.pass}
                placeholder="Senha"
                onChange={(value) => setPass(value)}
                onEndEditing={validate}
            />

            <Pressable
                style={{backgroundColor: "red", padding: 15}}
            >
                <Text>Logar</Text>
            </Pressable>
        </View>
    )
}
