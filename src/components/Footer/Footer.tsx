import React, { FC } from 'react';
import { hot } from 'react-hot-loader/root';
import { Container, Image, Button, SocialWrapper, BottomNavigation, BasicInput } from 'components';
import { logoDarkRight as logo } from 'assets';
import Element from './Footer.styles';

const Footer: FC = () => {
  return (
    <Section>
      <Element>
        <BottomNavigation />
        <Element.Aside>
          <Element.Spacer>
            <Element.Logo>
              <Image src={logo} alt="black m letter as logo and text MyStartup" />
            </Element.Logo>
            <Element.Rights>
              <AnimateContent onScroll>
                <p>
                  <span>&copy; MyStartup app</span>
                </p>
              </AnimateContent>
              <AnimateContent onScroll delay={0.3}>
                <p>
                  All rights reserved. The best time to plant a tree was 20 years ago. The second
                  best time is now
                </p>
              </AnimateContent>
            </Element.Rights>
            <SocialWrapper />
          </Element.Spacer>
          <Element.Spacer>
            <Element.Newsletter>
              <AnimateContent onScroll delay={0.6} start="top bottom">
                <p>
                  Subscribe to the newsletter and stay up to date with news, personal
                  recommendations and special offers.
                </p>
              </AnimateContent>
              <Element.NewsletterForm>
                <BasicInput
                  name="email"
                  change={() => null}
                  type="email"
                  placeholder="e-mail address"
                />
                <Button>SUBSCRIBE</Button>
              </Element.NewsletterForm>
            </Element.Newsletter>
          </Element.Spacer>
        </Element.Aside>
      </Element>
    </Section>
  );
};

export default hot(Footer);
