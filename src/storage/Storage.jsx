import AsyncStorage from "@react-native-async-storage/async-storage";

export async function storeData(key, value) {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value))
    } catch (err) {
        console.error("ERROR: ", key, " -> ", err)
    }
}

export async function mergeData(key, value) {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value))
    } catch (err) {
        console.error("ERROR: ", key, " -> ", err)
    }
}

export async function getData(callBack, key) {
    try {
        const value = await AsyncStorage.getItem(key)
        
        callBack(value !== null ? JSON.parse(value) : null)
    } catch (err) {
        console.error("ERROR: ", key, " -> ", err)
    }
}

export async function rmvData(key) {
    try {
        await AsyncStorage.removeItem(key)
    } catch (err) {
        console.error("ERROR: ", key, " -> ", err)
    }
}
