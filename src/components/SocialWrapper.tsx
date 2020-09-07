import React, { FC, useContext } from 'react';
import { Facebook, Instagram, Twitter } from '@material-ui/icons';
import styled, { ThemeContext } from 'styled-components';
import { SocialIcon } from './index';

const Element = styled.div`
  display: flex;
  gap: .5rem;
`;

const SocialWrapper: FC = () => {
  const theme = useContext(ThemeContext);

  return (
    <Element>
      <SocialIcon background={theme.color.facebook} linkTo="/">
        <Facebook />
      </SocialIcon>
      <SocialIcon background={theme.color.twitter} linkTo="/">
        <Twitter />
      </SocialIcon>
      <SocialIcon background={theme.color.instagram} linkTo="/">
        <Instagram />
      </SocialIcon>
    </Element>
  );
};

export default SocialWrapper;
