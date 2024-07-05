import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFEFEF',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 40,
        paddingRight: 20,
        paddingTop: 100,
    },
    reparation:{
        backgroundColor: '#FFDBE8',
        paddingLeft : 25,
        borderBottomRightRadius : 30,
        borderBottomLeftRadius : 30,
    },
    etape:{
        display: 'flex',
        flexDirection: 'row',
    },
    etapeText:{
        width: 250,
        marginLeft: 20,
        marginBottom: 30,
    },
    m_B20:{
        marginBottom: 20
    },
    m_B10:{
        marginBottom: 10
    },
    h1:{
        fontSize: 26,
        width : 300,
    },
    h2:{
        fontSize: 20,
    },
    h3:{
        fontSize: 16,
    },
    p:{
        fontSize: 12,
    },
})