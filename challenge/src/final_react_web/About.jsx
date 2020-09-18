import React from 'react'
import Common from './Common';
import { v4 as uuidv4 } from 'uuid';
import Aboutimg from './images/Aboutimg.png';


export default function About() {
    return (
        <>
        <Common 
            key={uuidv4()}
            name="Welcome to About page"
            contact="contact me"
            pathto="/contact"
            imgsrc={Aboutimg}
        />
        </>
    )
}
