import React from 'react';
import { Theme } from 'react-daisyui';
import { CentralizedPage } from 'View/Layout';
import "View/index.css"
import { LoadingIndicator } from './LoadingIndicator';

export default {
    title: 'Common/DataDisplay/LoadingIndicator',
    component: LoadingIndicator,
};


export const Standard = () => (
    <Theme className={"h-full flex flex-1 justify-center items-center"} dataTheme={"spcfy"}>
        <LoadingIndicator />
    </Theme>
)
