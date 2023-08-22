'use client'
import { Button } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

const Welcome = () => {
    const router = useRouter();
    return (
        <div className="welcome-container">
            <div className="welcome-content">
                <Image
                    src="/images/bismillah.png"
                    alt='bismilla-image'
                    className='welcome-image'
                    width={200}
                    height={200}
                />
                <Button className='common-btn' variant='contained' onClick={() => router.push('/users/home')}>
                    Go to Website
                </Button>
            </div>
        </div>
    );
};

export default Welcome;
