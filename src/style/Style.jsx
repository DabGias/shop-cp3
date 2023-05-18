import { StyleSheet } from "react-native"

const colors = {
    primary: '#ea7a72',
    primaryDark: '#039a83',
    normal: '#b0e6fd',
    important: '#e892ab',
    icon1: '#ea7a72',
    icon2: '#f8c907',
    icon3: '#82a7c9',
    icon4: '#c2c5d1',
    light: '#f0f0f0',
    gray: '#91a3ad',
    darkGray: '#999999',
    dark: '#123',
    black: '#000',
    white: 'white',
    active: '#05294a99',
    sceneBg: '#04567f',
    screenBg: '#05294a',
    transparent: 'transparent'
}

const metrics = {
    SPACING: 16,
    borderRadius: 10,
    titleFontSize: 24,
    textFontSize: 16,
    subTextFontSize: 14,
    width: '100%',
    alignCenter: 'center'
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: metrics.SPACING,
        alignItems: metrics.alignCenter
    },

    title: {
        fontSize: metrics.titleFontSize,
        color: colors.active
    },

    error: {
        fontSize: metrics.subTextFontSize,
        color: colors.important
    },

    row: {
        padding: metrics.SPACING / 2,
        width: metrics.width
    },

    textInput: {
        fontSize: metrics.textFontSize,
        padding: metrics.SPACING,
        width: metrics.width,
        color: colors.active,
        borderBottomWidth: 1,
        borderColor: colors.normal
    },

    button: {
        padding: metrics.SPACING,
        width: metrics.width,
        backgroundColor: colors.active,
        borderRadius: metrics.borderRadius,
        alignItems: metrics.alignCenter
    },

    buttonText: {
        fontSize: metrics.textFontSize,
        color: colors.white
    },
})
