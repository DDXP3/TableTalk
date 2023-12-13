import React from 'react'
import Home from '/images/house.png'
import Search from '/images/search.png'
import Profile from '/images/profile.png'
import Nav from 'react-bootstrap/Nav';
import NewsFeed from '../pages/NewsFeed'
import ProfilePage from '../pages/ProfilePage'
import SearchPage from '../pages/SearchPage';

export default function NavBar () {

    return (
        <>
            <div className='fixed-left'>
                <Nav.Link href={NewsFeed}>
                    <img src={Home} alt='/feed'></img>
                </Nav.Link>
                <Nav.Link href={SearchPage}>
                    <img src={Search} alt='/search'></img>
                </Nav.Link>
                <Nav.Link href={ProfilePage}>
                    <img src={Profile} alt='/profile'></img>
                </Nav.Link>
            </div>
        </>
    )
}