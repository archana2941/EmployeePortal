import React, { Component } from 'react';
import {View,Text,TextInput,TouchableOpacity} from 'react-native';
import styles from '../styles/style';

class Login extends Component {
    getInputFields = () => {
        const {username,password,onBlurInputField} = this.props;
        return(
        <View style={styles.inputViewsWrapper}>
            <View style={styles.verticalMargin}>
                <Text style={styles.label}>Username</Text>
                <TextInput
                    style={[styles.input, username.errorMessage && styles.errorView]}
                    onChangeText={text => this.props.onChangeText('username',text)}
                    onBlur={(text) => !username.isUsed && onBlurInputField('username',text)}
                    autoCapitalize="none"
                    value={username.value}
                    returnKeyType="done"
                    keyboardType="email-address"
                />
                {   username.errorMessage ? 
                    <Text style={styles.errorMessage}>{username.errorMessage}</Text> 
                    : <Text style={styles.errorMessage}> </Text>
                }
            </View>
            <View style={styles.verticalMargin}>
            <Text style={styles.label}>Password</Text>
                <TextInput
                    style={[styles.input, password.errorMessage && styles.errorView]}  
                    onChangeText={text => this.props.onChangeText('password',text)}
                    onBlur={(text) => !password.isUsed && onBlurInputField('password',text)}
                    autoCapitalize="none" 
                    value={password.value}   
                    returnKeyType="go" 
                />
                {   password.errorMessage ? 
                    <Text style={styles.errorMessage}>{password.errorMessage}</Text> 
                    : <Text style={styles.errorMessage}> </Text>
                }
            </View>
        </View>
    )};
    getLoginButton = () => (
        <View style={styles.loginButtonContainer}>
            <TouchableOpacity
                style={[styles.loginButton,{ 
                    backgroundColor: this.props.disableButton ? 'gray' : 'blue', 
                }]}
                onPress={this.props.onSignIn}
                disabled={this.props.disableButton}
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