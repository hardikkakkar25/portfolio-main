import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ABOUT_BIO } from "../../constants";

const About2 = ({ clientHeight }) => {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({
          defaults: { ease: "none", duration: 0.1 },
        })
        .from(quoteRef.current, { opacity: 0, duration: 2 })
        .to(quoteRef.current.querySelector(".about-3"), {
          backgroundPositionX: "100%",
          duration: 1,
        });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "center bottom",
        end: "center center",
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
          clientHeight > 650 ? "py-40 sm:py-60 md:py-80" : "py-32 sm:py-48 md:py-72"
        } section-container px-4`}
      >
        <div ref={quoteRef} className="text-center">
          <h1 className="font-medium text-xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-[4rem] leading-tight sm:leading-normal">
            I have a{" "}
            <span
              className="about-3 font-bold"
              style={{
                background:
                  "linear-gradient(90deg, #ffffff 0%, #ffffff 50%, #8b31ff 51%, #7000ff 102%)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              strong
            </span>{" "}
            obsession for attention to detail.
          </h1>
          
          {/* Skills list */}
          <div className="mt-8 sm:mt-12 flex flex-col items-center gap-2 sm:gap-3 px-4">
            {ABOUT_BIO.skills.map((skill, index) => (
              <p
                key={index}
                className="text-gray-light-3 text-xs sm:text-sm md:text-base font-mono text-center"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2;
