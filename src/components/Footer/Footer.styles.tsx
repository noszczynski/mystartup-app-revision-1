import styled, {css} from 'styled-components';
import { motion } from 'framer-motion';

const Footer: any = styled.footer`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    padding: ${theme.size.space.xl} 0;
    width: 100%;
    gap: 2rem;
    
    ${theme.mq.tablet} {
      grid-template-columns: 7fr 3fr;
    }
    
    ${theme.mq.laptopM} {
      gap: 3rem;
    }

    ${theme.mq.desktopS} {
      gap: 5rem;
    }
  `}`;

const Aside = styled.aside`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;
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
    gap: 2rem;
    order: 2;
    
    ${theme.mq.tablet} {
      order: 1;
    }
    
    ${theme.mq.tabletL} {
      grid-template-columns: repeat(3, 1fr);
    }
  `}`;

const Column = styled.article`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const Navigation = styled(motion.nav)`
  ${({ theme }) => css`
    padding: 1rem;
    background-color: ${theme.color.gray50};
    border-radius: .5rem;
    
    ul, ol {
      display: flex;
      flex-direction: column;
      padding-left: .5rem;
      margin-top: 1rem;
      gap: .25rem;
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
      height: 1px;
      width: 1px;
      background-color: ${theme.color.dark};
      border-radius: 100%;
      left: -0.5rem;
      top: 50%;
      transform: translateY(-50%);
    }
    
    :hover::after {
      background-color: ${theme.color.blue};
    }
    
    a {
      color: inherit;
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
    gap: 1rem;
  `}`;

const NewsletterForm = styled.div`
    display: flex;
    gap: 1rem;
`;

const SocialWrapper = styled.div`
    display: flex;
    gap: .5rem;
`;

const Spacer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

Footer.Aside = Aside;
Footer.Section = Section;
Footer.Column = Column;
Footer.Nav = Navigation;
Footer.Logo = Logo;
Footer.Rights = Rights;
Footer.NewsletterForm = NewsletterForm;
Footer.SocialWrapper = SocialWrapper;
Footer.NavItem = NavItem;
Footer.Spacer = Spacer;

export default Footer;
