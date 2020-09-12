import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

const Input:any = styled(motion.div)`
  ${({ theme }) => css`
    position: relative;
    padding: 0 12px;
    
    input:focus + label span, 
    input:valid + label span {
      transform: translateY(-0.8rem);
      font-size: ${theme.size.font.xs};
    }
    
    input:focus + label{
      border-color: ${theme.color.blue};
    }
    
    input:focus + label span {
      color: ${theme.color.blue};
    }
  `}`;

const Label = styled.label`
  ${({theme}) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-left: 12px;
    pointer-events: none;
    border: 1px solid ${theme.color.dark};
    border-radius: .25rem;
    
    span {
      display: inline-block;
      background-color: ${theme.color.white};
      font-size: inherit;
      color: inherit;
      transition: transform .2s ease-in-out, font-size .2s ease-in-out;
      transform: translateY(0.8rem);
      padding: 0 8px;
    }
  `}`;

const Text = styled.input<{valid: boolean}>`
  ${({theme, valid}) => css`
    width: 100%;
    height: 100%;
    color: ${theme.color.dark};
    padding: 1rem 0;
    font-size: ${theme.size.font.md};
    border: none;
    outline: none;
    ${valid && css` padding-right: 1.5rem; `}
  `}`;

const Icon = styled.span`
  ${({theme}) => css`
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    
    svg {
      width: 1rem;
      height: 1rem;
      color: ${theme.color.green};
    }
  `}`;

Input.Label = Label;
Input.Input = Text;
Input.Icon = Icon;

export default Input;
