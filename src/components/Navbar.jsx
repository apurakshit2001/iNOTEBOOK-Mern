import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/"><em>iNoteBook!📑</em></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><NavLink to="/" className="nav-link" style={({ isActive }) => isActive ? { color: '#0d6efd', fontWeight: 'bold', fontSize: '17px'} : undefined}>Home</NavLink></li>
                            <li className="nav-item"><NavLink to="/about" className="nav-link" style={({ isActive }) => isActive ? { color: '#0d6efd', fontWeight: 'bold', fontSize: '17px'} : undefined}>About</NavLink></li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
