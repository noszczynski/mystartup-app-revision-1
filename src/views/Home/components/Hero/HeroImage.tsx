import React, { useEffect, useRef } from 'react';
import { hot } from 'react-hot-loader/root';
import gsap from 'gsap';
import { ReactComponent as VectorHero } from 'assets/hero.svg';
import Element from './Hero.styles';

const HeroImage = () => {
  const heroRef = useRef(null);

  const circlesIntro = (circles: any) => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });
    const data = [
      { x: '0px', y: '-=10px' },
      { x: '+=10px', y: '-=10px' },
      { x: '+=10px', y: '+=10px' },
      { x: '-=10px', y: '+=10px' },
      { x: '-=10px', y: '-=10px' },
    ];
    circles.forEach((circle: gsap.TweenTarget, index: number) => {
      tl.fromTo(
        circle,
        { ...data[index], duration: 3, transformOrigin: 'center' },
        { x: 0, y: 0, autoAlpha: 1 },
      );
    });
    return tl;
  };

  const manAnimation = (man: any) => {
    const tl = gsap.timeline({
      defaults: { transformOrigin: 'center', ease: 'power3.inOut', autoAlpha: 0 },
    });
    tl.fromTo(man, { x: '+=200%', y: 0 }, { x: 0, y: 0, duration: 1.5, autoAlpha: 1 });
    return tl;
  };

  const mainCircleIntro = (circle: any) => {
    const tl = gsap.timeline({ defaults: { transformOrigin: 'center' } });
    tl.fromTo(circle, { scale: 0 }, { scale: 1, duration: 1, autoAlpha: 1 });
    return tl;
  };

  useEffect(() => {
    if (heroRef !== null) {
      const parent = heroRef.current;
      // @ts-ignore
      const circle = parent.querySelector('#circle');
      // @ts-ignore
      const man = parent.querySelector('#man');
      // @ts-ignore
      const circles = parent.querySelectorAll("[id^='circle_']");

      gsap.set([circles, circle], { autoAlpha: 0 });
      const master = gsap.timeline({ delay: 0.2 });
      master
        .add(() => manAnimation(man))
        .add(() => circlesIntro(circles))
        .add(() => mainCircleIntro(circle));
    }
  }, [heroRef]);

  return (
    <Element.ImageWrapper>
      <VectorHero ref={heroRef} />
    </Element.ImageWrapper>
  );
};

export default hot(HeroImage);
