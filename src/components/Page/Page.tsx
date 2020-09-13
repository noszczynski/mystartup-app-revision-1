import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  overflow: hidden;
`;

const Element = styled(motion.div)`
  position: fixed;
  min-height: 100vh;
  height: 100vh;
  width: 800vw;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: ${({ theme }) => theme.color.dark};
`;

const pageVariants = {
  initial: {
    x: '-400vw',
    transition: {
      duration: 2,
    },
  },
  in: {
    x: '100vw',
    transition: {
      duration: 1,
    },
  },
  out: {
    x: '-400vw',
    transition: {
      duration: 2,
    },
  },
};

const pageTransition = {
  type: 'linear',
  ease: 'anticipate',
};

const Page: FC = ({ children, ...props }) => {
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
      />
      {children}
    </Wrapper>
  );
};

export default Page;
