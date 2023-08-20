'use client'

import { Box, Button, Card, Modal, Typography } from '@mui/material'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import LogoutIcon from '@mui/icons-material/Logout';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const layout = (props) => {
    const [openModal, setOpenModal] = React.useState(false);
    const route = useRouter();
    const handleLogout = () => {
        Cookies.remove('isLogin');
        route.push('/users/home')
    }

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };
    return (
        <>
            <Box className="content-info">
                <TypeAnimation
                    sequence={[
                        'Assalam Alaikum Shayan',
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '1em', display: 'inline-block' }}
                    repeat={Infinity}
                />
                <Button sx={{ position: 'absolute', right: '20px', color: 'white', padding: '20px 0px' }} className='logout-icon' onClick={handleOpenModal}><LogoutIcon /></Button>
            </Box>
            <Modal open={openModal} onClose={handleCloseModal}>
                <Card sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 300,
                    boxShadow: 24,
                    p: 2,
                    borderRadius: '4px',
                    display: 'flex',
                    flexDirection: "column",
                    alignItems: 'center',
                    gap: '20px'
                }}>
                    <Typography component="p" variant="p">
                        Are you sure you want to log out?
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        gap: '20px'
                    }}>
                        <Button onClick={handleLogout} variant='outlined'>Yes</Button>
                        <Button onClick={handleCloseModal} variant='outlined'>No</Button>
                    </Box>
                </Card>
            </Modal>
            {props.children}
        </>
    )
}

export default layout
