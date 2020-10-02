import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Card({imgsrc, title}) {
    return (
        <>
        <div className="col-md-4 col-10 mx-auto">
            <div className="card mt-4">
                <img className="card-img-top" src={imgsrc} alt={imgsrc} />
                <div className="card-body">
                    <h5 className="card-title font-weight-bold">{title}</h5>
                    <p className="card-text">example text to build on the card title and make up the 
                    bulk of the card's content.</p>
                    <NavLink to="#" className="btn btn-primary">Go somewhere</NavLink>
                </div>
            </div>
        </div>

 
        </>
    )
}
