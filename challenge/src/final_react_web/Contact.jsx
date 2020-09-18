import React, {useState} from 'react';

export default function Contact() {
    const [data, setData] = useState({
        fullName: "",
        phoneNo: "",
        emailID: "",
        comments: "",
    });
    const submitForm = (e) => {
        e.preventDefault();
        alert(`${data.fullName} wants to say ${data.comments}`)

    }
    
    const InputEvents = (event) => {
        const { name, value } = event.target;
        setData(preval => {
            return{
                ...preval,
                [name]: value,
            };
        });
    };
    
    return (
        <>
        <div className="my-5">
            <h1 className="text-center"> Contact US</h1>
        </div>
         <div className="container contact_div">
            <div className="row">
              <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={submitForm}>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                        <input type="text" className="form-control" 
                            id="exampleFormControlInput1" 
                            name="fullName"
                            value={data.fullName}
                            onChange={InputEvents}
                            placeholder="Michel Khonwald" />
                    </div>

                     <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Phone</label>
                        <input type="number" className="form-control" 
                            id="exampleFormControlInput1" 
                            name="phoneNo"
                            value={data.phoneNo}
                            onChange={InputEvents}
                            placeholder="9876543210" />
                    </div>

                   <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" 
                            id="exampleFormControlInput1" 
                            name="emailID"
                            value={data.emailID}
                            onChange={InputEvents}
                            placeholder="name@example.com" />
                    </div>

                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea className="form-control" 
                            id="exampleFormControlTextarea1" 
                            name="comments"
                            value={data.comments}
                            onChange={InputEvents}
                            rows="3"></textarea>
                    </div>

                    <div className="col-12">
                        <button className="btn btn-outline-primary" type="submit">Submit form</button>
                    </div>
                </form>
                </div>
            </div> 
        </div> 
    </>
    )
}
