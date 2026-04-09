import Footer from "../Pages/CommonPages/Footer";
import Navbar from "../Pages/CommonPages/Navbar";


const DashboardLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-[#121212]  md:pt-22 ">
                {children}
            </div>
            <Footer />
            
        </div>
    );
};

export default DashboardLayout;