import React, { FC } from 'react';
import styled from 'styled-components';
import Article from '../Article/Article';
import mq from '../../theme/breakpoints';
import Container from '../Layout/Container';
import Title from '../Title/Title';
import { ARTICLE_THUMBNAIL_MAX_LENGTH } from '../../utils/constants';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  article:first-child,
  article:last-child {
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0 5px 15px -8px rgba(0,0,0,.5);
  }
  
  article:nth-child(1),
  article:nth-child(2),
  article:nth-child(3) {
    display: none;
  }
  
  ${mq.tablet} {
    grid-template-columns: repeat(2, 1fr);
    
    article:nth-child(2),
    article:nth-child(3) {
      display: flex;
    }
  }
  
  ${mq.laptopS} {
    grid-template-columns: repeat(3, 1fr);
    
    article:nth-child(1) {
      display: flex;
    }
  }
  
`;

const ArticleList: FC = () => (
  <Container>
    <StyledWrapper>
      <Title component="h2">
        Happy start-up Owners are here!
      </Title>
      <StyledGridWrapper>
        <Article
          article={{
            image: 'https://picsum.photos/800',
            imageAlt: 'random image from picsum photos',
            category: 'EVENTS',
            time: 'A year ago',
            title: 'New app to acquire street sellers into a team',
            id: 'id_1',
          }}
          signature={{
            title: 'Edward Pawłowski',
            content: 'Lorem ipsum dolor sit amet',
            image: 'https://picsum.photos/64',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Consequatur dicta dolores enim excepturi facere in minus molestiae
        </Article>

        <Article
          article={{
            image: 'https://picsum.photos/800',
            imageAlt: 'random image from picsum photos',
            category: 'CULTURE_AND_ART',
            time: 'A year ago',
            title: 'New app to acquire street sellers into a team',
            id: 'id_2',
          }}
          signature={{
            title: 'Edward Pawłowski',
            content: 'Lorem ipsum dolor sit amet',
            image: 'https://picsum.photos/64',
          }}
        >
          {`Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Accusantium architecto asperiores atque consectetur cum ducimus eius enim, illo ipsa
           iste magnam magni nulla officia perspiciatis praesentium provident quae quam quasi quibusdam
            quidem quos ratione rerum, tempore vel voluptas? Earum est eveniet, 
            facilis fugiat modi natus nihil officia placeat quas quibusdam quod quos ratione rem sit 
            tenetur, vitae voluptates! Adipisci aperiam beatae consequatur consequuntur corporis eveniet
             fugit incidunt inventore iure, labore, laborum magnam magni molestias natus nisi nostrum
              nulla obcaecati officia provident quam quas reprehenderit sapiente sequi temporibus tenetur 
              totam ullam ut. Atque, dicta dignissimos doloribus laudantium maxime molestias mollitia natus,
               nemo nesciunt ratione sit soluta! Consectetur ducimus eaque illum iste,
                minus molestiae nesciunt possimus repellendus tempora tempore. Ab aliquid assumenda atque beatae cupiditate
                 dolores enim error, explicabo fugit harum hic itaque maxime molestias nam natus necessitatibus
                  nihil odio optio perspiciatis praesentium provident quaerat quas quasi sapiente similique tempore vitae? Amet
                   consequuntur, cupiditate delectus deserunt dolor dolore ducimus, expedita explicabo incidunt inventore
                    maiores necessitatibus nostrum optio perferendis quaerat reiciendis sapiente tempore voluptas!
                     A at, atque consectetur cum cumque delectus ducimus eaque earum enim, magni minima nobis, nostrum
                      perspiciatis qui quos sed suscipit? Architecto corporis eius, harum ipsa nisi perferendis quam saepe.
`.substring(0, ARTICLE_THUMBNAIL_MAX_LENGTH)}
          ...
        </Article>

        <Article
          article={{
            image: 'https://picsum.photos/800',
            imageAlt: 'random image from picsum photos',
            category: 'BUSINESS',
            time: 'A year ago',
            title: 'New app to acquire street sellers into a team',
            id: 'id_3',
          }}
          signature={{
            title: 'Edward Pawłowski',
            content: 'Lorem ipsum dolor sit amet',
            image: 'https://picsum.photos/64',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Consequatur dicta dolores enim excepturi facere in minus molestiae
          necessitatibus pariatur, quidem, recusandae repellat sunt suscipit tempora,
          ullam.
        </Article>

        <Article
          article={{
            image: 'https://picsum.photos/800',
            imageAlt: 'random image from picsum photos',
            category: 'POLITICS',
            time: 'A year ago',
            title: 'New app to acquire street sellers into a team',
            id: 'id_4',
          }}
          signature={{
            title: 'Edward Pawłowski',
            content: 'Lorem ipsum dolor sit amet',
            image: 'https://picsum.photos/64',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Consequatur dicta dolores enim excepturi facere in minus molestiae
          necessitatibus pariatur, quidem, recusandae repellat sunt suscipit tempora,
          ullam veritatis vitae voluptate voluptates...
        </Article>

        <Article
          article={{
            image: 'https://picsum.photos/800',
            imageAlt: 'random image from picsum photos',
            category: 'HEALTH',
            time: 'A year ago',
            title: 'New app to acquire street sellers into a team',
            id: 'id_5',
          }}
          columns="2 / -1"
          signature={{
            title: 'Edward Pawłowski',
            content: 'Lorem ipsum dolor sit amet',
            image: 'https://picsum.photos/64',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Consequatur dicta dolores enim excepturi facere in minus molestiae
          necessitatibus pariatur, quidem, recusandae repellat sunt
        </Article>
      </StyledGridWrapper>
    </StyledWrapper>
  </Container>
);

export default ArticleList;
