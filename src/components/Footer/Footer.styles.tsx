import styled, {css} from 'styled-components';

const Footer: any = styled.footer`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    padding: ${theme.size.space.xl} 0;
    width: 100%;
    gap: 1rem;
    
    ${theme.mq.tablet} {
      grid-template-columns: 500px 1fr;
    }
  `}`;

const Aside = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`;

const Section = styled.section`
  ${({ theme }) => css`
    box-shadow: ${theme.utils.createBoxShadow(['medium'])};
    padding: ${theme.size.space.md};
  `}`;

const SectionBody = styled.div`
  
`;

const LogoWrapper = styled.div`

`;

const NewsletterDesc = styled.div`

`;

const NewsletterForm = styled.div`

`;

const SectionHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SocialWrapper = styled.div`
  display: flex;
  gap: .5rem;
  
  ${({theme}) => theme.mq.laptopS} {
    gap: 1rem;
  };
`;



Footer.Aside = Aside;
Footer.Section = Section;
Footer.SectionBody = SectionBody;
Footer.LogoWrapper = LogoWrapper;
Footer.NewsletterDesc = NewsletterDesc;
Footer.NewsletterForm = NewsletterForm;
Footer.SectionHead = SectionHead;
Footer.SocialWrapper = SocialWrapper;

export default Footer;
