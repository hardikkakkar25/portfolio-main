import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Tabs from "./Tabs/Tabs";
import StickyScroll from "./StickyScroll/StickyScroll";
import { MENULINKS, WORK_CONTENTS, EXPERIENCE } from "../../constants";

const Work = ({ isDesktop }) => {
  const sectionRef = useRef(null);

  const tabItems = useMemo(
    () => [
      {
        title: "Wellness Extract",
        value: "wellness-extract",
        content: (
          <StickyScroll
            isDesktop={isDesktop}
            contentItems={WORK_CONTENTS.WELLNESS_EXTRACT}
          />
        ),
      },
      {
        title: "Alert Enterprise",
        value: "alert-enterprise",
        content: (
          <StickyScroll
            isDesktop={isDesktop}
            contentItems={WORK_CONTENTS.ALERT_ENTERPRISE}
          />
        ),
      },
      {
        title: "Freelance",
        value: "freelance",
        content: (
          <StickyScroll
            isDesktop={isDesktop}
            contentItems={WORK_CONTENTS.FREELANCE}
          />
        ),
      },
    ],
    [isDesktop]
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({ defaults: { ease: "none" } })
        .from(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          { opacity: 0, duration: 0.5, stagger: 0.5 },
          "<"
        );

      ScrollTrigger.create({
        trigger: sectionRef.current.querySelector(".work-wrapper"),
        start: "100px bottom",
        end: "center center",
        scrub: 0,
        animation: tl,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[3].ref}
      className="w-full relative select-none mt-16 sm:mt-20 md:mt-24 lg:mt-32 mb-16 sm:mb-24 md:mb-32 lg:mb-48"
    >
      <img
        src="/left-pattern.svg"
        className="absolute hidden left-0 -top-1/4 w-1/12 max-w-xs md:block"
        loading="lazy"
        height={700}
        width={320}
        alt=""
      />
      <div className="section-container pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 flex flex-col justify-center">
        <div className="flex flex-col work-wrapper">
          <div className="flex flex-col mb-8 sm:mb-12">
            <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
              EXPERIENCE
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
              Work History
            </h1>
            <h2 className="text-base sm:text-lg md:text-xl lg:text-[1.65rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal">
              2.5+ years building production systems across enterprises and startups.
            </h2>
          </div>

          {/* Experience Timeline Cards */}
          <div className="mt-8 sm:mt-10 md:mt-12 space-y-4 sm:space-y-6 staggered-reveal mb-12 sm:mb-16">
            {EXPERIENCE.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 pb-8 border-l-2 border-gray-dark-3 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-light" />
                
                <div className="bg-gradient-to-br from-gray-dark-4/50 to-gray-dark-5/30 border border-gray-dark-3 rounded-xl p-4 sm:p-6 hover:border-indigo-light/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white">{exp.role}</h3>
                      <p className="text-indigo-light font-medium text-sm sm:text-base">{exp.company}</p>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-light-3 font-mono">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-gray-light-2 text-sm md:text-base mb-4">
                    {exp.description}
                  </p>
                  
                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start text-gray-light-3 text-sm">
                        <span className="text-indigo-light mr-2 mt-1">▹</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-xs text-gray-light-3 font-mono">
                    {exp.tech}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Tabs (existing component) */}
          <div className="mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-12 border-t border-gray-dark-3 mb-[300px] sm:mb-[350px] md:mb-[400px]">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 staggered-reveal">
              Detailed Journey
            </h3>
            <Tabs tabItems={tabItems} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
