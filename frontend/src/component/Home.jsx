import React from 'react';
import { Link } from 'react-router-dom'; 
import { RiCompassDiscoverFill } from "react-icons/ri";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

function Home() {
  return (
    <div style={{ position: 'relative', textAlign: 'center', fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif` }}>
      {/* Carousel */}
      <Carousel autoPlay infiniteLoop showThumbs={false} dynamicHeight={false} interval={5000} transitionTime={1000}>
        <div>
          <img
            src="https://images.pexels.com/photos/1450372/pexels-photo-1450372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Travel 1"
            style={{
              width: '100%',
              height: '620px',
              objectFit: 'cover',
              filter: 'brightness(70%)',
            }}
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/9470504/pexels-photo-9470504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Travel 2"
            style={{
              width: '100%',
              height: '620px',
              objectFit: 'cover',
              filter: 'brightness(70%)',
            }}
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/3601453/pexels-photo-3601453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Travel 3"
            style={{
              width: '100%',
              height: '620px',
              objectFit: 'cover',
              filter: 'brightness(70%)',
            }}
          />
        </div>
      </Carousel>

      {/* Overlay Content */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          textAlign: 'center',
          padding: '1rem',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          borderRadius: '10px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
          maxWidth: '90%',
          width: '100%',
        }}
      >
        <h1
          style={{
            fontSize: '2.8rem',
            lineHeight: '1.3',
            fontWeight: '700',
            marginBottom: '1.5rem',
          }}
        >
          Explore the World, One Journey at a Time
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
          Welcome to <strong>Yoliday</strong>, your gateway to unforgettable adventures. Whether you're dreaming of sun-soaked beaches, 
          snow-capped mountains, or bustling city escapes, we’ve got you covered. Embark on a journey tailored to your dreams.
        </p>
        <Link to="/Destination" style={{ textDecoration: 'none' }}>
          <button
            style={{
              backgroundColor: '#3498db',
              color: 'white',
              padding: '0.8rem 1.5rem',
              fontSize: '1rem',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold',
              marginBottom: "10px",
              transition: 'background-color 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#2980b9')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#3498db')}
          >
            <RiCompassDiscoverFill />
            Destination
          </button>
        </Link>
      </div>

      {/* Media Queries for Responsive Design */}
      <style>
        {`
          @media (max-width: 768px) {
            h1 {
              font-size: 2rem;
            }

            p {
              font-size: 1rem;
            }

            .carousel img {
              height: 400px;
            }

            button {
              padding: 0.7rem 1.2rem;
              font-size: 0.9rem;
            }
          }

          @media (max-width: 480px) {
            h1 {
              font-size: 1.6rem;
            }

            p {
              font-size: 0.9rem;
            }

            .carousel img {
              height: 350px;
            }

            button {
              padding: 0.6rem 1rem;
              font-size: 0.8rem;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Home;
