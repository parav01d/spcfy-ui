
import React, { PropsWithChildren } from 'react';
import { Subject } from 'rxjs';
import { Button as DaisyButton } from "react-daisyui";

export interface IButtonProps<T> extends PropsWithChildren {
    subject: Subject<T>,
    value: T,
    type: "primary" | "secondary" | "info" | "success" | "warning" | "error" 
}

export const Button = <T, >({ children, subject, value, type }: IButtonProps<T>) => {

    return (
        <DaisyButton color={type} onClick={() => subject.next(value)}>
            { children }
        </DaisyButton>
    );
};


