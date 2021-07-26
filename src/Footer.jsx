import React from 'react';

function Footer() {
    const d =new Date().getFullYear();

    return (
        <>
            <footer>copyright © {d}</footer>
        </>
    );
}

export default Footer;
