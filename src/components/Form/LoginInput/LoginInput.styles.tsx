import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const SPACE = '12px';

const Input:any = styled(motion.div)`
    background-color: ${({theme}) => theme.color.blue}20;
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem;
    padding-top: ${SPACE};
`;

const Background = styled.div`
  ${({ theme }) => css`
    position: relative;
    overflow: hidden;
    padding: 0 ${SPACE};
    
    input:focus + label span, 
    input:valid + label span {
      transform: translateY(0);
      font-size: ${theme.size.font.xs};
    }
    
    input:focus + label span {
      color: ${theme.color.blue};
    }
    
    input:valid + label span {
      color: ${theme.color.gray700};
    }
    
    input:focus + label::after {
      transform: translateX(0);
    }
  `}`;

const Label = styled.label`
  ${({theme}) => css`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    border-bottom: 1px solid ${theme.color.gray500};
    padding-left: ${SPACE};
    
    span {
      display: block;
      color: ${theme.color.gray500};
      transition: transform .2s ease-in-out, font-size .2s ease-in-out;
      transform: translateY(.5rem);
      font-size: ${theme.size.font.md};
    }
    
    ::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -1px;
      height: 100%;
      width: 100%;
      border-bottom: 2px solid ${theme.color.blue};
      transition: transform .2s ease-in-out;
      transform: translate(-100%);
    }
  `}`;

const Text = styled.input`
${({theme}) => css`
  width: 100%;
  height: 100%;
  color: ${theme.color.dark};
  padding: 1.5rem 0 .5rem;
  font-size: ${theme.size.font.md};
  border: none;
  outline: none;
  background-color: transparent;
`}`;

Input.Background = Background;
Input.Label = Label;
Input.Input = Text;

export default Input;
