import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    title: {
        fontSize: 60,
        fontWeight: 'bold',
        marginVertical: 20
    },

    plage_container: {
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
    },

    plage_image: {
        height: 500,
    },

    input: {
        backgroundColor: '#e0dcdc',
        width: '90%',
        padding: 20,
        borderRadius: 10,
        marginVertical: 10,
    },

    button: {
        backgroundColor: 'blue', 
        paddingVertical: 10, 
        paddingHorizontal: 20, 
        borderRadius: 5, 
    },
    
    color:  {
        color: '#e0dcdc',
    }
})