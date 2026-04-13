import FeaturedAccommodation from "@/app/Pages/WebsiteComponents/Villas/FeaturedAccommodation";
import ThePrivetLifeStyle from "@/app/Pages/WebsiteComponents/Villas/ThePrivetVillaLifeStyle";
import TheVVIPArrivalExperience from "@/app/Pages/WebsiteComponents/Villas/TheVVIPArrivalExperience";
import UniqueConnected from "@/app/Pages/WebsiteComponents/Villas/UniquelyConnected";
import VillaEnquiry from "@/app/Pages/WebsiteComponents/Villas/VillaEnquiry";
import VillasHeroSections from "@/app/Pages/WebsiteComponents/Villas/VillasHeroSections";
import VillasImage from "@/app/Pages/WebsiteComponents/Villas/VillasImage";

const page = () => {
    return (
        <div>
            <VillasHeroSections />
            <UniqueConnected /> 
            <VillasImage />
            <FeaturedAccommodation />
            <ThePrivetLifeStyle />
            <TheVVIPArrivalExperience />
            <VillaEnquiry />
            
        </div>
    );
};

export default page;