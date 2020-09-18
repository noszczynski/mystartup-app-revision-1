import styled, {css} from 'styled-components';
import { motion } from 'framer-motion';
import { THEME } from '../../utils/constants';

const Footer: any = styled.footer`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.size.space.xl} 0;
    width: 100%;
    row-gap: 2rem;
    column-gap: 2rem;
    
    ${theme.mq.tablet} {
      display: grid;
      grid-template-columns: 7fr 3fr;
    }
    
    ${theme.mq.laptopM} {
      row-gap: 3rem;
      column-gap: 3rem;
    }

    ${theme.mq.desktopS} {
      row-gap: 5rem;
      column-gap: 5rem;
    }
  `}`;

const Aside = styled.aside`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    row-gap: 2rem;
    column-gap: 2rem;
    order: 1;
    
    ${theme.mq.tablet} {
      order: 2;
    }
  `}`;

const Section = styled.section`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    max-width: 700px;
    row-gap: 2rem;
    column-gap: 2rem;
    order: 2;
    
    ${theme.mq.tablet} {
      order: 1;
    }
    
    ${theme.mq.tabletS} {
      grid-template-columns: repeat(3, 1fr);
    }
    
    article:first-child nav:last-child {
      background-color: ${theme.activeTheme === THEME.LIGHT ? theme.color.yellow : theme.color.dark}40;
    }
  `}`;

const Column = styled.article`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    column-gap: 2rem;
`;

const Navigation = styled(motion.nav)`
  ${({ theme }) => css`
    padding: 1rem;
    background-color: ${theme.color.secondaryBackground};
    border-radius: .5rem;
    
    ul, ol {
      display: flex;
      flex-direction: column;
      padding-left: .5rem;
      margin-top: 1rem;
      row-gap: .25rem;
      column-gap: .25rem;
    }
`}`;

const NavItem = styled(motion.li)`
  ${({ theme }) => css`
    display: inline-block;
    position: relative;
    font-size: ${theme.size.font.s};
    
    ::after {
      content: '';
      position: absolute;
      height: 2px;
      width: 2px;
      background-color: ${theme.color.p};
      border-radius: 100%;
      left: -0.5rem;
      top: 50%;
      transform: translateY(-50%);
    }
    
    :hover {
      ::after {
        background-color: ${theme.color.secondary};
      }
      
      a {
        color: ${theme.color.secondary}
      }
    }
    
    a {
      color: ${theme.color.p};
    }
  `}`;

const Logo = styled.div`
  // 
`;

const Rights = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.size.font.xs};
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    column-gap: 1rem;
    color: ${theme.color.gray700};
  `}`;

const Newsletter = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.size.font.xs};
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    column-gap: 1rem;
    color: ${theme.color.gray700};
    
    ${theme.mq.tabletS} {
      font-size: ${theme.size.font.s};
    }
  `}`;

const NewsletterForm = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    column-gap: 1rem;
    
    ${({theme}) => theme.mq.mobileM} {
      flex-direction: row;
    }
`;

const Spacer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  column-gap: 1rem;
`;

Footer.Aside = Aside;
Footer.Section = Section;
Footer.Column = Column;
Footer.Nav = Navigation;
Footer.Logo = Logo;
Footer.Rights = Rights;
Footer.NewsletterForm = NewsletterForm;
Footer.NavItem = NavItem;
Footer.Spacer = Spacer;
Footer.Newsletter = Newsletter;

export default Footer;
