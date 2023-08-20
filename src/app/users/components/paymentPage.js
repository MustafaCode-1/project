'use client'
import * as React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography,Box } from "@mui/material"

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