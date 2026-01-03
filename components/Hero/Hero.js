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
      className="w-full flex md:items-center py-8 2xl:container mx-auto xl:px-20 md:px-12 px-4 min-h-screen relative mb-24"
      style={{ opacity: 0 }}
    >
      <style global jsx>
        {`
          .typed-cursor {
            font-size: 2rem;
          }
        `}
      </style>
      <div className="flex flex-col pt-40 md:pt-0 select-none max-w-4xl">
        <h5
          className={`${styles.intro} font-mono font-medium text-indigo-light staggered-reveal`}
        >
          Hi, my name is
        </h5>
        <h1 className={`${styles.heroName} text-white text-5xl md:text-6xl font-semibold leading-tight`}>
          <span className={`relative ${styles.emphasize} staggered-reveal`}>
            Hardik
          </span>
          <span className="staggered-reveal"> Kakkar</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-light-2 font-medium mt-4 staggered-reveal leading-relaxed">
          Senior Full Stack Developer for Dashboards, Internal Tools &amp; E-Commerce
        </h2>
        <p className="text-base md:text-lg text-gray-light-3 mt-3 staggered-reveal leading-relaxed max-w-2xl">
          Helping founders and teams ship production-ready dashboards, internal tools, e-commerce stores, and SaaS MVPs with the MERN stack, GraphQL, and AWS.
        </p>
        
        {/* Typed animation */}
        <p className="mt-4">
          <span
            ref={typedElementRef}
            className="staggered-reveal text-2xl md:text-3xl text-indigo-light font-mono leading-relaxed"
          />
        </p>

        {/* Bullet points */}
        <ul className="mt-6 space-y-2 staggered-reveal">
          {HERO_BULLETS.map((bullet, index) => (
            <li key={index} className="flex items-start text-gray-light-3 text-sm md:text-base">
              <span className="text-indigo-light mr-3 mt-1">▹</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="staggered-reveal mt-4">
          <Profiles />
        </div>
        
        {/* Dual CTAs */}
        <div className="staggered-reveal pt-6 flex flex-wrap gap-4">
          <Button href={`#${MENULINKS[4].ref}`} classes="link" type="primary">
            Book a Free Project Call
          </Button>
          <Button href={`#${MENULINKS[2].ref}`} classes="link" type="secondary">
            View Projects
          </Button>
        </div>
      </div>
      <div
        className="absolute invisible w-4/12 bottom-1.5 lg:visible lg:right-12 2xl:right-16"
        ref={lottieRef}
      />
    </section>
  );
};

export default Hero;
