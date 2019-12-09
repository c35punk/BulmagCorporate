import React from 'react';
import { Route, Link } from "react-router-dom";
import { UserConsumer } from '../contexts/user-context';

const AdminRoute = ({ isLoggedIn, allowedRoles = [], roles, ...otherProps }) => {
    const isAllowed =  (!allowedRoles.length) || (roles.map(role => role.toLowerCase()).some(role => allowedRoles.includes(role)));

    if (!isLoggedIn || !isAllowed) {
        return <Link to="/not-found" />
    }

    return <Route {...otherProps} />
}

const AdminRouteContext = (props) => {
    return (
        <UserConsumer>
            {
                ({ isLoggedIn, roles }) => (
                    <AdminRoute {...props} roles={roles} isLoggedIn={isLoggedIn} />
                )
            }
        </UserConsumer>
    )
}

export default AdminRouteContext;