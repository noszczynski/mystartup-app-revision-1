import React, { FC } from 'react';
import {
  StyledBottom,
  StyledTop,
  StyledWrapper,
  StyledHead,
  StyledCategory,
  StyledTimeStamp,
  StyledBody,
  StyledDescription,
  StyledBodyInner,
} from './Article.styles';
import Signature from '../Signature/Signature';
import Title from '../Title/Title';
import Image from '../Image/Image';
import { defaultHover } from '../../utils/animations';
import { CATEGORY_COLORS, CATEGORY_LABELS } from '../../utils/constants';
import { colors } from '../../theme/theme';

interface Props {
  article: {
    image: string,
    imageAlt: string,
    category: string,
    time: string,
    title: string,
    id: string,
  },
  signature: {
    title: string,
    image: string,
    content: string,
  },
  columns?: string
}

const defaultProps = {
  columns: undefined,
};

const Article: FC<Props> = ({
  article,
  signature,
  columns,
  children,
}) => {
  const {
    image,
    imageAlt,
    category,
    time,
    title,
    id,
  } = article;

  return (
    <StyledWrapper columns={columns} whileHover={defaultHover}>
      <StyledTop>
        <Image src={image} alt={imageAlt} />
      </StyledTop>
      <StyledBottom>
        <div>
          <StyledHead>
            <StyledCategory>
              <Title
                component="h6"
                color={CATEGORY_COLORS[category]}
                linkTo={`/category/${category.toLowerCase()}`}
              >
                {CATEGORY_LABELS[category]}
              </Title>
            </StyledCategory>
            <StyledTimeStamp>
              {time}
            </StyledTimeStamp>
          </StyledHead>
          <StyledBody>
            <StyledBodyInner>
              <Title component="h3" color={colors.dark} linkTo={`/news/${id}`}>{title}</Title>
              <StyledDescription>
                {children}
              </StyledDescription>
            </StyledBodyInner>
          </StyledBody>
        </div>
        <Signature name={signature.title} image={signature.image} id="user_1">
          {signature.content}
        </Signature>
      </StyledBottom>
    </StyledWrapper>
  );
};

Article.defaultProps = defaultProps;

export default Article;
