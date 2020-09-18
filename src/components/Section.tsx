import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { Container } from 'components';

const Element = styled.section`
  ${({ theme }) => css`
    margin: ${theme.size.space.xl} 0;

    ${theme.mq.laptopS} {
      margin: ${theme.size.space.xxl} 0;
    }
  `}
`;

interface Props {
  container?: boolean | undefined;
  component?: string | undefined;
}

const defaultProps = {
  container: true,
  component: 'section',
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Section: FC<Props> = ({ container, component, children }) => {
  return container ? (
    <Container>
      <Element>{children}</Element>
    </Container>
  ) : (
    <Element>{children}</Element>
  );
};

Section.defaultProps = defaultProps;

export default Section;
