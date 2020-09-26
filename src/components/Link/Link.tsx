import styled, { css } from 'styled-components';
import { Link as LinkStandard } from 'react-router-dom';
import { generateCss,fontable,FontableProps } from 'utils/mixins';

interface Props extends FontableProps{
  iblock?: boolean;
  block?: boolean;
}

const Link = styled(LinkStandard)<Props>`
  ${fontable.css}

  ${({iblock,block})=> css`
    ${iblock && generateCss('display: inline-block')}

    ${block && generateCss('display: block')}
  `}
`;

Link.displayName = 'Link';

export default Link;
