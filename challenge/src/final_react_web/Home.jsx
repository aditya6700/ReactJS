import React from 'react';
import Common from './Common';
import { v4 as uuidv4 } from 'uuid';
import homeimg from './images/homeimg.jpg';

export default function Home() {
    return (
        <>
        <Common 
            key={uuidv4()}
            name="Welcome to Home page"
            contact="Get Started"
            pathto="/service"
            imgsrc={homeimg}
        />
        </>
    );
}
