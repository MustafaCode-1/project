'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
  Conditions,
  Form,
  PaymentPage,
} from '../applicationComps/page';
import {
  Card,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from '@mui/material';

const steps = ['Conditions', 'Form', 'Payment'];

const Application = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [termsChecked, setTermsChecked] = React.useState(false); 
  const [showNextButton, setShowNextButton] = React.useState(false);

  const handleNext = () => {
    let newSkipped = skipped;
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleTermsCheck = () => {
    setTermsChecked(!termsChecked);
  };

  const handleShowNextButton = (show) => {
    setShowNextButton(show);
  };

  const components = [<Conditions />, <Form handleShowNextButton={handleShowNextButton}/>, <PaymentPage />];

  return (
    <Card sx={{ margin: '10px', padding: '10px'}}>
      <Box sx={{ width: '100%' }}>
        {console.log('activeStep==', activeStep)}
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps} className="step-lable">
                  {label}
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {/* Render the active component based on activeStep */}
        <Card sx={{ margin: '10px', padding: '10px'}}>

        {components[activeStep]}
        </Card>
       {activeStep === 0 ? ( <FormGroup style={{display: 'flex', justifyContent: 'center'}}>
          <FormControlLabel
            control={
              <Checkbox
                checked={termsChecked}
                onChange={handleTermsCheck}
              />
            }
            label="Please accept the terms and conditions*"
          />
        </FormGroup>) : ''}
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                pt: 2,
              }}
            >
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
    
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                pt: 2,
              }}
            >
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
                variant='contained'
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              {(activeStep === 0 && termsChecked) || (activeStep === 1 && showNextButton) ? (
    <Button onClick={handleNext} variant="contained">
      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
    </Button>
  ) : null}
            </Box>
          </React.Fragment>
        )}
      </Box>
    </Card>
  );
};

export default Application;
