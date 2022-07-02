import React from 'react';
import { Theme } from 'react-daisyui';
import "View/index.css"
import { Footer } from 'View/Component/Footer/Footer';

export default {
    title: 'Component/Footer',
    component: Footer,
};


export const Standard = () => (
    <Theme className={"h-full flex flex-1 justify-center items-center"} dataTheme={"spcfy"}>
        <Footer />
    </Theme>
)
