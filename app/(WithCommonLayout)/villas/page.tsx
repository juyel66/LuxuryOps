import FeaturedAccommodation from "@/app/Pages/WebsiteComponents/Villas/FeaturedAccommodation";
import UniqueConnected from "@/app/Pages/WebsiteComponents/Villas/UniquelyConnected";
import VillasHeroSections from "@/app/Pages/WebsiteComponents/Villas/VillasHeroSections";
import VillasImage from "@/app/Pages/WebsiteComponents/Villas/VillasImage";

const page = () => {
    return (
        <div>
            <VillasHeroSections />
            <UniqueConnected /> 
            <VillasImage />
            <FeaturedAccommodation />
            
        </div>
    );
};

export default page;