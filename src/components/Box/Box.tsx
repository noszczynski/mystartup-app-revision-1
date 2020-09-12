import styled, { css } from 'styled-components';
import { marginable, MarginableProps, fontable, FontableProps, generateCss } from 'utils/mixins';

interface Props extends MarginableProps, FontableProps {
  full?: boolean;
  flex?: boolean;
  wrap?: boolean;
  column?: boolean;
  justify?: 'flex-start' | 'center' | 'space-between' | 'space-around' | 'flex-end';
  alignCenter?: boolean;
  alignText?: 'left' | 'center' | 'right';
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
    alignText,
    inline,
    width,
    height,
  }) =>
    css`
      ${flex &&
      css`
        display: flex;
        ${full && generateCss(`flex: 1;`)}

        ${generateCss(`flex-direction: ${column ? 'column' : 'row'};`)}

				${generateCss(
          `flex-wrap: ${wrap ? 'wrap' : 'nowrap'};`,
        )}

				${justify && generateCss(`justify-content: ${justify};`)}

				${alignCenter &&
        generateCss(`align-items: center;`)}
      `}

      ${alignText && generateCss(`text-align: ${alignText};`)}

			${!flex &&
      generateCss(`display: ${inline ? 'inline-block' : 'block'};`)}

			${width &&
      generateCss(`width: ${Number.isInteger(width) ? `${width}px` : width};`)}

      ${height &&
      generateCss(`height: ${Number.isInteger(height) ? `${height}px` : height};`)}
    `}
`;

export default Box;
