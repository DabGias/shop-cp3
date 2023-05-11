import { useState } from "react"
import { mergeData } from "../storage/Storage"
import { Text, TextInput, View } from "react-native"
import Pressable from "react-native/Libraries/Components/Pressable/Pressable"

export function FormCadastro({ navigation }) {
    const [error, setError] = useState("")
    const [form, setForm] = useState({
        user: "",
        nome: "",
        pass: "",
        email: "",
        phone: ""
    })

    function setUser(value) {
        setForm({...form, ["user"]: value})
    }

    function setNome(value) {
        setForm({...form, ["nome"]: value})
    }

    function verifNome() {
        return /^[A-Z][a-z].* [A-Z][a-z]+$/.test(form["nome"].trim())
    }

    function setPass(value) {
        setForm({...form, ["pass"]: value})
    }

    function verifPass() {
        return form["pass"].length > 8 ? true : false
    }

    function setEmail(value) {
        setForm({...form, ["email"]: value})
    }

    function verifEmail() {
        return /\S+@\S+\.\S+/.test(form["email"].trim())
    }

    function setPhone(value) {
        setForm({...form, ["phone"]: value})
    }

    function verifPhone() {
        return /^[(]?[0-9]{2}[)]?[-\s\.]?[0-9]{5}[-\s\.]?[0-9]{4}$/.test(form["tel"].trim())
    }

    function validate() {
        return (
            form.user
            && verifNome()
            && verifPass()
            && verifEmail()
            && verifPhone() 
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
                onChange={(value) => setUser(value)}
                onEndEditing={validate}
            />
            <TextInput
                value={form.name}
                placeholder="Nome"
                onChange={(value) => setNome(value)}
                onEndEditing={validate}
            />
            <TextInput
                value={form.pass}
                placeholder="Senha"
                onChange={(value) => setPass(value)}
                onEndEditing={validate}
            />
            <TextInput
                value={form.email}
                placeholder="E-mail"
                onChange={(value) => setEmail(value)}
                onEndEditing={validate}
            />
            <TextInput
                value={form.tel}
                placeholder="Telefone"
                onChange={(value) => setPhone(value)}
                onEndEditing={validate}
            />

            <Text>{error}</Text>

            <Pressable>
                <Text>Cadastrar</Text>
            </Pressable>
        </View>
    )
}
