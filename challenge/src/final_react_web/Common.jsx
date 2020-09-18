import React from 'react'
import { NavLink } from 'react-router-dom';


export default function Common({name, contact, pathto, imgsrc}) {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
           <div className="container-fluid">
                <div className="row">
                    <div className='col-10 mx-auto'>
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1> {name} <strong className="brand-name"> The Sudo Club </strong></h1>
                                <h4 className="my-3"> Frontend UI is done using ReactJS</h4>
                                <div className="mt-3">
                                    <NavLink to={pathto} className="btn-get-started"> {contact} </NavLink>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={imgsrc} className="img-fluid animated" alt="homeimg" />
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
