import FleetPreviewGallery from "@/app/Pages/WebsiteComponents/OurFleet/FleetPreviewGallery";
import KeyFeatureAmenities from "@/app/Pages/WebsiteComponents/OurFleet/KeyFeatureAmenities";


import OurFleetVideoExperience from "@/app/Pages/WebsiteComponents/OurFleet/OurFleetVideoExperience";


const OurFleetDetails = () => {
    return (
        <div className="font-cardo">
            <FleetPreviewGallery />
            <OurFleetVideoExperience />
            <KeyFeatureAmenities />
            
            
        </div>
    );
};

export default OurFleetDetails;