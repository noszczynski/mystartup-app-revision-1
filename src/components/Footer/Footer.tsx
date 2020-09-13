import React, { FC } from 'react';
import { hot } from 'react-hot-loader/root';
import { Container, Image, Button, SocialWrapper, BottomNavigation, BasicInput } from 'components';
import { logoDarkRight as logo } from 'assets';
import Element from './Footer.styles';

const Footer: FC = () => {
  return (
    <Container>
      <Element>
        <BottomNavigation />
        <Element.Aside>
          <Element.Spacer>
            <Element.Logo>
              <Image src={logo} alt="black m letter as logo and text MyStartup" />
            </Element.Logo>
            <Element.Rights>
              <p>
                <span>&copy; MyStartup app</span>
              </p>
              <p>
                All rights reserved.
                The best time to plant a tree was 20 years ago.
                The second best time is now
              </p>
            </Element.Rights>
            <SocialWrapper />
          </Element.Spacer>
          <Element.Spacer>
            <Element.Newsletter>
              <p>
                Subscribe to the newsletter and stay up to date with
                news, personal recommendations and special offers.
              </p>
              <Element.NewsletterForm>
                <BasicInput
                  name="email"
                  change={() => null}
                  type="email"
                  placeholder="e-mail adress"
                />
                <Button>
                  SUBSCRIBE
                </Button>
              </Element.NewsletterForm>
            </Element.Newsletter>
          </Element.Spacer>
        </Element.Aside>
      </Element>
    </Container>
  );
};

export default hot(Footer);
