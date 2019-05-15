import React, { Component } from 'react';
import {Alert} from 'react-native';
import Login from './views/components/Login';
import NavigationService from '../../utils/NavigationService';
import DATA from './dummyData';

class LoginContainer extends Component {
    onSignIn = () => {
        const {username,password} = this.state;
        if(username === DATA.username && password === DATA.password){
            NavigationService.navigate('Dashboard');
        }else {
            this.setState({
                errorMessage: 'UserName or password is incorrect!'
            },() => Alert.alert(this.state.errorMessage));
        }
    }
    onChangeText = (type,value) => {
        this.setState({
            [type]: value.trim(),
        })
    }
    render() {
        return (
            <Login
                onSignIn={this.onSignIn}
                onChangeText={this.onChangeText}
            />
        )
    }
}
export default LoginContainer;