import React, { FC, useEffect } from 'react';
import styled  from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const Element = styled(motion.div)`
  min-height: 60vh;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  
  ${({ theme }) => theme.mq.tablet} {
    min-height: 100vh;
  }
`;

const pageVariants = {
  initial: {
    opacity: 0,
    x: '-100vw',
    scale: 0.8
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    x: '100vw',
    scale: 1.2
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 1
};

const Page:FC = ({children, ...props }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      <Element
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        {...props}
      >
        {children}
      </Element>
    </Wrapper>
  );
};

export default Page;
