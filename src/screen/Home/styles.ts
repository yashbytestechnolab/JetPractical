import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white'
    },
    loaderWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    container: {
        flex: 0.9,
        backgroundColor: Colors.whiteShadow,
    },
    list: {
        marginTop: 6,
        marginBottom: 60
    },
    footerWrapper: {
        flex: 1,
        paddingBottom: 50
    },
    mainWrapperList: {
        marginVertical: 6,
        height: 110,
        marginRight: '5%',
        marginLeft: '8%',
        borderRadius: 13,
        backgroundColor: 'white',
        elevation: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    imageWrapper: {
        left: -16,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    detailWrapper: {
        justifyContent: 'space-around'
    },
    firstName: {
        fontSize: 18,
        alignSelf: 'flex-start',
        fontWeight: '600',
        color: 'black',
    },
    locationWrapper: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        justifyContent: 'center',
    },
    location: {
        width: 15,
        height: 20,
        alignSelf: 'center',
    },
    country: {
        alignSelf: 'flex-start',
        fontSize: 13,
        paddingVertical: 5,
        paddingLeft: 3,
        color: Colors.locationGray,
    },
    city: {
        alignSelf: 'flex-start',
        fontSize: 13,
        left: 3,
        paddingVertical: 5,
        color: Colors.locationGray,
    },
    favouriteIconWrapper: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    favouriteIcon: {
        position: 'absolute',
        right: 15,
        width: 20,
        height: 20,
        top: -25,
    },
    hobbyWrapper: {
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 3,
        height: 20,
        paddingHorizontal: 5
    }
})