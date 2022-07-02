import React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'Flux';
import { RegisterPage } from './RegisterPage';
import "View/index.css"

export default {
    title: 'Page/RegisterPage',
    component: RegisterPage,
};

export const Standard = () => (
    <Provider store={Store}>
        <RegisterPage />
    </Provider>
)
