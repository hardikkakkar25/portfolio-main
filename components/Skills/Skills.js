/* eslint-disable @next/next/no-img-element */
import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MENULINKS, SKILLS } from "../../constants";

const Skills = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const wrapper = sectionRef.current.querySelector(".skills-wrapper");
      const elements = wrapper.querySelectorAll(".staggered-reveal");
      
      // Set initial state
      gsap.set(elements, { opacity: 0, y: 30 });

      const tl = gsap
        .timeline({ defaults: { ease: "power2.out" } })
        .to(
          elements,
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.2 },
          "<"
        );

      const trigger = ScrollTrigger.create({
        trigger: wrapper,
        start: "top 80%",
        toggleActions: "play none none none",
        animation: tl,
      });

      // If already in view, play immediately
      const rect = wrapper.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        tl.play();
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="w-full relative select-none mt-44"
    >
      <div className="section-container py-16 flex flex-col justify-center">
        <img
          src="/right-pattern.svg"
          alt=""
          className="absolute hidden right-0 bottom-2/4 w-2/12 max-w-xs md:block"
          loading="lazy"
          height={700}
          width={320}
        />
        <div className="flex flex-col skills-wrapper">
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
              SKILLS
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
              My Skills
            </h1>
            <h2 className="text-base sm:text-lg md:text-[1.65rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal">
              I like to take responsibility to craft aesthetic user experience
              using modern frontend architecture.{" "}
            </h2>
          </div>
          <div className="mt-10">
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 staggered-reveal">
              LANGUAGES AND TOOLS
            </h3>
            <div className="flex items-center flex-wrap gap-6 staggered-reveal">
              {SKILLS.languagesAndTools.map((skill) => (
                <Image
                  key={skill}
                  src={`/skills/${skill}.svg`}
                  alt={skill}
                  width={50}
                  height={50}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
          <div className="mt-10">
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 staggered-reveal">
              LIBRARIES AND FRAMEWORKS
            </h3>
            <div className="flex flex-wrap gap-6 transform-gpu staggered-reveal">
              {SKILLS.librariesAndFrameworks.map((skill) => (
                <Image
                  key={skill}
                  src={`/skills/${skill}.svg`}
                  alt={skill}
                  width={50}
                  height={50}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
          <div className="flex flex-wrap mt-10">
            <div className="mr-16 xs:mr-20 mb-6 staggered-reveal">
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4">
                DATABASES
              </h3>
              <div className="flex flex-wrap gap-6 transform-gpu">
                {SKILLS.databases.map((skill) => (
                  <Image
                    key={skill}
                    src={`/skills/${skill}.svg`}
                    alt={skill}
                    width={50}
                    height={50}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
            <div className="staggered-reveal">
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4">
                Other
              </h3>
              <div className="flex flex-wrap gap-6 transform-gpu">
                {SKILLS.other.map((skill) => (
                  <Image
                    key={skill}
                    src={`/skills/${skill}.svg`}
                    alt={skill}
                    width={50}
                    height={50}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
