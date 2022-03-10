import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerCard: {
        height: height / 2,
        width: width * 0.7,
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset:{
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    formTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20
    },
    containerForm: {

    },
    linkText: {
        color: '#2E78B7',
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign:"center"
    },
    label: {
        fontSize: 12,
        marginBottom: 5,
        fontWeight: "bold"
    },
    input: {
        borderBottomColor: '#CCC',
        borderBottomWidth: 1,
        color: '#333',
        fontSize: 16,
        marginBottom: 15
    }
});


export default styles;