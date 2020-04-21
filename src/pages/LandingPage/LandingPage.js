import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner'

export default function LandingPage(){

    return(
        <div>
            <Navbar links={[{link: 'facebook.com', link_title : 'Home'},{link: 'facebook.com', link_title : 'About'}]} logo={{image:'logo1.png', height: '80px'}} />
            <Banner bannerImage={{height: '400px', image: 'banner.svg'}} />
            
        </div>
    )

}

