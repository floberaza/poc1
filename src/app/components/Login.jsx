import React from 'react';
import { connect } from 'react-redux';

const LoginComponent = ()=> {
    return <div>
        <h2>
            Please login
        </h2>
        <form>
            <input type="text" placeholder="username" name="username" defaultValue="Dev"/>
            <input type="password" placeholder="passsword" name="passsword" defaultChecked="" />
            <button type="submit">Login</button>
        </form>
    </div>
};

const mapStateteToProps = state => state;

export const ConnectedLogin = connect(mapStateteToProps) (LoginComponent)