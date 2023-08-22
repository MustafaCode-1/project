'use client'

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, TextField } from '@mui/material';
import { deleteRequestData, getRequestData } from '@/app/utils/apiCalling';

const ReqDataPage = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [apiData, setApiData] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState(''); // Added search query state

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await getRequestData();
      setApiData(result?.data);
    }
    fetchData();
  }, []);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  }

  // Filter the data based on search query
  const filteredData = apiData.filter(student =>
    student?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student?.admissionDate?.slice(0, 10).includes(searchQuery)
  );

  const handleDelete = async (id) => {
    // const result = await deleteRequestData(id)
  }

  return (
    <Box sx={{ padding: '0px 20px' }}>
      <Box sx={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
        <TextField
          variant='outlined'
          placeholder='Search request'
          sx={{ width: '400px' }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Box>
      {filteredData.map((student, index) => (
        <Accordion expanded={expanded === 'panel' + index} onChange={handleChange('panel' + index)} key={index} className="custom-accordion">
           <AccordionSummary
    expandIcon={<ExpandMoreIcon />}
    aria-controls="panel1bh-content"
    className="custom-summary"
  >
    <Typography variant="h5" component="div" className="custom-heading">
      {student?.name}
    </Typography>
  </AccordionSummary>
  <AccordionDetails className="custom-details">
    <Typography className="custom-text"><span className='req-card-title'>Father Name: </span>{student?.fatherName}</Typography>
    <Typography className="custom-text"><span className='req-card-title'>Phone Number: </span>{student?.mobileNumber}</Typography>
    <Typography className="custom-text"><span className='req-card-title'>Admission Date: </span>{student?.admissionDate?.slice(0, 10)}</Typography>
    <Box className="custom-buttons">
      <Button variant='contained' className="custom-button approve">Approve</Button>
      <Button variant='contained' className="custom-button delete" onClick={() => handleDelete(student._id)}>Delete</Button>
    </Box>
  </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  )
}

export default ReqDataPage;


// {apiData && apiData.map((student,ind=ind+1) => (
//   <Accordion expanded={expanded === 'panel'+ind} onChange={handleChange('panel'+ ind)} className="custom-accordion">
//   <AccordionSummary
//     expandIcon={<ExpandMoreIcon />}
//     aria-controls="panel1bh-content"
//     className="custom-summary"
//   >
//     <Typography variant="h5" component="div" className="custom-heading">
//       {student?.name}
//     </Typography>
//   </AccordionSummary>
//   <AccordionDetails className="custom-details">
//     <Typography className="custom-text"><span className='req-card-title'>Father Name: </span>{student?.fatherName}</Typography>
//     <Typography className="custom-text"><span className='req-card-title'>Phone Number: </span>{student?.mobileNumber}</Typography>
//     <Typography className="custom-text"><span className='req-card-title'>Admission Date: </span>{student?.admissionDate?.slice(0, 10)}</Typography>
//     <Box className="custom-buttons">
//       <Button variant='contained' className="custom-button approve">Approve</Button>
//       <Button variant='contained' className="custom-button delete">Delete</Button>
//     </Box>
//   </AccordionDetails>
// </Accordion>
// ))}