import Bespoke from "@/app/Pages/WebsiteComponents/Concierge/Bespoke";
import BeyondTransportation from "@/app/Pages/WebsiteComponents/Concierge/BeyondTransportation";
import ConciergeHeroSections from "@/app/Pages/WebsiteComponents/Concierge/ConciergeHeroSections";
import Discretion from "@/app/Pages/WebsiteComponents/Concierge/Discretion";
import ConciergeImage from "@/app/Pages/WebsiteComponents/Concierge/ImageConcierge";
import StandardReserved from "@/app/Pages/WebsiteComponents/Concierge/StandardReserved";
import TheArtEffortLessTravel from "@/app/Pages/WebsiteComponents/Concierge/TheArtEffortLessTravel";


const page = () => {
    return (
        <div>
            <ConciergeHeroSections />
            <BeyondTransportation />
            <StandardReserved />
            <Bespoke />
            <ConciergeImage />
            <Discretion />
            <TheArtEffortLessTravel />
            
            
        </div>
    );
};

export default page;