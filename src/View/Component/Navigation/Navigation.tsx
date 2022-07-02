import React, { PropsWithChildren } from 'react';

export interface INavigationProps<T> extends PropsWithChildren { }

export const Navigation = <T,>({ children }: INavigationProps<T>) => {

    return (
        <header className='p-3 '>
            <div className="navbar bg-base-100 rounded">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Spcfy</a>
                </div>
                <div className="flex-none">
                    {children}
                </div>
            </div>
        </header>
    );
};


