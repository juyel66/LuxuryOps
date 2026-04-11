import AboutVVIPHome from '@/app/Pages/WebsiteComponents/AboutVVIP/AboutVVIPHome';
import MeatTheTeam from '@/app/Pages/WebsiteComponents/AboutVVIP/MeetTheTeam';
import OurValues from '@/app/Pages/WebsiteComponents/AboutVVIP/OurValues';
import WhyVVIP from '@/app/Pages/WebsiteComponents/AboutVVIP/WhyVVIP';
import TheVVIPSignatureJourney from '@/app/Pages/WebsiteComponents/HomePage/TheVVIPSignatureJourney';
import React from 'react';

const page = () => {
    return (
        <div>
            <AboutVVIPHome />
            <WhyVVIP />
            <OurValues />
            <TheVVIPSignatureJourney />
            <MeatTheTeam /> 
    
            
        </div>
    );
};

export default page;