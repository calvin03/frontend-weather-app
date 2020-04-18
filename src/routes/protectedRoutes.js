import React from 'react';
import {Route, Redirect} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

export const ProtectedRoute = ({component: Component, ...rest}) =>{

    const dispatch = useDispatch()

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)


    return(

        <Route 
        {...rest}
         render={props => {

                if(isAuthenticated == true){
                    
                    return <Component {...props}/>;

                }else{
                    return( 
                    <Redirect to={'/login'}
                    />
                    );
                }
            }}
        />
    );
};