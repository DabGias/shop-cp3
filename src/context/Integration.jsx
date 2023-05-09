import axios from "axios"

export async function getEstado(callBack) {
    await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(resp => resp.json())
    .then(res => callBack(res))
}

export function getEstadoAxios(callBack) {
    axios({
        method: "GET",
        url: "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
    }).then((resp) => {
        callBack(resp.data)
    })
}
