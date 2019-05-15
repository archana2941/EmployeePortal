import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    card: {
        flex: 1,
        margin: 10,
        minHeight: 60,
        backgroundColor: 'white',
        borderRadius: 5,
        shadowOffset: { width: 0, height: 0 },
        shadowColor: '#CCCCCC',
        shadowOpacity: 0.35,
        shadowRadius: 1.5,
        elevation: 2,
    },
    container: {
        margin: 10,
        paddingBottom: 20,
    },
    headerContainer: {
        backgroundColor: '#CCCCCC',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        padding: 20, 
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    content: {
        fontSize: 16,
        marginVertical: 12, 
    }
});