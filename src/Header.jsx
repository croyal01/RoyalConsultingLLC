import React from 'react';
import RMPLogo from '../src/images/RMP_3-01.jpg';

const Header = () => {
    return (
        <div width="100%">
            <img  src={RMPLogo} alt="Royal Consulting Logo" width="800" height="300" />
            <hr />
        </div>
    );
}
export default Header;