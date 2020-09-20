import styled, { css, keyframes } from 'styled-components';

const bounce = keyframes`
  0% {
    transform: scale(1);
  }
  33% {
    transform: scale(.85);
  }
  100% {
    transform: scale(1);
  }
`;

const check = keyframes`
  0% {
    transform: translateY(-50%) scale(0);
  }
  33% {
    transform: translateY(-50%) scale(0.5);
  }
  100% {
    transform: translateY(-50%) scale(1);
  }
`;

const CheckboxWrapper: any = styled.div`
  position: relative;
  display: flex;
  padding: 0.5rem;
  align-items: center;
`;

const Radio = styled.input`
  ${({ theme }) => css`
    height: 0;
    width: 0;

    & + label {
      position: relative;
      display: flex;
      align-items: center;
      color: ${theme.color.gray500};
      transition: color 250ms cubic-bezier(0.4, 0, 0.23, 1);
      font-size: ${theme.size.font.md};

      ins {
        position: absolute;
        display: block;
        bottom: 0;
        left: 3rem;
        height: 0;
        width: 100%;
        overflow: hidden;
        text-decoration: none;
        transition: height 300ms cubic-bezier(0.4, 0, 0.23, 1);
        font-size: inherit;

        i {
          position: absolute;
          bottom: 0;
          font-style: normal;
          color: ${theme.color.blue};
          font-size: inherit;
        }
      }

      span {
        font-size: inherit;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 1.5rem;
        width: 1.5rem;
        height: 1.5rem;
        background: transparent;
        border: 2px solid ${theme.color.gray500};
        border-radius: 100%;
        cursor: pointer;
        transition: all 250ms cubic-bezier(0.4, 0, 0.23, 1);
      }
    }

    & + label:hover,
    :focus + label {
      color: ${theme.color.gray900};
    }

    :focus + label span,
    :hover + label span {
      border-color: ${theme.color.gray900};
    }

    & + label:hover span,
    :focus + label span {
      background: transparent;
    }

    :checked {
      & + label ins {
        height: 100%;
      }

      & + label span {
        border: 2px solid ${theme.color.blue};
        background-color: ${theme.color.white};
        animation: ${bounce} 200ms cubic-bezier(0.4, 0, 0.23, 1);

        ::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 5px;
          width: 14px;
          height: 14px;
          border-radius: 100%;
          background-color: ${theme.color.blue};
          border-right: 3px solid transparent;
          border-bottom: 3px solid transparent;
          transform-origin: center;
          transform: scale(0);
          animation: ${check} 125ms 250ms cubic-bezier(0.4, 0, 0.23, 1) forwards;
        }
      }
    }
  `}
`;

const CheckboxLabel = styled.label`
  //
`;

CheckboxWrapper.Radio = Radio;
CheckboxWrapper.Label = CheckboxLabel;

export default CheckboxWrapper;
