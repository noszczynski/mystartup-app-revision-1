import styled, { css } from 'styled-components';
import { marginable, MarginableProps,fontable,FontableProps } from 'utils/mixins';

interface Props extends MarginableProps,FontableProps {
  full?: boolean;
  flex?: boolean;
  wrap?: boolean;
  column?: boolean;
  justify?: 'flex-start' | 'center' | 'space-between' | 'space-around' | 'flex-end';
  alignCenter?: boolean;
  textRight?: boolean;
  textCenter?: boolean;
  inline?: boolean;
  width?: string | number;
  height?: string | number;
}

const Box = styled.div<Props>`
  ${marginable.css}
  ${fontable.css}

  ${({
    flex,
    full,
    column,
    wrap,
    justify,
    alignCenter,
    textRight,
    textCenter,
    inline,
    width,
    height,
  }) =>
    css`
      ${flex &&
      css`
        display: flex;
        ${full &&
        css`
          flex: 1;
        `}
        ${css`
          flex-direction: ${column ? 'column' : 'row'};
        `}
				${css`
          flex-wrap: ${wrap ? 'wrap' : 'nowrap'};
        `}
				${justify &&
        css`
          justify-content: ${justify};
        `}
				${alignCenter &&
        css`
          align-items: center;
        `}
      `}
      ${textRight &&
      css`
        text-align: right;
      `}
				${textCenter &&
      css`
        text-align: center;
      `}
				${!flex &&
      css`
        display: ${inline ? 'inline-block' : 'block'};
      `}
				${width &&
      css`
        width: ${Number.isInteger(width) ? `${width}px` : width};
      `}
				${height &&
      css`
        height: ${Number.isInteger(height) ? `${height}px` : height};
      `}
    `}
`;

export default Box;
