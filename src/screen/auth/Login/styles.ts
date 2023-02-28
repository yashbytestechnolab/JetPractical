import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../../constants/Colors";

export const styles = StyleSheet.create({
    wrapperStyle: {
        flex: 1,
        backgroundColor: Colors.whiteShadow
    },
    loginPage: {
        backgroundColor: Colors.white,
        flex: 1,
        marginHorizontal: 35,
        borderRadius: 16,
        marginVertical: '20%',
    },
    logoWrapper: {
        width: 80,
        height: 80,
        borderRadius: 40,
        alignSelf: 'center',
        top: -40,
        justifyContent: 'center',
        backgroundColor: Colors.white,
        alignItems: 'center',
    },
    logo: {
        width: 60,
        height: 60
    },
    loginTextWrapper: {
        alignItems: 'center'
    },
    loginText: {
        fontSize: 21,
        color: Colors.midGrey,
        fontWeight: '700'
    },
    inputWrapper: {
        marginTop: 30,
        marginHorizontal: 20
    },
    buttonWrapper: {
        marginTop: Dimensions.get('screen').height / 12
    },
    button: {
        borderRadius: 6,
        height: 50,
        marginHorizontal: 20,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: Colors.white,
        fontWeight: '700'
    }
})