import React, { FC, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Props = {
  parentRef?: React.RefObject<any> | undefined,
  startHeight?: string | number | undefined,
  delay?: number | undefined,
  duration?: number | undefined,
  easing?: string | undefined,
  start?: string | undefined,
};

const defaultProps = {
  parentRef: undefined, // indicates how many parents are above the elements we animate
  startHeight: '+=100',
  delay: 0.3, // the time after which the next child starts the animation
  duration: 2,
  easing: 'Power3.easeOut',
  start: 'top 80%', // when the top of the trigger hits the 80% of the viewport from top (or 20% from bottom)
};

const SmoothShowItems: FC<Props> = ({
  parentRef,
  startHeight,
  delay,
  duration,
  easing,
  start,
  children,
  ...props
}) => {
  const parent = useRef(null);

  useEffect(() => {
    if (parent !== null) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const section = parentRef ? parentRef.current.children : parent.current.children;

      gsap.set([section], {autoAlpha: 0});
      gsap.fromTo(section,
        {
          y: startHeight,
        },
        {
          y: 0,
          autoAlpha: 1,
          stagger: delay,
          duration,
          ease: easing,
          scrollTrigger: {
            trigger: section,
            start,
          },
        });
    }

  }, []);

  return (
    <div ref={parent} {...props}>
      {children}
    </div>
  );
};

SmoothShowItems.defaultProps = defaultProps;

export default SmoothShowItems;
