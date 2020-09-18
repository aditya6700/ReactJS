import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

export default function Service() {
    return (
        <>
        <div className="my-5">
            <h1 className="text-center"> Our Services </h1>
        </div>
          <div className="container-fluid mb-5">
             <div className="row">
                 <div className='col-10 mx-auto'>
                    <div className="row">
                      {
                          Sdata.map((value, index) => {
                              return <Card
                                key={index}
                                imgsrc={value.imgsrc}
                                title={value.title} 
                              />
                          })
                      }
                    </div>
                 </div>
             </div>
         </div>
          
        </>
    )
}
