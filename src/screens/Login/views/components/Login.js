import React, { Component } from 'react';
import {View,Text,TextInput,TouchableOpacity} from 'react-native';
import styles from '../styles/style';

class Login extends Component {
    getInputFields = () => (
        <View style={styles.inputViewsWrapper}>
            <View style={styles.verticalMargin}>
                <Text style={styles.label}>Username</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => this.props.onChangeText('username',text)}
                    autoCapitalize="none"
                />
            </View>
            <View style={styles.verticalMargin}>
            <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.input}  
                    onChangeText={text => this.props.onChangeText('password',text)}
                    autoCapitalize="none"              
                />
            </View>
        </View>
    );
    getLoginButton = () => (
        <View style={styles.loginButtonContainer}>
            <TouchableOpacity
                style={{ 
                    width: '100%', height: 64, alignItems: 'center', 
                    justifyContent: 'center',
                    borderRadius: 5, 
                }}
                onPress={this.props.onSignIn}
            >
              <Text style={styles.loginText}>Log in</Text>
            </TouchableOpacity>
        </View>
    )
    render() {
        return (
            <View style={styles.container}>
                {this.getInputFields()}
                {this.getLoginButton()}
            </View>
        )
    }
}
export default Login;