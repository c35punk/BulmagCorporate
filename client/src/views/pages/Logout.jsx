import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { UserConsumer, defaultState } from '../../contexts/user-context'

class Logout extends Component {
    constructor(props) {
        super(props);

        window.localStorage.removeItem('user');
        window.localStorage.removeItem('auth_token');
        props.updateUser(defaultState);
    }

    render() {
        return <Redirect to="/" />
    }
}

const LogoutContext = (props) => {
    return (
        <UserConsumer>
            {
                ({ updateUser }) => (
                    <Logout {...props} updateUser={updateUser} />
                )
            }
        </UserConsumer>
    )
}

export default LogoutContext;