import { useState, useEffect, useRef, useLayoutEffect } from "react";
import Typed from "typed.js";
import gsap from "gsap";
import Button from "../Button/Button";
import Profiles from "../Profiles/Profiles";
import styles from "./Hero.module.scss";
import { MENULINKS, TYPED_STRINGS, HERO_BULLETS } from "../../constants";

const options = {
  strings: TYPED_STRINGS,
  typeSpeed: 50,
  startDelay: 1500,
  backSpeed: 50,
  backDelay: 8000,
  loop: true,
};

const Hero = () => {
  const [lottie, setLottie] = useState(null);

  const sectionRef = useRef(null);
  const typedElementRef = useRef(null);
  const lottieRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "none" } })
        .to(sectionRef.current, { opacity: 1, duration: 2 })
        .from(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          { opacity: 0, duration: 0.5, stagger: 0.5 },
          "<"
        );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const typed = new Typed(typedElementRef.current, options);

    return () => typed.destroy();
  }, [typedElementRef]);

  useEffect(() => {
    import("lottie-web").then((Lottie) => setLottie(Lottie.default));
  }, []);

  useEffect(() => {
    if (lottie && lottieRef.current) {
      const animation = lottie.loadAnimation({
        container: lottieRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../../public/lottie/lottie.json"),
      });

      return () => animation.destroy();
    }
  }, [lottie]);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[0].ref}
      className="w-full flex flex-col md:flex-row md:items-center py-8 2xl:container mx-auto xl:px-20 md:px-12 px-4 min-h-screen relative mb-24"
      style={{ opacity: 0 }}
    >
      <style global jsx>
        {`
          .typed-cursor {
            font-size: 1.5rem;
          }
          @media (min-width: 768px) {
            .typed-cursor {
              font-size: 2rem;
            }
          }
        `}
      </style>
      <div className="flex flex-col pt-20 sm:pt-32 md:pt-0 select-none max-w-4xl w-full md:w-auto z-10">
        <h5
          className={`${styles.intro} font-mono font-medium text-indigo-light staggered-reveal text-sm sm:text-base`}
        >
          Hi, my name is
        </h5>
        <h1 className={`${styles.heroName} text-white text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight mb-3 sm:mb-4`}>
          <span className={`relative ${styles.emphasize} staggered-reveal`}>
            Hardik
          </span>
          <span className="staggered-reveal"> Kakkar</span>
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl text-gray-light-2 font-medium mt-4 sm:mt-5 md:mt-6 staggered-reveal leading-relaxed mb-3 sm:mb-4">
          Senior Full Stack Developer for Dashboards, Internal Tools &amp; E-Commerce
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-light-3 mt-3 sm:mt-4 staggered-reveal leading-relaxed max-w-2xl mb-3 sm:mb-4">
          Helping founders and teams ship production-ready dashboards, internal tools, e-commerce stores, and SaaS MVPs with the MERN stack, GraphQL, and AWS.
        </p>
        
        {/* Typed animation */}
        <p className="mt-3 sm:mt-4">
          <span
            ref={typedElementRef}
            className="staggered-reveal text-xl sm:text-2xl md:text-3xl text-indigo-light font-mono leading-relaxed"
          />
        </p>

        {/* Bullet points */}
        <ul className="mt-4 sm:mt-6 space-y-2 staggered-reveal">
          {HERO_BULLETS.map((bullet, index) => (
            <li key={index} className="flex items-start text-gray-light-3 text-xs sm:text-sm md:text-base">
              <span className="text-indigo-light mr-2 sm:mr-3 mt-1 flex-shrink-0">▹</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="staggered-reveal mt-3 sm:mt-4">
          <Profiles />
        </div>
        
        {/* Dual CTAs */}
        <div className="staggered-reveal pt-4 sm:pt-6 mt-2 sm:mt-4 flex flex-col sm:flex-row sm:flex-nowrap gap-4 sm:gap-6">
          <Button href={`#${MENULINKS[4].ref}`} classes="link w-full sm:w-auto sm:flex-shrink-0" type="primary">
            Book a Free Project Call
          </Button>
          <Button href={`#${MENULINKS[2].ref}`} classes="link w-full sm:w-auto sm:flex-shrink-0" type="secondary">
            View Projects
          </Button>
        </div>
      </div>
      {/* Lottie Animation - Now visible on mobile */}
      <div
        className="relative w-full sm:w-1/2 md:w-2/5 lg:w-4/12 mx-auto md:mx-0 md:absolute md:right-8 lg:right-12 xl:right-16 2xl:right-20 bottom-8 md:bottom-1.5 mt-8 md:mt-0 z-0 opacity-80 md:opacity-100"
        ref={lottieRef}
      />
    </section>
  );
};

export default Hero;
