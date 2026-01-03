import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import styles from "./ProjectTile.module.scss";

const ProjectTile = ({ project, classes, isDesktop }) => {
  const { name, category, description, gradient, url, tech, techStack, featured, responsibilities } = project;
  const projectCard = useRef(null);
  let additionalClasses = "";
  if (classes) {
    additionalClasses = classes;
  }

  const options = {
    max: 10,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
    gyroscope: false,
  };

  useEffect(() => {
    VanillaTilt.init(projectCard.current, options);
  }, [projectCard]);

  return (
    <a
      href={url}
      className={`overflow-hidden rounded-3xl ${additionalClasses}`}
      ref={projectCard}
      target="_blank"
      rel="noreferrer"
      style={{
        maxWidth: isDesktop ? "calc(100vw - 2rem)" : "calc(100vw - 4rem)",
        flex: "1 0 auto",
        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
      }}
    >
      <div
        className={`h-[28rem] w-[38rem] bg-black ${styles.ProjectTile} rounded-3xl relative p-6 flex flex-col justify-between max-w-full`}
        style={{
          background: `linear-gradient(90deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`,
        }}
      >
        <img
          src="/project-bg.svg"
          alt="project"
          className="absolute w-full h-full top-0 left-0 object-cover opacity-30"
          loading="lazy"
        />

        <div
          className="absolute top-0 left-0 w-full h-20"
          style={{
            background: `linear-gradient(180deg, ${gradient[0]} 0%, rgba(0,0,0,0) 100%)`,
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-full h-32"
          style={{
            background: `linear-gradient(0deg, ${gradient[0]} 10%, rgba(0,0,0,0) 100%)`,
          }}
        />

        {/* Featured badge */}
        {featured && (
          <div className="absolute top-4 right-4 z-20">
            <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium">
              Featured
            </span>
          </div>
        )}

        <div className="z-10">
          {/* Category */}
          {category && (
            <p className="text-white/70 text-xs font-mono mb-2 pl-2">
              {category}
            </p>
          )}
          <h1
            className="font-medium text-2xl sm:text-3xl z-10 pl-2 transform-gpu"
            style={{ transform: "translateZ(3rem)" }}
          >
            {name}
          </h1>
        </div>

        <div
          className={`
            ${styles.techIcons} w-1/2 h-full absolute left-24 top-0 sm:flex items-center hidden
          `}
        >
          <div className="flex flex-col pb-8">
              {tech.map((el, i) => (
                <img
                  className={`${i % 2 === 0 && "ml-16"} mb-4`}
                  src={`/projects/tech/${el}.svg`}
                  alt={el}
                  height={45}
                  width={45}
                  key={el}
                  loading="lazy"
                />
              ))}
          </div>
        </div>

        <div className="z-10">
          <h2
            className="text-base z-10 tracking-wide font-medium text-white transform-gpu mb-3"
            style={{ transform: "translateZ(0.8rem)" }}
          >
            {description}
          </h2>
          
          {/* Tech stack line */}
          {techStack && (
            <p className="text-white/60 text-xs font-mono">
              {techStack}
            </p>
          )}
        </div>
      </div>
    </a>
  );
};

export default ProjectTile;
