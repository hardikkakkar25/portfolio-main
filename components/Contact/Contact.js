import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import GitHubCalendar from "react-github-calendar";
import styles from "./Contact.module.scss";
import { MENULINKS } from "../../constants";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.from(
      sectionRef.current.querySelectorAll(".staggered-reveal"),
      { opacity: 0, y: 50, duration: 0.6, stagger: 0.3 },
      "<"
    );

    ScrollTrigger.create({
      trigger: sectionRef.current.querySelector(".contact-wrapper"),
      start: "100px bottom",
      end: "center center",
      scrub: 0,
      animation: tl,
    });

    gsap.from(sectionRef.current.querySelector(".github-calendar"), {
      scrollTrigger: {
        trigger: sectionRef.current.querySelector(".github-calendar"),
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out",
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Hardik-kakkar.pdf";
    link.setAttribute("download", "Hardik-kakkar.pdf");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[4].ref}
      className="w-full relative select-none bg-black text-white py-20 px-4 sm:px-10"
    >
      <div className="section-container max-w-6xl mx-auto flex flex-col justify-center">
        <div className="flex flex-col contact-wrapper items-start">
          <p className="uppercase tracking-widest text-gray-400 staggered-reveal">
            Resume
          </p>
          <h1 className="text-5xl font-bold text-gradient staggered-reveal">
            My Resume
          </h1>
          <h2 className="text-2xl font-light mt-2 staggered-reveal">
            Download or View My CV
          </h2>
        </div>

        <div className="resume-container mt-10 staggered-reveal">
          <button onClick={handleDownload} className={styles.downloadBtn}>
            Download CV
          </button>

          <div className="resume-frame mt-6 w-full max-w-5xl rounded-xl overflow-hidden shadow-xl border border-gray-700">
            <iframe
              src="/Hardik-kakkar.pdf"
              title="Resume PDF"
              width="100%"
              height="750"
              style={{
                border: "none",
              }}
            />
          </div>
        </div>

        {/* GitHub Commits */}
        <div className="github-calendar mt-20 text-center">
          <h2 className="text-3xl font-semibold mb-6">GitHub Contributions</h2>
          <div className="flex justify-center">
            <GitHubCalendar
              username="hardikkakkar25"
              colorScheme="dark"
              blockSize={15}
              blockMargin={6}
              fontSize={16}
            />
          </div>
        </div>
      </div>

      <style jsx global>{`
        .resume-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        // .text-gradient {
        //   background: linear-gradient(to right, #00f5a0, #00d9f5);
        //   -webkit-background-clip: text;
        //   -webkit-text-fill-color: transparent;
        // }

        @media (max-width: 768px) {
          .resume-frame iframe {
            height: 500px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
