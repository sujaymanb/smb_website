import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Cursorbot = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  const style = {
    transform: 'translate(-3%, -8%)',
    width: 1000,
    height: 1000,
    filter: ' blur(75px)',
    backgroundColor: 'rgb(214, 201, 201)',// 'rgb(255, 67, 75)',
    background: 'conic-gradient("#C7D3DD", "#77B6EA")',
    opacity: 0.33,
    zIndex: -1000,
  };

  const variants = {
    default: {
      x: mousePosition.x - 500,
      y: mousePosition.y - 500,
      scale: [1, 1, 1, 1, 1],
      rotate: [0.1, 0, 0, 0, 0],
    },
  };

  // const animate = {
  //   scale: [1, 2, 2, 1, 1],
  //   rotate: [0, 0, 270, 270, 0],
  //   borderRadius: ['20%', '20%', '50%', '50%', '20%'],
  // };

  return (
    <motion.div
      className={`fixed top-0 left-0`}
      style={style}
      variants={variants}
      // animate={animate}
      animate="default"
      transition={{
        x: {
          duration: 0.3,
          ease: 'ease',
          repeat: 0,
          type: 'spring',
          stiffness: 20,
        },
        y: {
          duration: 0.3,
          ease: 'ease',
          repeat: 0,
          type: 'spring',
          stiffness: 20,
        },
        default: {
          duration: 2.5,
          repeat: Infinity,
        },
      }}
    ></motion.div>
  );
};

export default Cursorbot