import { useEffect, useRef } from 'react';

import generateAnimation from './generate_animation.json';
import lottie from 'lottie-web';
import styles from './styles.module.scss';

const GenerateAnimation = (props: any) => {
  const container = useRef<any>(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: generateAnimation, // JSON data of your Lottie animation
    });

    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.information}>
        <div
          className='font-black text-white absolute animation-text'
          style={{ fontSize: '3rem' }}
        >
          Generating floorplan
        </div>
        <div ref={container} id='animation-container' className='w-1/2' />
      </div>
    </div>
  );
};

export default GenerateAnimation;
