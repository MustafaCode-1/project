'use client'
import React from 'react';
import Image from 'next/image';
import { Box, Button, Container, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import { useRouter } from 'next/navigation';
import LoginModal from '../components/modal';


const Home = () => {

  const [openModal, setOpenModal] = React.useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const imageItems = [
    {
      imagePath: '/images/card1.jpg',
      title: '1st Center',
      description: 'Explore a variety of subjects and expand your knowledge with our comprehensive study programs.',
    },
    {
      imagePath: '/images/card2.jpg',
      title: '2nd Center',
      description: 'Immerse yourself in a world of learning and discover new horizons through our engaging courses.',
    },
    {
      imagePath: '/images/card3.jpg',
      title: '3rd Center',
      description: 'Embark on a journey of education and personal growth with our expert instructors and resources.',
    },
    {
      imagePath: '/images/card4.jpg',
      title: '4th Center',
      description: 'Achieve your academic goals and excel in your studies with our tailored learning experiences.',
    },
  ];
  const router = useRouter();
  return (
    <>
      <Button
        variant='contained'
        style={{
          position: 'fixed',
          top: '50%',
          right: '-27px',
          transform: 'translateY(-50%) rotate(90deg)',
          zIndex: 2,
        }}
        className="common-btn"
        onClick={handleOpenModal}
      >
        Admin
      </Button>
      <LoginModal open={openModal} onClose={handleCloseModal} />
      <Box className="content-wrapper">
        <Box className="content-info">
          <TypeAnimation
            sequence={[
              'Welcome to Maktab E Noori Page',
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '1em', display: 'inline-block' }}
            repeat={Infinity}
          />

        </Box>
        <nav className="navbar">
          <Box className="navbar-logo">
            <Box className="logo-container">
              <Image src="/images/logo.png" alt="Logo" width={40} height={40} className="logo-img" />
              <Box className="logo-text">Maktab E Noori</Box>
            </Box>
          </Box>
          <Box className="navbar-menu">
            <Button
              variant='contained'
              style={{ marginRight: '10px' }}
              className="common-btn"
              onClick={() => router.push('/users/application')}
            >
              Admission
            </Button>
          </Box>
        </nav>
        <section className="home-section">
          <TypeAnimation
            sequence={[
              'Discovering the Treasures of Islam!',
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block', fontWeight: 'bold' }}
            repeat={Infinity}
          />
          <Box className="section-text">
            Unlock the Door to Knowledge: Click Below to Begin Your Admission Journey
          </Box>
   
            <Button variant='outlined' sx={{ color: 'white', borderColor: "white" }} onClick={() => router.push('/users/application')}>
              Admission
            </Button>
 
        </section>

        <Box className="box-container">
          {/* Cards */}
          {imageItems.map((item, index) => (
            <Card key={index} sx={{ maxWidth: 300 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="240"
                  image={item.imagePath}
                  alt={item.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>

        {/* Google Maps */}
        <Box className="map-embed">
          <iframe
            title="Embedded Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.575995861145!2d-74.00597428484974!3d40.71277607427848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0x56e2d4e2b9b68607!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1631199687201!5m2!1sen!2sus"
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
          ></iframe>
        </Box>
      </Box>

      {/* Footer */}
      <footer className="footer">
        <Container maxWidth="md">
          <Typography variant="h6" align="center" gutterBottom className="footer-heading">
            Get in touch:
          </Typography>
          <Box className="contact-info">
            <Typography variant="body2" color="textSecondary" align="center">
              Phone: 992299922299
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center">
              Email: noori@kalamnnuri.com
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center">
              Address: Naikwadi Mohalla, Kalamnuri,Dist. Hingoli
            </Typography>
          </Box>
          <div className="divider"></div>
          <Typography variant="body2" color="textSecondary" align="center" className="attribution">
            © {new Date().getFullYear()} Shayan. All rights reserved.
          </Typography>
        </Container>
      </footer>
    </>
  )
}

export default Home;
