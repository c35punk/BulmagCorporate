import React from 'react';
import { Route, Link } from "react-router-dom";
import { UserConsumer } from '../contexts/user-context';

const UserRoute = ({ isLoggedIn, ...otherProps }) => {
    if (!isLoggedIn) {
        return <Link to="/login" />
    }

    return <Route {...otherProps} />
}

const UserRouteContext = (props) => {
    return (
        <UserConsumer>
            {
                ({ isLoggedIn }) => (
                    <UserRoute {...props} isLoggedIn={isLoggedIn} />
                )
            }
        </UserConsumer>
    )
}

export default UserRouteContext;