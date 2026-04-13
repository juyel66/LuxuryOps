import PropertyGallery from "@/app/Pages/WebsiteComponents/Villas/VillaDetails.tsx/PropertyGallery";
import VillaDetailsCard from "@/app/Pages/WebsiteComponents/Villas/VillaDetails.tsx/VillaDetailsCard";
import VillaDetailsKeyFeatures from "@/app/Pages/WebsiteComponents/Villas/VillaDetails.tsx/VillaDetailsKeyFeatures";

const page = () => {
    return (
        <div>
            <PropertyGallery />
            <VillaDetailsKeyFeatures />
            <VillaDetailsCard />
            
        </div>
    );
};

export default page;