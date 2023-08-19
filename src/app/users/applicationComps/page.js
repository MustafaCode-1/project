import * as React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Grid, List, ListItem, ListItemText, Typography, Avatar, Button, TextField, Box, Container } from "@mui/material"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export const Conditions = () => {
  const allConditions = [
    // Conditions for students
    "Maintain a minimum GPA of 3.0 throughout the academic year.",
    "Attend at least 80% of all classes and lectures.",
    "Participate in at least one extracurricular activity each semester.",
    "Complete all assigned coursework and assignments on time.",
    "Adhere to the school's code of conduct and behavior policies.",
    "Participate in mandatory workshops and seminars as required.",
    "Seek academic assistance and tutoring when needed.",
    "Respect the rights and diversity of fellow students and staff.",
    "Abide by the policies regarding the use of electronic devices during class.",
    "Contribute positively to the campus community and environment.",

    // Conditions for parents
    "Attend parent-teacher conferences and meetings as scheduled.",
    "Provide a supportive home environment for the student's education.",
    "Ensure regular communication with teachers and school staff.",
    "Support and monitor the completion of homework and assignments.",
    "Encourage active participation in school-related activities and events.",
    "Notify the school of any changes in contact information promptly.",
    "Respect and adhere to the school's communication channels and policies.",
    "Be familiar with and support the school's code of conduct and policies.",
    "Collaborate with teachers to address academic challenges if they arise.",
    "Encourage a healthy work-life balance and stress management for the student.",
  ];

  return (

    <Grid container spacing={2}>
      <Grid item xs={6} md={6}>
        <Typography sx={{ mt: 4, mb: 2, textAlign: 'center' }} variant="h6" component="div">
          Conditions for childrens
        </Typography>
        <List sx={{
          bgcolor: 'rgb(230 255 238)',
          overflow: 'auto',
          maxHeight: '60vh',
        }}>
          {allConditions.slice(0, 10).map((condition, index) => (
            <ListItem key={index}>
              <ListItemText primary={`${index + 1}. ${condition}`} />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item xs={6} md={6}>
        <Typography sx={{ mt: 4, mb: 2, textAlign: 'center' }} variant="h6" component="div">
          Conditions for parents
        </Typography>
        <List sx={{
          bgcolor: 'rgb(230 255 238)',
          overflow: 'auto',
          maxHeight: '60vh',
        }}>
          {allConditions.slice(10, 20).map((condition, index) => (
            <ListItem key={index}>
              <ListItemText primary={`${index + 1}. ${condition}`} />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  )

}

export const Form = ({ handleShowNextButton }) => {
  const [isFormValid, setIsFormValid] = React.useState(false);


  React.useEffect(() => {
    handleShowNextButton(false)
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    handleShowNextButton(isFormValid);

    const requiredFields = ['name', 'fatherName', 'motherName', 'mobileNumber', 'dob', 'admissionDate', 'aadharNumber', 'branchName'];
    const isAnyFieldEmpty = requiredFields.some((field) => !data.get(field));

    if (isAnyFieldEmpty) {
      alert('Please fill in all required fields.');
    } else {
      console.log('Form submitted',data, {
        name: data.get('name'),
        fatherName: data.get('fatherName'),
        motherName: data.get('motherName'),
        mobileNumber: data.get('mobileNumber'),
        dob: data.get('dob'),
        admissionDate: data.get('admissionDate'),
        aadharNumber: data.get('aadharNumber'),
        branchName: data.get('branchName'),
      });
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
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};



export const PaymentPage = () => {

  return (
    <Box className="payment-card">
      <Card >
        <CardActionArea>
          <CardMedia
            component="img"
            height="auto"
            image="/images/qr-code.jpg"
            alt="QR Code"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Scan the QR code or use the following number:
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              7083368521
            </Typography>
            <Typography variant="body2" color="red">
              Note: After making the payment, please contact this number to confirm your admission.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>


    </Box>

  )
}