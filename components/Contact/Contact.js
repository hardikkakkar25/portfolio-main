import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import GitHubCalendar from "react-github-calendar";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import styles from "./Contact.module.scss";
import { MENULINKS, EXTERNAL_LINKS } from "../../constants";

gsap.registerPlugin(ScrollTrigger);

const PROJECT_TYPES = [
  "Dashboard / Admin Panel",
  "Internal Tool",
  "E-Commerce / Inventory",
  "SaaS MVP",
  "Other",
];

const BUDGET_RANGES = [
  "$250 - $1,000",
  "$1,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+",
  "Let's discuss",
];

const TIMELINES = [
  "ASAP",
  "1-2 weeks",
  "1 month",
  "2-3 months",
  "Flexible",
];

const Contact = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Initialize EmailJS on mount
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    }
  }, []);

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitError("Email service not configured. Please contact me directly.");
      setIsSubmitting(false);
      toast.error("Configuration error. Please use the email link below.");
      return;
    }

    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      project_type: formData.projectType || "Not specified",
      budget: formData.budget || "Not specified",
      timeline: formData.timeline || "Not specified",
      message: formData.message,
      to_name: "Hardik Kakkar",
      reply_to: formData.email,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setIsSubmitting(false);
      setSubmitted(true);
      toast.success("Message sent successfully!");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitError("Failed to send message. Please try again or contact me directly.");
      setIsSubmitting(false);
      toast.error("Failed to send message. Please try again.");
    }
  };

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
            CONTACT
          </p>
          <h1 className="text-5xl font-bold text-gradient staggered-reveal">
            Start a Project
          </h1>
          <h2 className="text-xl md:text-2xl font-light mt-2 staggered-reveal max-w-2xl">
            Looking to build a dashboard, internal tool, e-commerce system, or SaaS MVP? Share a few details and get a response within 24 hours.
          </h2>
        </div>

        {/* Contact Form */}
        <div className="mt-12 staggered-reveal">
          {submitted ? (
            <div className="bg-gradient-to-br from-indigo-light/10 to-indigo-dark/10 border border-indigo-light/30 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-2xl font-semibold text-white mb-2">Message Sent!</h3>
              <p className="text-gray-light-3">
                Thanks for reaching out. I&apos;ll get back to you within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-indigo-light hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-light-2 mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-dark-4/50 border border-gray-dark-3 rounded-lg focus:border-indigo-light focus:outline-none transition-colors text-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-light-2 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-dark-4/50 border border-gray-dark-3 rounded-lg focus:border-indigo-light focus:outline-none transition-colors text-white"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-light-2 mb-2">Project Type *</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-dark-4/50 border border-gray-dark-3 rounded-lg focus:border-indigo-light focus:outline-none transition-colors text-white cursor-pointer"
                >
                  <option value="">Select project type</option>
                  {PROJECT_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-light-2 mb-2">Budget Range</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-dark-4/50 border border-gray-dark-3 rounded-lg focus:border-indigo-light focus:outline-none transition-colors text-white cursor-pointer"
                >
                  <option value="">Select budget range</option>
                  {BUDGET_RANGES.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-light-2 mb-2">Timeline</label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-dark-4/50 border border-gray-dark-3 rounded-lg focus:border-indigo-light focus:outline-none transition-colors text-white cursor-pointer"
                >
                  <option value="">Select timeline</option>
                  {TIMELINES.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm text-gray-light-2 mb-2">Project Details *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-dark-4/50 border border-gray-dark-3 rounded-lg focus:border-indigo-light focus:outline-none transition-colors text-white resize-none"
                  placeholder="Tell me about your project, goals, and any specific requirements..."
                />
              </div>

              {submitError && (
                <div className="md:col-span-2 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <p className="text-red-400 text-sm">{submitError}</p>
                  <p className="text-gray-light-3 text-xs mt-2">
                    You can also reach me at{" "}
                    <a
                      href="mailto:hardikkakkar25@gmail.com"
                      className="text-indigo-light hover:underline"
                    >
                      hardikkakkar25@gmail.com
                    </a>
                  </p>
                </div>
              )}

              <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`${styles.downloadBtn} ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                <div className="flex gap-4">
                  <a
                    href={EXTERNAL_LINKS.fiverr}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-gray-light-3 hover:text-indigo-light transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.527v1.316zm-6.786 1.501h-3.359c.088.546.484.858 1.134.858.546 0 .908-.176 1.134-.527l1.217.674c-.44.659-1.178 1.007-2.351 1.007-1.64 0-2.774-1.091-2.774-2.686 0-1.594 1.105-2.686 2.687-2.686 1.524 0 2.585 1.091 2.585 2.686 0 .234-.03.469-.073.674zm-2.351-1.75c-.557 0-.92.293-1.047.732h2.095c-.088-.498-.469-.732-1.048-.732zM8.397 8.167l-.205-.012h-.476v3.558h-.674V8.155h-.205c-.235 0-.366.147-.366.44v3.118H4.86v-3.118c0-.984.6-1.472 1.532-1.472h.674c.234 0 .454.059.66.147l.67-.983zm-4.09 3.558H2.696v-4.61h1.611v4.61zm0-5.347H2.696V4.855h1.611v1.523zM.828 11.725h1.611V8.167H.828v3.558zM0 3.36C0 1.508 1.535 0 3.422 0h17.156C22.465 0 24 1.508 24 3.36v17.28c0 1.852-1.535 3.36-3.422 3.36H3.422C1.535 24 0 22.492 0 20.64V3.36z"/>
                    </svg>
                    Hire on Fiverr
                  </a>
                  <a
                    href={EXTERNAL_LINKS.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-gray-light-3 hover:text-indigo-light transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Resume Download */}
        <div className="mt-16 staggered-reveal">
          <h3 className="text-2xl font-semibold mb-4">Resume</h3>
          <button onClick={handleDownload} className={styles.downloadBtn}>
            Download CV
          </button>
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
