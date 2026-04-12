import ExperienceTheHeight from '@/app/Pages/WebsiteComponents/HomePage/ExperienceTheHeight';
import TestimonialHome from '@/app/Pages/WebsiteComponents/HomePage/TestimonialHome';
import ServiceDetailsHeroSection from '@/app/Pages/WebsiteComponents/Services/ServiceDetailsHeroSection';
import ServiceGallery from '@/app/Pages/WebsiteComponents/Services/ServiceGallery';
import ServiceOverview from '@/app/Pages/WebsiteComponents/Services/ServiceOverView';
import YouMayAlsoLike from '@/app/Pages/WebsiteComponents/Services/YouMayAlsoLike';
import React from 'react';

const page = () => {
    return (
        <div>
            <ServiceDetailsHeroSection />
            <ServiceOverview />
            <ServiceGallery />
            <TestimonialHome />
            <YouMayAlsoLike />
            <ExperienceTheHeight />

            
        </div>
    );
};

export default page;