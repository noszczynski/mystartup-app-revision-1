import styled from 'styled-components';
import { motion } from 'framer-motion';

const Article: any = styled(motion.article)<{columns: string | undefined}>`
  border-radius: .5rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.color.gray50};
  overflow: hidden;
  
  ${({ theme }) => theme.mq.tablet} {
    ${({ columns }) => columns && `grid-column: ${columns}`};
  }
`;

const Top = styled.div`
  height: 200px;
  
  img {
    width: 100%;
  }
`;

const Bottom = styled.div`
  padding: ${({ theme }) => theme.size.space.md};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.size.space.md};
`;

const Category = styled.div`
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.blue};
  font-size: ${({ theme }) => theme.size.font.md};
  
  h6 {
    font-weight: ${({ theme }) => theme.size.weight.bold};
  }
`;

const TimeStamp = styled.p`
  font-size: ${({ theme }) => theme.size.font.xs};
`;

const Body = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;

const BodyInner = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Description = styled.div`

`;

Article.Head = Head;
Article.BodyTop = Top;
Article.BodyBottom = Bottom;
Article.Body = Body;
Article.BodyInner = BodyInner;
Article.Description = Description;
Article.Time = TimeStamp;
Article.Category = Category;

export default Article;
