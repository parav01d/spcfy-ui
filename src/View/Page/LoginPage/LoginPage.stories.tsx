import { Store } from 'Flux';
import React from 'react';
import { Provider } from 'react-redux';
import "View/index.css"
import LoginPage from './LoginPage';

export default {
    title: 'Page/LoginPage',
    component: LoginPage,
};


export const Standard = () => (
    <Provider store={Store}>
        <LoginPage />
    </Provider>
)
