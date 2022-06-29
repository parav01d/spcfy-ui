
import React from 'react';
import { Subject } from 'rxjs';
import { Input as DaisyInput } from "react-daisyui";

export interface IInputProps {
    subject: Subject<string>,
    value: string,
    placeholder: string,
    isDisabled?: boolean,
    isValid?: boolean
}

export const Input = ({ subject, value, isValid, isDisabled }: IInputProps) => {

    return (
        <DaisyInput
            value={value} 
            onChange={(event) => subject.next(event.target.value)} 
            disabled={isDisabled === true}
            color={
                isValid === undefined 
                    ? "primary" 
                    : isValid === true 
                        ? "success"
                        : "error"
            }/>
    );

};


