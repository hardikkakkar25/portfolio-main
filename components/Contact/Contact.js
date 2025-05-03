import { useEffect, useRef } from "react";
import Fade from "react-reveal/Fade";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./Contact.module.scss";
import { MENULINKS } from "../../constants";

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "none" } });

    tl.from(
      sectionRef.current.querySelectorAll(".staggered-reveal"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );

    ScrollTrigger.create({
      trigger: sectionRef.current.querySelector(".contact-wrapper"),
      start: "100px bottom",
      end: "center center",
      scrub: 0,
      animation: tl,
    });

    return () => tl.kill();
  }, [sectionRef]);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[4].ref}
      className="mt-30 w-full relative select-none bg-black pt-20 sm:pt-10 md:pt-5 lg:pt-1 pb-20"
    >
      <div className="section-container flex flex-col justify-center">
        <div className="flex flex-col contact-wrapper">
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-light-1 staggered-reveal">
              RESUME
            </p>
            <h1 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
              My Resume
            </h1>
          </div>
          <h2 className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal">
            Download or View My CV
          </h2>
        </div>

        <Fade bottom distance={"4rem"}>
          <div className="pt-10 sm:mx-auto sm:w-[30rem] md:w-[35rem] staggered-reveal">
            <div className="resume-container">
              <a href="/Hardik-kakkar.pdf" download className={styles.downloadBtn}>
                Download CV
              </a>
              <div className="resume-pdf">
                <iframe
                  src="/Hardik-kakkar.pdf"
                  width="900"
                  height="900"
                  title="Resume PDF"
                  style={{ border: "none" }}
                />
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <style jsx global>{`
        .resume-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }

        .resume-pdf {
          display: flex;
          justify-content: center;
          overflow: hidden;
        }

        .resume-pdf iframe {
          max-width: 100%;
          height: auto;
          aspect-ratio: 1 / 1.414;
        }

        @media (max-width: 768px) {
          .resume-pdf iframe {
            width: 100%;
            height: 600px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;