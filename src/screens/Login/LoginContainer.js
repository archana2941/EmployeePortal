import React, { Component } from 'react';
import {Alert,View} from 'react-native';
import isEmail from 'validator/lib/isEmail';
import Login from './views/components/Login';
import NavigationService from '../../utils/NavigationService';
import DATA from './dummyData';

class LoginContainer extends Component {
    state = {
        username: {
            value: '',
        },
        password: {
            value: '',
        },
        showAlert: false,
        disableButton: false,
    }
    onSignIn = () => {
        if(this.state.username.value !== DATA.username || this.state.password.value !== DATA.password){
            this.setState({disableButton: true,showAlert: true});  
        }else {
            this.setState({disableButton: false});  
            NavigationService.navigate('Dashboard');
        }
    }
    onChangeText = (type,value) => {
        if(type==='password'){
            if(value.trim().length === 0){
                this.setState({
                    password: {
                        errorMessage: 'Password cannot be blank!',
                        value: value.trim(),
                        isValid: false,
                    },
                    disableButton: true,
                }); 
            }else if(value.trim().length < 6){
                this.setState({
                    password: {
                        errorMessage: 'Password too short!',
                        value: value.trim(),
                        isValid: false,
                    },
                    disableButton: true,
                }); 
            }else{
                this.setState({
                    password: {
                        errorMessage: '',
                        value: value.trim(),
                        isValid: true,
                    },
                    disableButton: false,
                });  
            }
        }else {
            if(value.trim().length === 0){
                this.setState({
                    username: {
                        errorMessage: 'Username cannot be blank!',
                        value: value.trim(),
                        isValid: false,
                    },
                    disableButton: true,
                }); 
            }if(!isEmail(value)){
                this.setState({
                    username: {
                        errorMessage: 'Username Incorrect!',
                        value: value.trim(),
                        isValid: false,
                    },
                    disableButton: true,
                });
            }else {
                this.setState({
                    username: {
                        errorMessage: '',
                        value: value.trim(),
                        isValid: true,
                    },
                    disableButton: false,
                }); 
            }
        }
    }
    onBlurInputField = (type,value) => {
        if(value) {
          this.setState(prevState => ({
            [type]: {
                ...prevState[type],  
                isUsed: true,
            }
        }))
        }
    };

    showErrorView = () => (
        Alert.alert(
            'INVALID CREDENTIALS',
            'Username or password invalid',
            [
              {text: 'OK', onPress: () => this.setState({showAlert: false})},
            ],
            {cancelable: false},
          )
    );

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Login
                    {...this.state}
                    onSignIn={this.onSignIn}
                    onChangeText={this.onChangeText}
                    onBlurInputField={this.onBlurInputField}
                />
                {this.state.showAlert && this.showErrorView()}
            </View>
        )
    }
}
export default LoginContainer;