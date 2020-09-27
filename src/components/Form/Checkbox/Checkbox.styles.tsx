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
    width: 0;
    height: 0;
    border-color: white;
    transform: translate3d(0, 0, 0) rotate(45deg);
  }
  33% {
    width: .5rem;
    height: 0;
    transform: translate3d(0, 0, 0) rotate(45deg);
  }
  100% {
    width: .5rem;
    height: 1rem;
    border-color: white;
    transform: translate3d(0, -1rem, 0) rotate(45deg);
  }
`;

const CheckboxWrapper: any = styled.div`
  position: relative;
  display: flex;
  padding: 0.5rem;
  align-items: center;
`;

const Checkbox = styled.input`
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

        i {
          position: absolute;
          bottom: 0;
          font-style: normal;
          color: ${theme.color.blue};
        }
      }

      span {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 1.5rem;
        width: 1.5rem;
        height: 1.5rem;
        background: transparent;
        border: 2px solid ${theme.color.gray500};
        border-radius: 2px;
        cursor: pointer;
        transition: all 250ms cubic-bezier(0.4, 0, 0.23, 1);
      }
    }

    & + label:hover,
    :focus + label {
      color: ${theme.color.gray900};
    }

    & + label:hover span,
    :focus + label span {
      background: rgba(255, 255, 255, 0.1);
    }

    :checked {
      & + label ins {
        height: 100%;
      }

      & + label span {
        border: 0.75rem solid ${theme.color.blue};
        animation: ${bounce} 200ms cubic-bezier(0.4, 0, 0.23, 1);

        ::before {
          content: '';
          position: absolute;
          top: 0.9rem;
          left: 0.2rem;
          border-right: 3px solid transparent;
          border-bottom: 3px solid transparent;
          transform: rotate(45deg);
          transform-origin: 0 100%;
          animation: ${check} 125ms 250ms cubic-bezier(0.4, 0, 0.23, 1) forwards;
        }
      }
    }
  `}
`;

const CheckboxLabel = styled.label`
  //
`;

CheckboxWrapper.Checkbox = Checkbox;
CheckboxWrapper.Label = CheckboxLabel;

export default CheckboxWrapper;
