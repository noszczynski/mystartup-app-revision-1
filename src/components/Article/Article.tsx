import React, { FC } from 'react';
import { defaultHover } from 'utils/animations';
import { CATEGORY_COLORS, CATEGORY_LABELS } from 'utils/constants';
import colors from 'theme/colors';
import Element from './Article.styles';
import Signature from '../Signature/Signature';
import Title from '../Title/Title';
import Image from '../Image/Image';

interface Props {
  article: {
    image: string;
    imageAlt: string;
    category: string;
    time: string;
    title: string;
    id: string;
  };
  signature: {
    title: string;
    image: string;
    content: string;
  };
  columns?: string;
}

const defaultProps = {
  columns: undefined,
};

const Article: FC<Props> = ({ article, signature, columns, children }) => {
  const { image, imageAlt, category, time, title, id } = article;

  return (
    <Element columns={columns} whileHover={defaultHover}>
      <Element.BodyTop>
        <Image src={image} alt={imageAlt} />
      </Element.BodyTop>
      <Element.BodyBottom>
        <div>
          <Element.Head>
            <Element.Category>
              <Title
                component="h6"
                color={CATEGORY_COLORS[category]}
                linkTo={`/category/${category.toLowerCase()}`}
              >
                {CATEGORY_LABELS[category]}
              </Title>
            </Element.Category>
            <Element.Time>{time}</Element.Time>
          </Element.Head>
          <Element.Body>
            <Element.BodyInner>
              <Title component="h3" color={colors.dark} linkTo={`/news/${id}`}>
                {title}
              </Title>
              <Element.Description>{children}</Element.Description>
            </Element.BodyInner>
          </Element.Body>
        </div>
        <Signature name={signature.title} image={signature.image} id="user_1">
          {signature.content}
        </Signature>
      </Element.BodyBottom>
    </Element>
  );
};

Article.defaultProps = defaultProps;

export default Article;
