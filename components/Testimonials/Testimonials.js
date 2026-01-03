import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TESTIMONIALS } from "../../constants";

const Testimonials = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const wrapper = sectionRef.current.querySelector(".testimonials-wrapper");
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
      className="w-full relative select-none mt-20 md:mt-32"
    >
      <div className="section-container py-16 flex flex-col justify-center">
        <div className="flex flex-col testimonials-wrapper">
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
              TESTIMONIALS
            </p>
            <h1 className="text-5xl md:text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
              What Clients Say
            </h1>
            <h2 className="text-xl md:text-[1.65rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal">
              Feedback from founders and teams I&apos;ve worked with.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                className="staggered-reveal relative overflow-hidden rounded-2xl p-6 md:p-8 bg-gradient-to-br from-gray-dark-4/50 to-gray-dark-5/30 border border-gray-dark-3 hover:border-indigo-light/30 transition-all duration-300"
              >
                {/* Quote icon */}
                <div className="absolute top-4 right-4 text-indigo-light/20 text-6xl font-serif">
                  &ldquo;
                </div>

                <div className="relative z-10">
                  <p className="text-gray-light-2 text-sm md:text-base leading-relaxed italic mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  <div className="pt-4 border-t border-gray-dark-3">
                    <p className="text-white font-medium text-sm">
                      {testimonial.attribution}
                    </p>
                    <p className="text-gray-light-3 text-xs mt-1">
                      {testimonial.project}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

