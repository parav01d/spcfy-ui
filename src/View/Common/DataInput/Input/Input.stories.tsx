import { isDisabled } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { Theme } from 'react-daisyui';
import { Subject } from 'rxjs';
import { Input, IInputProps } from 'View/Common';
import "View/index.css"
import { CentralizedPage } from 'View/Layout';

export default {
    title: 'Common/DataInput/Input',
    component: Input,
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


export const Standard = (args: IInputProps) => (
    <Theme className={"h-full flex flex-1 justify-center items-center"} dataTheme={"spcfy"}>
        <Input {...args} />
    </Theme>
)
export const Disabled = (args: IInputProps) => <Input {...args} isDisabled={true} />
export const Valid = (args: IInputProps) => <Input {...args} isValid={true} />
export const Invalid = (args: IInputProps) => <Input {...args} isValid={false} />
export const Placeholder = (args: IInputProps) => <Input {...args} placeholder={"Name"} value={""} />