import { Button } from '@/components/ui/button';


import React from 'react';

import Link from 'next/link';

const page = () => {
    return (
        <div>
            This is Home page <br />
           <Link  href="/user-dashboard/dashboard"><Button className='bg-red-500'> Go to dashboard</Button></Link>
          
            
        </div>
    );
};

export default page;