'use client'
import * as React from 'react';
import { Typography, Avatar, Button, TextField, Box, Container, Alert, Snackbar } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import axios from 'axios'

export const Form = ({ handleShowNextButton }) => {
    const [isFormValid, setIsFormValid] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [message, setMessage] = React.useState(false);



    React.useEffect(() => {
        handleShowNextButton(false)
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true)

        const data = new FormData(event.currentTarget);

        const requiredFields = [
            'name',
            'fatherName',
            'motherName',
            'mobileNumber',
            'dob',
            'admissionDate',
            'aadharNumber',
            'branchName'
        ];

        const isAnyFieldEmpty = requiredFields.some((field) => !data.get(field));

        if (isAnyFieldEmpty) {
            alert('Please fill in all required fields.');
        } else {
            try {
                const payload = {
                    name: data.get('name'),
                    fatherName: data.get('fatherName'),
                    motherName: data.get('motherName'),
                    mobileNumber: data.get('mobileNumber'),
                    dob: data.get('dob'),
                    admissionDate: data.get('admissionDate'),
                    aadharNumber: data.get('aadharNumber'),
                    branchName: data.get('branchName'),
                };

                handleShowNextButton(true);
                setIsLoading(false)
                setMessage(true);
                const result = await axios.post('/api/users/students', payload);

            } catch (error) {
                // Handle error here
            }
        }
    };


    const handleInputChange = () => {
        const data = new FormData(document.querySelector('form'));
        setIsFormValid(
            requiredFields.every((field) => !!data.get(field))
        );

    };

    const requiredFields = ['name', 'fatherName', 'motherName', 'mobileNumber', 'dob', 'admissionDate', 'aadharNumber', 'branchName'];

    return (

        <Container component="main" maxWidth="xs">

            <Snackbar open={message} autoHideDuration={3000} >
                <Alert severity="success" sx={{ width: '100%' }} >
                  Successfully sent the application!
                </Alert>
            </Snackbar>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Admission Form
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    {requiredFields.map((field) => (
                        <TextField
                            key={field}
                            required
                            fullWidth
                            id={field}
                            label={
                                field === 'dob'
                                    ? 'Date of Birth'
                                    : field === 'admissionDate'
                                        ? 'Date of Admission'
                                        : field.replace(/([A-Z])/g, ' $1')
                            }
                            name={field}
                            type={
                                field === 'dob' || field === 'admissionDate'
                                    ? 'date'
                                    : field === 'age' || field === 'mobileNumber' || field === 'aadharNumber'
                                        ? 'number'
                                        : 'text'
                            }
                            InputLabelProps={
                                (field === 'dob' || field === 'admissionDate') && { shrink: true }}
                            sx={{ mb: 2 }}
                            onChange={handleInputChange}
                        />
                    ))}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        disabled={!isFormValid}
                    >
                        {isLoading ? 'Submittiing....' : 'Submit'}
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};