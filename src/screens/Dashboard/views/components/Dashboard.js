import React, { Component } from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';

const styles = StyleSheet.create({
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
})
class Dashboard extends Component {
    showCards = () => {
        this.props.employeeData.user.map(employee => (
            <View style={styles.card}>
                <View style={styles.headerContainer}>
                        <Text style={styles.header}>{employee.name}</Text>
                </View>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.content}>Gender: {employee.gender} </Text>
                        <Text style={styles.content}>Age: {employee.age}</Text>
                        <Text style={styles.content}>Email: {employee.email} </Text>
                        <Text style={styles.content}>Contact: {employee.phoneNo} </Text>
                    </View>
                </View>
                </View>
        ))
    }
    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#EEEEEE'}}>
                {this.showCards()}             
            </ScrollView>
        )
    }
}
export default Dashboard;