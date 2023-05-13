import { useEffect, useRef } from "react";
import styles from "./styles.module.scss"
import lottie from "lottie-web";
import generateAnimation from "./generate_animation.json"

const GenerateAnimation = (props: any) => {
  const container = useRef<any>(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: generateAnimation // JSON data of your Lottie animation
    });

    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <div className={styles.container}>
      <div ref={container} id="animation-container"/>
      <div className={styles.information}>
        <div className="font-black text-white" style={{ fontSize: '3rem' }}>Generating animation...</div>
      </div>
    </div>
  )
}

export default GenerateAnimation;