import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MENULINKS, SERVICES } from "../../constants";

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const wrapper = sectionRef.current.querySelector(".services-wrapper");
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

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById(MENULINKS[4].ref);
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[1].ref}
      className="w-full relative select-none mt-20 md:mt-32"
    >
      <div className="section-container py-16 flex flex-col justify-center">
        <div className="flex flex-col services-wrapper">
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
              SERVICES
            </p>
            <h1 className="text-5xl md:text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
              What I Build
            </h1>
            <h2 className="text-xl md:text-[1.65rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal">
              Specialized services for startups, enterprises, and growing businesses.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className="staggered-reveal group relative overflow-hidden rounded-2xl p-6 md:p-8 transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: `linear-gradient(135deg, ${service.gradient[0]}15 0%, ${service.gradient[1]}15 100%)`,
                  border: `1px solid ${service.gradient[0]}30`,
                }}
              >
                {/* Gradient accent line */}
                <div
                  className="absolute top-0 left-0 w-full h-1"
                  style={{
                    background: `linear-gradient(90deg, ${service.gradient[0]} 0%, ${service.gradient[1]} 100%)`,
                  }}
                />

                <h3
                  className="text-xl md:text-2xl font-semibold mb-3"
                  style={{
                    background: `linear-gradient(90deg, ${service.gradient[0]} 0%, ${service.gradient[1]} 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {service.title}
                </h3>

                <p className="text-gray-light-3 text-sm md:text-base leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-black/30 text-gray-light-2 border border-gray-dark-3"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={scrollToContact}
                  className="text-sm font-medium flex items-center gap-2 transition-all duration-300 group-hover:gap-3 cursor-pointer"
                  style={{ color: service.gradient[0] }}
                >
                  Discuss this service
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

