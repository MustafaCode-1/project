'use client'
import { Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Welcome = () => {
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

                <Link href="/users/home">
                    <Button className='common-btn' variant='contained'>
                        Go to Website
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Welcome;
