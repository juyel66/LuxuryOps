import BookRideToday from '@/app/Pages/WebsiteComponents/BookNow/BookingRideToday';
import BookNowHeroPage from '@/app/Pages/WebsiteComponents/BookNow/BookNowHeroPage';
import React from 'react';

const page = () => {
    return (
        <div>
            <BookNowHeroPage />
            <BookRideToday />
            
        </div>
    );
};

export default page;