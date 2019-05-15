import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#EEEEEE', 
    },
    inputViewsWrapper: { flex: 1,margin: 10, justifyContent: 'center' },
    verticalMargin: { marginVertical: 20 },
    label: { marginBottom: 10 },
    input: { borderRadius: 5, backgroundColor: 'white',color: 'black', padding: 20},
    loginButtonContainer:{ 
        backgroundColor: 'blue', 
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 5,
        marginVertical: 16,
        marginHorizontal: 10,
        },
    loginText: { fontSize: 14, fontWeight: 'bold',color: 'white'}    
})