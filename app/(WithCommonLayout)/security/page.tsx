import ArmedUnarmed from '@/app/Pages/WebsiteComponents/Security/ArmedUnarmed';
import ProtectionDelivered from '@/app/Pages/WebsiteComponents/Security/ProtectionDelivered';
import Redefining from '@/app/Pages/WebsiteComponents/Security/Redefining';
import SecurityHeroSections from '@/app/Pages/WebsiteComponents/Security/SecurityHeroSections';
import SecurityIntegrated from '@/app/Pages/WebsiteComponents/Security/SecurityIntegrated';
import TailoredSecuritySolutions from '@/app/Pages/WebsiteComponents/Security/TailoredSecuritySolutions';
import TrustedByTheWorld from '@/app/Pages/WebsiteComponents/Security/TrustedByTheWorld';
import React from 'react';

const page = () => {
    return (
        <div>
            <SecurityHeroSections />
            <Redefining />
            <ProtectionDelivered />
            <TailoredSecuritySolutions />
            <ArmedUnarmed />
            <SecurityIntegrated />
            <TrustedByTheWorld />
            
        </div>
    );
};

export default page;