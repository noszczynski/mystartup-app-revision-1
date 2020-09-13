import React, { FC, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled, { css } from 'styled-components';

gsap.registerPlugin(ScrollTrigger);

type PositionTypes = 'left' | 'right' | 'center' | string | undefined;

const Element = styled.div<{ position: PositionTypes }>`
  position: relative;
  display: inline-block;
  ${({ position }) => css`
    margin-right: ${position === 'left' || position === 'center' ? 'auto' : '0'};
    margin-left: ${position === 'right' || position === 'center' ? 'auto' : '0'};
  `};
  overflow: hidden;
`;

const AnimatedElement = styled.div`
  display: inline-block;
`;

const AnimatedSpan = styled.span<{ color: string | undefined }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: ${({ theme, color }) => color || theme.color.gray100};
`;

type Props = {
  onScroll?: boolean | undefined;
  delay?: number | undefined;
  start?: string | undefined;
  color?: string | undefined;
  position?: PositionTypes;
};

const defaultProps = {
  onScroll: false,
  delay: 0,
  start: 'top 80%',
  color: undefined,
  position: 'left',
};

const AnimateContent: FC<Props> = ({ onScroll, start, delay, color, position, children }) => {
  const wrapper = useRef(null);

  const animate = () => {
    if (wrapper !== null && wrapper !== undefined) {
      // @ts-ignore
      const [animatedElement, animatedSpan] = wrapper.current.children;
      const tl = gsap.timeline({ defaults: { ease: 'cubic-bezier(.5,0,0,1)' } });
      gsap.set(animatedSpan, { x: 0 });

      tl.from(animatedSpan, { duration: 0.5, x: '-100%', delay })
        .fromTo(animatedElement, { autoAlpha: 0 }, { duration: 1, autoAlpha: 1 })
        .to(animatedSpan, { duration: 0.5, x: '120%' });

      if (onScroll) {
        ScrollTrigger.create({
          trigger: animatedElement,
          animation: tl,
          start,
        });
      }
    }
  };

  useEffect(animate, [wrapper]);

  return (
    <Element position={position} ref={wrapper}>
      <AnimatedElement>{children}</AnimatedElement>
      <AnimatedSpan color={color} />
    </Element>
  );
};

AnimateContent.defaultProps = defaultProps;

export default AnimateContent;
