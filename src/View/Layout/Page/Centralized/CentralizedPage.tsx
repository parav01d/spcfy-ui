import React, { PropsWithChildren } from 'react';

export interface ICentralizedPageProps extends PropsWithChildren {}

export const CentralizedPage = ({ children }: ICentralizedPageProps) => {

    return (
        <div className='container flex'>
            <div className='flex-1 items-center justify-center'>
                { children }
            </div>
        </div>
    );
};


