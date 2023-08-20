'use client'
import * as React from 'react';
import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";


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