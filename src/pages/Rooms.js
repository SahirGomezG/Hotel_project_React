import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import RoomContainer from '../components/RoomContainer';    

const Rooms = () => {
    return (
        <>
        <Hero>
            <Banner title='Our Rooms' subtitle=''>
                <Link to='/' className='btn-primary'>
                    Return home
                </Link>
            </Banner>

        </Hero> 
        <RoomContainer/>
        </>
    )
}

export default Rooms
