import React, { FC } from 'react';
import styled from 'styled-components';
import { AnimateContent, Description, Section, Title, TwoSideItem } from 'components';
import { hot } from 'react-hot-loader/root';
import { investor, messenger, newsletter, startup } from 'assets';

const Element: any = styled.div`
  display: flex;
  flex-direction: column;
`;

const Head = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 64px;

  article {
    :nth-child(even) > div {
      grid-column: 1;
    }

    :nth-child(odd) > div {
      grid-column: 2;
    }
  }
`;

Element.Head = Head;
Element.Content = Content;

const SideBySideSection: FC = () => {
  const ITEMS = [
    {
      title: 'Startup',
      content:
        'Lead the project and promote it among investors by sharing new products on the project board. Add collaborators to show that your project is popular',
      image: startup,
      alt: '',
    },
    {
      title: 'Investor',
      content:
        'Browse projects by category or by individual leaders and choose the ones you want to support with your funds',
      image: investor,
      alt: '',
    },
    {
      title: 'Messenger',
      content:
        'Use the built-in messenger to communicate more efficiently with new investors or - as an investor, propose your support',
      image: messenger,
      alt: '',
    },
    {
      title: 'Newsletter',
      content:
        'Subscribe to the newsletter to receive the latest cooperation proposals from us and learn more about us',
      image: newsletter,
      alt: '',
    },
  ];

  return (
    <Section>
      <Element>
        <Element.Head>
          <AnimateContent variant="h2">
            <Title>Title</Title>
          </AnimateContent>
          <AnimateContent>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi natus reiciendis
              sed?
            </Description>
          </AnimateContent>
        </Element.Head>
        <Element.Content>
          {ITEMS.map((item) => (
            <TwoSideItem item={item} key={item.title} />
          ))}
        </Element.Content>
      </Element>
    </Section>
  );
};

export default hot(SideBySideSection);
