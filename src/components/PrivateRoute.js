import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const access_token = useSelector(state => state.user.access_token)

    return (
        <Route {...rest} render={props => (
            access_token ?
                <Component {...props} />
                : <Redirect to={{ pathname: '/home' }} />
        )} />
    )
}

export default PrivateRoute