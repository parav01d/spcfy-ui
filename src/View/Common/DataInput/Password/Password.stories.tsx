import { isDisabled } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { Theme } from 'react-daisyui';
import { Subject } from 'rxjs';
import { Password, IPasswordProps } from 'View/Common';
import "View/index.css"
import { CentralizedPage } from 'View/Layout';

export default {
    title: 'Common/DataInput/Password',
    component: Password,
    argTypes: {
        isDisabled: {
            options: [true, false, undefined],
            control: { type: 'radio' },
        },
        isValid: {
            options: [true, false, undefined],
            control: { type: 'radio' },
        },
        value: {
            control: { type: 'text' }
        },
        placeholder: {
            control: { type: 'text' }
        }
    },
    args: {
        isDisabled: undefined,
        isValid: undefined,
        value: 'Albert Einstein',
        subject: new Subject<void>(),
        placeholder: "Name"
    },
};


export const Standard = (args: IPasswordProps) => (
    <Theme className={"h-full flex"} dataTheme={"spcfy"}>
        <CentralizedPage>
            <Password {...args} />
        </CentralizedPage>
    </Theme>
)
export const Disabled = (args: IPasswordProps) => <Password {...args} isDisabled={true} />
export const Valid = (args: IPasswordProps) => <Password {...args} isValid={true} />
export const Invalid = (args: IPasswordProps) => <Password {...args} isValid={false} />
export const Placeholder = (args: IPasswordProps) => <Password {...args} placeholder={"Name"} value={""} />