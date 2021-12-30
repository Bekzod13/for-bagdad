import React from 'react';

// import components
import Hero from '../components/hero/Hero';
import StartTime from '../components/startTime/StartTime';
import Communitte from '../components/communitte/Communitte';
import Speaker from '../components/speakers/Speaker';
import Schedule from '../components/schedule/Schedule';
import Expect from '../components/expect/Expect';
import Paper from '../components/paper/Paper';
import Stay from '../components/stay/Stay';
import Academic from '../components/academic/Academic';
import Map from '../components/map/Map';
import Contact from '../components/contact/Contact';

const Home = () => {
    return (
        <>
            <Hero/>
            <StartTime/>
            <Communitte />
            <Speaker />
            <Schedule />
            <Expect />
            <Paper />
            <Stay />
            <Academic />
            <Map />
            <Contact />
        </>
    )
}

export default Home
