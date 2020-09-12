import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

const Select:any = styled(motion.div)`
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
  ${({ theme }) => css`
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
  ${({ theme, valid }) => css`
    width: 100%;
    height: 100%;
    color: ${theme.color.dark};
    padding: 1rem 0;
    font-size: ${theme.size.font.md};
    border: none;
    outline: none;
    cursor: pointer;
    ${valid && css` padding-right: 1.5rem; `}
  `}`;

const Icon = styled.span<{isOpen: boolean}>`
  ${({ theme, isOpen }) => css`
    position: absolute;
    top: 50%;
    right: 12px;
    transition: transform .2s ease-in-out;
    transform: translateY(-50%) ${isOpen && 'rotate(180deg)'};
    display: flex;
    
    svg {
      width: 1.5rem;
      height: 1.5rem;
      color: ${theme.color.gray500};
    }
  `}`;

const Options = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 130%;
    width: 100%;
    padding-top: ${theme.size.space.md};
    left: 0;
    border-radius: .25rem;
    display: flex;
    flex-direction: column;
    box-shadow: ${theme.utils.createBoxShadow(['medium'])};
    background-color: ${theme.color.white};
    z-index: 100;
  `}`;

const Option = styled.button<{isActive: boolean}>`
  ${({ theme, isActive }) => css`
    background-color: ${isActive ? theme.color.blue : theme.color.white};
    color: ${isActive ? theme.color.white : theme.color.dark};
    padding: ${theme.size.space.sm} ${theme.size.space.md};
    margin-bottom: 1px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  `}`;

Select.Label = Label;
Select.Input = Text;
Select.Icon = Icon;
Select.Options = Options;
Select.Option = Option;

export default Select;
