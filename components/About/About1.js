import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ABOUT_BIO } from "../../constants";

const About1 = ({ clientHeight }) => {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({
          defaults: { ease: "none", duration: 0.1 },
        })
        .fromTo(
          quoteRef.current.querySelector(".about-1"),
          { opacity: 0.2 },
          { opacity: 1 }
        )
        .to(quoteRef.current.querySelector(".about-1"), {
          opacity: 0.2,
          delay: 0.5,
        })
        .fromTo(
          quoteRef.current.querySelector(".about-2"),
          { opacity: 0.2 },
          { opacity: 1 },
          "<"
        )
        .to(quoteRef.current.querySelector(".about-2"), {
          opacity: 0.2,
          delay: 1,
        });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "center 80%",
        end: "center top",
        scrub: 0,
        animation: tl,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full relative select-none">
      <div
        className={`${
          clientHeight > 650 ? "pt-16 sm:pt-20 md:pt-28 pb-12 sm:pb-16" : "pt-40 sm:pt-60 md:pt-80 pb-40 sm:pb-60 md:pb-72"
        } section-container px-4`}
      >
        <h1
          ref={quoteRef}
          className="font-medium text-xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-[4rem] text-center leading-tight sm:leading-normal"
        >
          <span className="about-1 leading-tight">
            {ABOUT_BIO.paragraph.split(".")[0]}.{" "}
          </span>
          <span className="about-2 leading-tight">
            {ABOUT_BIO.paragraph.split(".").slice(1, 3).join(".")}.
          </span>
        </h1>
      </div>
    </section>
  );
};

export default About1;
