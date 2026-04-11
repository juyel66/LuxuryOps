import ExperienceTheHeight from "../Pages/WebsiteComponents/HomePage/ExperienceTheHeight";
import HomePageHeroSections from "../Pages/WebsiteComponents/HomePage/HomePageHeroSections";
import OurFleetHome from "../Pages/WebsiteComponents/HomePage/OurFLeetHome";
import TestimonialHome from "../Pages/WebsiteComponents/HomePage/TestimonialHome";
import TheVVIPLuxuryExperience from "../Pages/WebsiteComponents/HomePage/TheVVIPLuxuryExperience";
import TheVVIPSignatureJourney from "../Pages/WebsiteComponents/HomePage/TheVVIPSignatureJourney";
import VVIPLuxuryService from "../Pages/WebsiteComponents/HomePage/VVIPLuxuryService";


const HomePage = () => {
    return (
        <div>
            <HomePageHeroSections />
            <VVIPLuxuryService />
            <TheVVIPLuxuryExperience />
            <TheVVIPSignatureJourney />
            <OurFleetHome />
            <TestimonialHome />
            <ExperienceTheHeight />
            
        </div>
    );
};

export default HomePage;