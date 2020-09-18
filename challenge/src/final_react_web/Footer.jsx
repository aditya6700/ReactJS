import React from 'react'

export default function Footer() {
    const year =  new Date().getFullYear();
    return (
        <>
            <footer className="bg-light text-center">
                <p> ©{year} reserved by The Sudo Club </p>
            </footer>
        </>
    )
}
