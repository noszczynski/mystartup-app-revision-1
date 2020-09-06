import React, { FC, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { Facebook, Twitter, Instagram } from '@material-ui/icons';
import BasicInput from 'components/Form/BasicInput';
import Element from './Footer.styles';
// eslint-disable-next-line import/no-cycle
import { Container, SocialIcon } from '../index';
import { SOCIAL_COLORS } from '../../utils/constants';

const Footer: FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <Container>
      <Element>
        <Element.Aside>
          <Element.LogoWrapper>
            LOGO
          </Element.LogoWrapper>
          <div>
            <Element.NewsletterDesc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, quis.
            </Element.NewsletterDesc>
            <Element.NewsletterForm>
              <BasicInput
                type="text"
                name="newsletter_email"
                change={handleInputChange}
                value={inputValue}
                placeholder="Email address"
              />
              <button type="button">&copy;</button>
            </Element.NewsletterForm>
          </div>
        </Element.Aside>
        <Element.Section>
          <Element.SectionHead>
            <div>select</div>
            <Element.SocialWrapper>
              <SocialIcon background={SOCIAL_COLORS.FACEBOOK} linkTo="/">
                <Facebook />
              </SocialIcon>
              <SocialIcon background={SOCIAL_COLORS.TWITTER} linkTo="/">
                <Twitter />
              </SocialIcon>
              <SocialIcon background={SOCIAL_COLORS.INSTAGRAM} linkTo="/">
                <Instagram />
              </SocialIcon>
            </Element.SocialWrapper>
          </Element.SectionHead>
          <Element.SectionBody>
            <nav>
              <ul>
                <li>Help</li>
                <li>Categories</li>
                <li>New Features</li>
                <li>Contracts</li>
                <li>News</li>
                <li>Projects</li>
              </ul>
            </nav>
          </Element.SectionBody>
        </Element.Section>
      </Element>
    </Container>
  );
};

export default hot(Footer);
