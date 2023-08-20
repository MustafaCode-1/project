'use client'
import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button, Avatar, Alert } from '@mui/material';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const LoginModal = ({ open, onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showAlert, setIsShowAlert] = useState(false);

    const route = useRouter()

    const handleLogin = async () => {
        // Implement your login logic here
        if (email !== "shayan@kal.com" || password !== "Shayan@313") {
          setIsShowAlert(true);
          console.log('Invalid email or password');
        } else {
          setIsShowAlert(false);
          Cookies.set('isLogin', true, { expires: 1 });
          route.push('/admin');
        }
        console.log(email, password);
      };
    return (
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 300,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 2,
                    borderRadius: '4px',
                    display: 'flex',
                    flexDirection: "column",
                    alignItems: 'center'
                }}
            >
                {showAlert && (<Alert variant="filled" severity="error">
                    Invalid Email & Password
                </Alert>)}
                <Avatar sx={{ m: 1, bgcolor: 'rgb(31, 108, 250)' }}>
                    <LoginOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Admin Login
                </Typography>
                <TextField
                    label="Email"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button variant="contained" color="primary" onClick={handleLogin} sx={{ m: 2 }} fullWidth>
                    Login
                </Button>
            </Box>
        </Modal>
    );
};

export default LoginModal;
