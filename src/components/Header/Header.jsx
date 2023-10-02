import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=' mt-10 text-center'>
         
        <Link to={"/"}>Home</Link>
       <Link to={"/login"}>Login</Link>
       
        </div>
    );
};

export default Header;