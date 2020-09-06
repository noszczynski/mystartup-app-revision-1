import React, { FC} from 'react';
import { hot } from 'react-hot-loader/root';
import { Facebook, Twitter, Instagram} from '@material-ui/icons';
import BasicInput from 'components/Form/BasicInput';
import { Link } from 'react-router-dom';
import Element from './Footer.styles';
// eslint-disable-next-line import/no-cycle
import { Container, SocialIcon, Image, Title, Description, Button } from '../index';
import { SOCIAL_COLORS } from '../../utils/constants';
import { logoDarkRight as logo } from '../../assets';
import { colors } from '../../theme/theme';
import { defaultHover } from '../../utils/animations';

const SocialWrapper = (
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
);

const BOTTOM_NAV_ITEMS = [
  [{
    title: 'USER',
    items: [
      {label: 'Help', to: '/'},
      {label: 'Categories', to: '/'},
      {label: 'New', to: '/'},
    ]
  }, {
    title: 'PROJECTS',
    items: [
      {label: 'Help', to: '/'},
      {label: 'Categories', to: '/'},
      {label: 'New', to: '/'},
      {label: 'Contracts', to: '/'},
      {label: 'Comments', to: '/'},
      {label: 'Lorem', to: '/'},
      {label: 'Ipsum', to: '/'},
      {label: 'Dolor sit', to: '/'},
    ]
  }], [{
    title: 'SUPPORT',
    items: [
      {label: 'Help', to: '/'},
      {label: 'Categories', to: '/'},
      {label: 'New', to: '/'},
      {label: 'Lorem', to: '/'},
      {label: 'Ipsum', to: '/'},
      {label: 'Dolor sit', to: '/'},
    ]
  }, {
    title: 'NEWS',
    items: [
      {label: 'Help', to: '/'},
      {label: 'Categories', to: '/'},
      {label: 'New', to: '/'},
      {label: 'Contracts', to: '/'},
    ]
  }], [{
    title: 'NAVIGATION',
    items: [
      {label: 'Help', to: '/'},
      {label: 'Categories', to: '/'},
      {label: 'New', to: '/'},
      {label: 'News', to: '/'},
    ]
  }, {
    title: 'OTHERS',
    items: [
      {label: 'Help', to: '/'},
      {label: 'Categories', to: '/'},
      {label: 'New', to: '/'},
      {label: 'News', to: '/'},
    ]
  }]
];

const Footer: FC = () => {
  return (
    <Container>
      <Element>
        <Element.Section>
          {BOTTOM_NAV_ITEMS.map((columns) => (
            <Element.Column key={columns[0].title}>
              {columns.map(({title, items}) => (
                <Element.Nav whileHover={defaultHover} key={title}>
                  <Title component="h6">{title}</Title>
                  <ul>
                    {items.map(({label, to}) => (
                      <Element.NavItem
                        key={label}
                        whileHover={{
                          color: colors.blue
                        }}
                      >
                        <Link to={to}>{label}</Link>
                      </Element.NavItem>
                    ))}
                  </ul>
                </Element.Nav>
              ))}
            </Element.Column>
          ))}
        </Element.Section>
        <Element.Aside>
          <Element.Spacer>
            <Element.Logo>
              <Image src={logo} alt="black m letter as logo" />
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
            {SocialWrapper}
          </Element.Spacer>
          <Element.Spacer>
            <Description small>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Eaque minima nobis.
            </Description>
            <Element.NewsletterForm>
              <BasicInput
                name="email"
                change={() => null}
                type="email"
              />
              <Button>
                SUBSCRIBE
              </Button>
            </Element.NewsletterForm>
          </Element.Spacer>
        </Element.Aside>
      </Element>
    </Container>
  );
};

export default hot(Footer);
