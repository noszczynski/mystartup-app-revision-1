import { createElement } from 'react';
import styled, { css } from 'styled-components';
import { marginable } from 'utils/mixins';

interface BoxProps {
  full?: boolean;
  flex?: boolean;
  wrap?: boolean;
  column?: boolean;
  justifyCenter?: boolean;
  justifyBetween?: boolean;
  justifyAround?: boolean;
  justifyEnd?: boolean;
  alignCenter?: boolean;
  textRight?: boolean;
  textCenter?: boolean;
  inline?: boolean;
  width?: string | number;
  height?: string | number;
  fullWitdh?: boolean;
}

const Box = styled(
  ({
    innerRef,
    full,
    flex,
    wrap,
    column,
    justifyCenter,
    justifyBetween,
    justifyAround,
    justifyEnd,
    alignCenter,
    textRight,
    textCenter,
    inline,
    width,
    height,
    fullWitdh,
    ...props
  }) => createElement('div', { ref: innerRef, ...props }),
)`
	${marginable.css}
	${({ flex }) => flex && css<BoxProps>`
				display: flex;
				${({ full }) =>
    full &&
					css`
						flex: 1;
					`}
				${({ column }) => css`
					flex-direction: ${column ? 'column' : 'row'};
				`}
				${({ wrap }) =>
    css`
						flex-wrap: ${wrap ? 'wrap' : 'nowrap'};
					`}
				${({ justifyCenter }) =>
    justifyCenter &&
					css`
						justify-content: center;
					`}
				${({ justifyBetween }) =>
    justifyBetween &&
					css`
						justify-content: space-between;
					`}
				${({ justifyAround }) =>
    justifyAround &&
					css`
						justify-content: space-around;
					`}
				${({ justifyEnd }) =>
    justifyEnd &&
					css`
						justify-content: flex-end;
					`}
				${({ alignCenter }) =>
    alignCenter &&
					css`
						align-items: center;
					`}
		`
}
	${({ textRight }) =>
    textRight &&
		css`
			text-align: right;
		`}
	${({ textCenter }) =>
    textCenter &&
		css`
			text-align: center;
		`}
	${({ flex, inline }) =>
    !flex &&
		css`
			display: ${inline ? 'inline-block' : 'block'};
		`}
	${({ width }) =>
    width &&
		css`
			width: ${Number.isInteger(width) ? `${width}px` : width};
		`}
	${({ height }) =>
    height &&
		css`
			height: ${Number.isInteger(height) ? `${height}px` : height};
		`}
`;

export default Box;
