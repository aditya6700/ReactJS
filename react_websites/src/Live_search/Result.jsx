import React from 'react';

export default function Result({query}) {
    const img =`https://source.unsplash.com/600x400/?${query}`
    return(
        <>
            <div>
                <img src={img} alt="searchimage" />
            </div>
        </>
    )
};
