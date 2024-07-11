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

    m_R10:{
        marginRight: 10
    },
    m_T20:{
        marginTop: 20
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
    h6:{
        fontSize: 14,
    },
    p:{
        fontSize: 12,
    },
    textBold:{
        fontWeight: 'bold',
    },
    position_absolute: {
        position: 'absolute',
    },
    textCenter: {
        textAlign: 'center',
    }
})