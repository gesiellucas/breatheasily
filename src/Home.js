import React from 'react';
import {Link} from 'react-router-dom';
import Menu from './Menu';

export default function Home(){
    return(
        <>
            <Menu />
            <h2>Trust on your own process</h2>
            <Link to='/app'>
                <button>Start here</button>
            </Link>
        </>
    )
}