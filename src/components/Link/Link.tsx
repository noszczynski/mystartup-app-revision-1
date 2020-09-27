import styled, { css } from 'styled-components';
import { Link as LinkComponent } from 'react-router-dom';
import { generateCss, fontable, FontableProps } from 'utils/mixins';

interface Props extends FontableProps {
  display: 'inline-block' | 'block';
}

const Link = styled(LinkComponent)<Props>`
  ${fontable.css}

  ${({ display }) => css`
    ${display === 'inline-block' && generateCss('display: inline-block')}

    ${display === 'block' && generateCss('display: block')}
  `}
`;

export default Link;
