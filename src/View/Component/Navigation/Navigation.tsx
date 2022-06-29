import React from 'react';

export const Navigation = () => {

    return (
        <header className='p-3 '>
            <div className="navbar bg-base-100 rounded">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Spcfy</a>
            </div>
            <div className="flex-none">
                <button className="btn btn-primary">Register</button>
            </div>
            </div>
        </header>
    );
};


