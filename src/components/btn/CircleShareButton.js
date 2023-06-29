import React from 'react';
import './CircleButton.css';

const CircleShareButton = ({ onClick, children }) => {
  const { useState, useEffect } = React;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const mbScreen = windowWidth <= 500;

  return (
    <>
      {!mbScreen && (
        <button className='circle-button' onClick={onClick}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            class='bi bi-share-fill'
            viewBox='0 0 16 16'
          >
            <path d='M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z' />
          </svg>
          {children}
        </button>
      )}

      {mbScreen && (
        <button className='circle-button-mb' onClick={onClick}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='12'
            height='12'
            fill='currentColor'
            class='bi bi-share-fill'
            viewBox='0 0 16 16'
          >
            <path d='M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z' />
          </svg>
          {children}
        </button>
      )}
    </>
  );
};

export default CircleShareButton;
