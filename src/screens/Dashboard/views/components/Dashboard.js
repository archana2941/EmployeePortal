import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {View,Text,ScrollView} from 'react-native';
import styles from '../styles/style';

class Dashboard extends Component {
    static propTypes = {
        employeesData: PropTypes.object.isRequired,
      };

    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#EEEEEE'}}>
                {
                    this.props.employeesData.user.map(employee => (
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
            </ScrollView>
        )
    }
}
export default Dashboard;