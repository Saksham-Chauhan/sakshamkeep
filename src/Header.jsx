import React from 'react';
import img from './Img/unnamed.png';


const Header = () => {
    return (
        <>
            <div className="head">
                <div className="innerhead">
                <img src={img} alt="Logo" />
                <span ><h4 className="tag">Saksham keep</h4></span>
                </div>     
            </div>
        </>
    );
}

export default Header;
