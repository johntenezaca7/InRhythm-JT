import React from 'react';
import Search from './Search';

const Header = (Props) => {
    return(
        <div className="Header">
            <h1 className="title"> myTunes </h1>
            <Search />
        </div>
    );
}

export default Header;