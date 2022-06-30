
import React from 'react';
import { Subject } from 'rxjs';
import { Input as DaisyInput } from "react-daisyui";

export interface IPasswordProps {
    subject: Subject<string>,
    value: string,
    placeholder: string,
    isDisabled?: boolean,
    isValid?: boolean
}

export const Password = ({ subject, value, isValid, isDisabled }: IPasswordProps) => {

    return (
        <DaisyInput
            type={"password"}
            value={value}
            onChange={(event) => subject.next(event.target.value)}
            disabled={isDisabled === true}
            color={
                value.length === 0
                    ? "primary"
                    : isValid === true
                        ? "success"
                        : "error"
            } />
    );

};


