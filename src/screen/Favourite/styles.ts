import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
    safeAreaView: {
        backgroundColor: Colors.white
    },
    container: {
        flex: 1,
        backgroundColor: Colors.whiteShadow
    },
    listWrapper: {
        flex: 0.9,
        backgroundColor: Colors.whiteShadow,
    },
    list: {
        marginTop: 6,
        marginBottom: 60
    },
    mainListWarpper: {
        height: 70,
        marginVertical: 3,
        backgroundColor: Colors.white,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 18,
        elevation: 1,
    },
    image: {
        width: 45,
        height: 45,
        borderRadius: 22.5
    },
    nameWrapper: {
        flexDirection: 'row',
        marginLeft: 15,
    },
    firstName: {
        fontSize: 20,
        fontWeight: '700',
        color: Colors.black
    },
    favouriteWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flex: 1
    },
    favourite: {
        width: 20,
        height: 20,
    },
    noFavourite: {
        fontSize: 15,
        color: Colors.black,
    },
    noFavouriteWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containStyle: {
        flexGrow: 1
    }
})