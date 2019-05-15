import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#EEEEEE', 
    },
    inputViewsWrapper: { flex: 8,margin: 10, justifyContent: 'center' },
    verticalMargin: { marginVertical: 20 },
    label: { marginBottom: 10 },
    input: { 
        borderRadius: 5, backgroundColor: 'white',color: 'black', padding: 20, width: '100%'
    },
    errorView: {borderRadius: 5, borderWidth: 2, borderColor: 'red'},
    errorMessage: {
        color: 'red',
        paddingLeft: 5,
        fontSize: 12,
        marginTop: 5,
    },
    loginButtonContainer:{ 
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 5,
        marginVertical: 16,
        marginHorizontal: 10,
        },
    loginButton: {
        width: '100%', 
        height: 64, 
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 5, 
    },
    loginText: { fontSize: 14, fontWeight: 'bold',color: 'white'}    
})