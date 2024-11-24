import React, { useState } from 'react';
import Notes from './Notes';

const Home = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className='container'>
            <div className="container my-3">
                <h1>Add a Note...</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <div className="input-group">
                            <input type={showPassword ? "text" : "password"} className="form-control" id="exampleInputPassword1" />
                            <span className="btn btn-outline-secondary no-bg" onClick={() => setShowPassword(!showPassword)}>
                                <i className={`fa-solid ${showPassword ? "fa-eye" : "fa-eye-slash"}`}></i>
                            </span>
                        </div>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
           <Notes/>
        </div>
    );
};

export default Home;
