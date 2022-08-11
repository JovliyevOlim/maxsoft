import React from 'react';
import './navbar.css'
import {GrGoogle} from 'react-icons/gr'
import {RiNotification2Fill} from 'react-icons/ri'
import {FaBars} from 'react-icons/fa'
import {AiOutlineSearch} from 'react-icons/ai'
function Navbar({toggle}) {
    return (
        <div className={'navbar'}>
            <div className="wrapper">
                <div className="navbarleft">
                    <div className="logo">
                        <GrGoogle/>
                        <FaBars onClick={toggle}/>
                    </div>
                    <div className={'search'}>
                        <AiOutlineSearch className={'icon'}/>
                        <input type="text" placeholder={'Search...'} size={50}/>
                    </div>
                </div>
                <div className="items">
                    <div className="item">
                        <RiNotification2Fill className={'icon'}/>
                        <div className={'counter'}>1</div>
                    </div>
                    <div className="item">
                        {/*<img src={}*/}
                        {/*     alt=""*/}
                        {/*     className={'avatar'}*/}
                        {/*/>*/}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
