import React from 'react';
import { Theme } from 'react-daisyui';
import { Subject } from 'rxjs';
import { Button, IButtonProps } from 'View/Common/Action/Button/Button';
import { CentralizedPage } from 'View/Layout';
import "View/index.css"

export default {
    title    : 'Common/Action/Button',
    component: Button,
    argTypes : {
        type: {
            options: ['primary', 'secondary'],
            control: {type: 'radio'},
        },
    },
    args: {
        type: 'primary',
        children: "Help Me!!!",
        subject: new Subject<void>()
      },
};


export const Standard = (args: IButtonProps<void>) => (
    <Theme className={"h-full flex"} dataTheme={"spcfy"}>
        <CentralizedPage>
            <Button {...args}>{args.children}</Button>
        </CentralizedPage>
    </Theme>
)
