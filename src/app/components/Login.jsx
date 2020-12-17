import React from 'react';
import { connect } from 'react-redux';

const LoginComponent = ()=> {
    return <div>Login Here!</div>
};

const mapStateteToProps = state => state;

export const ConnectedLogin = connect(mapStateteToProps) (LoginComponent)