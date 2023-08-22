'use client'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';
import { Button, CardActionArea, CardActions, Box } from '@mui/material';
import { getRequestData } from '../utils/apiCalling';

const Home = () => {
  const [apiDataLngth, setApiDataLngth] = React.useState(0);

  const route = useRouter();
  const myFunc = async () => {
    const result = await getRequestData()
    setApiDataLngth(result?.data?.length);
  }
  React.useEffect(() => {
    myFunc()
  },[])
  return (
    <Box className="box-container">
      <Card sx={{ width: 300 }} className='admin-cards'>
        <CardActionArea>
          <CardContent>
            <Typography  variant="h5" component="div" className='admin-card-titile'>
              {apiDataLngth}
            </Typography>
            <Typography  variant="h5" component="div" >
              Requests
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" variant='outlined' onClick={() => route.push('/admin/request')}>
          View
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ width: 300 }} className='admin-cards'>
        <CardActionArea>
          <CardContent>
            <Typography  variant="h5" component="div" className='admin-card-titile'>
              1
            </Typography>
            <Typography  variant="h5" component="div" >
              Students
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" variant='outlined'>
          View
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ width: 300 }} className='admin-cards'>
        <CardActionArea>
          <CardContent>
            <Typography  variant="h5" component="div" className='admin-card-titile'>
              1
            </Typography>
            <Typography  variant="h5" component="div" >
              Something
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" variant='outlined'>
          View
          </Button>
        </CardActions>
      </Card>
      <Card sx={{ width: 300 }} className='admin-cards'>
        <CardActionArea>
          <CardContent>
            <Typography  variant="h5" component="div" className='admin-card-titile'>
              1
            </Typography>
            <Typography  variant="h5" component="div" >
              Requests
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" variant='outlined'>
          View
          </Button>
        </CardActions>
      </Card>
      </Box >
  )
}

export default Home
