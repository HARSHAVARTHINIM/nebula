import React from 'react';
import styled from 'styled-components';
import { FaGamepad } from 'react-icons/fa';
import Typewriter from 'react-typewriter-effect';
import { Link } from 'react-router-dom';
import banner_image from '../../assets/images/banner_image.mp4';

const Banner = () => {
  return (
    <BannerWrapper className='d-flex align-items-center justify-content-start'>
      <video className="banner-video" autoPlay loop muted playsInline>
        <source src={banner_image} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='banner-content w-100 container text-white'>
        <h1
          className='banner-title text-uppercase'
          style={{
            color: 'white',
            fontSize: '58px',
            textShadow: `
              0 0 5px rgba(255, 255, 255, 0.5),
              0 0 10px rgba(255, 255, 255, 0.5),
              0 0 20px rgba(255, 255, 255, 0.5),
              0 0 30px rgba(255, 255, 255, 0.5),
              0 0 40px rgba(255, 255, 255, 0.5),
              0 0 55px rgba(255, 255, 255, 0.5),
              0 0 75px rgba(255, 255, 255, 0.5)
            `,
          }}
        >
          best online games to play
        </h1>
        <div className='lead-text'>
          <Typewriter
            textStyle={{
              color: '#fff',
              fontWeight: 500,
              fontSize: '1.3em',
            }}
            startDelay={2000}
            cursorColor="#fff"
            multiText={[
              'Welcome to NEBULA Games!',
              'Discover a world of fun and inclusive games for everyone.',
              'Whether you\'re into action, puzzles, or just want to have a good time, we\'ve got you covered.',
              'Play, enjoy, and explore with NEBULA Games!'
            ]}
            multiTextDelay={1000}
            typeSpeed={50}
            multiTextLoop
          />
        </div>
        <Link to="/creators">
          <button type="button" className='banner-btn d-flex align-items-center'>
            <span className='btn-icon'>
              <FaGamepad className='text-white' size={25} />
            </span>
            <span className='btn-text text-white'>play now</span>
          </button>
        </Link>
      </div>
    </BannerWrapper>
  );
};

export default Banner;

const BannerWrapper = styled.div`
  position: relative;
  min-height: 768px;
  overflow: hidden;

  .banner-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  .lead-text {
    background: rgba(255, 255, 255, 0.1); /* Semi-transparent background */
    backdrop-filter: blur(10px); /* Blur effect */
    border-radius: 10px; /* Rounded corners */
    border: 1px solid rgba(255, 255, 255, 0.2); /* Light border */
    padding: 20px; /* Spacing inside the box */
    max-width: 600px;
    color: white;
    font-size: 1.8rem;
    margin: 20px 0; /* Space above and below */
  }

  .banner-btn {
    min-width: 140px;
    height: 45px;
    padding: 13px 16px;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    border: 2px solid #6a0dad; /* Border color changed to purple */
    background-color: #6a0dad; /* Background color changed to purple */
    color: #fff; /* Text color changed to white */
    margin-top: 33px;

    .btn-icon {
      margin-right: 16px;
    }

    &:hover {
      background-color: #6600FF; /* Darker purple for hover effect */
      border: 2px solid #6600FF; /* Darker purple border on hover */
      .btn-text {
        color: #fff; /* Keep text color white on hover */
      }
    }
  }

  @media screen and (min-width: 992px) {
    .banner-badge {
      font-size: 26px;
    }
  }
`;
