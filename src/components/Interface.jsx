import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";

const Section = (props) => {
  const { children, mobileTop } = props;
  return (
    <motion.section
      className={`
                        h-screen w-screen p-8 max-w-screen-2xl mx-auto
                        flex flex-col items-start 
                        ${
                          mobileTop
                            ? "justify-start md:justify-center"
                            : "justify-center"
                        }
                        `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.5,
        },
      }}>
      {children}
    </motion.section>
  );
};

export const Interface = (props) => {
  const { setSection } = props;
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection setSection={setSection} />
      <SkillSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

const AboutSection = (props) => {
  const { setSection } = props;
  return (
    <Section mobileTop>
      <h1 className="text-4xl md:text-6xl font-extrabold leading-snug mt-8 md:mt-0">
        Hi, My
        <br />
        name is Ying.
      </h1>
      <motion.p
        className="text-lg text-gray-600 mt-4"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}>
        I love creating functional and beautiful software.
      </motion.p>
      <motion.button
        onClick={() => setSection(3)}
        className={`bg-indigo-600 text-white py-4 px-8 
      rounded-lg font-bold text-lg mt-4 md:mt-16`}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}>
        Get in touch
      </motion.button>
    </Section>
  );
};

const skills = [
  { name: "JavaScript", position: { side: "left", order: 1 } },
  { name: "TypeScript", position: { side: "right", order: 1 } },
  { name: "React", position: { side: "left", order: 2 } },
  { name: "HTML/CSS", position: { side: "right", order: 2 } },
  { name: "Python", position: { side: "left", order: 3 } },
  { name: "Agile", position: { side: "right", order: 3 } },
  { name: "MySQL", position: { side: "left", order: 4 } },
  { name: "MongoDB", position: { side: "right", order: 4 } },
  { name: "Docker", position: { side: "left", order: 5 } },
  { name: "Azure", position: { side: "right", order: 5 } },
];

const SkillSection = () => {
  // Create fixed positions based on skill data with horizontal variation
  const [positions] = useState(() => {
    return skills.map((skill) => {
      const { side, order } = skill.position;

      // Calculate vertical spacing (15% per item)
      const verticalSpacing = 15;

      // Add horizontal variation within the column
      // Left column: variations between 5% and 25%
      // Right column: variations between 65% and 85%
      let horizontalPosition;
      if (side === "left") {
        // Create a deterministic but varied horizontal position for left column
        horizontalPosition = `${5 + ((order * 7) % 20)}%`;
      } else {
        // Create a deterministic but varied horizontal position for right column
        horizontalPosition = `${65 + ((order * 11) % 20)}%`;
      }

      return {
        left: horizontalPosition,
        top: `${order * verticalSpacing}%`,
        opacity: 0,
      };
    });
  });

  return (
    <Section>
      <motion.div className="w-full h-full relative" whileInView={"visible"}>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 mt-2">
          Skills
        </h2>

        <div className="w-full h-[90vh] relative">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="absolute"
              initial={{ ...positions[index] }}
              variants={{
                visible: {
                  opacity: 1,
                  transition: {
                    duration: 0.8,
                    delay: 0.1 + index * 0.15,
                  },
                },
              }}
              style={{
                left: positions[index].left,
                top: positions[index].top,
                position: "absolute",
              }}
              whileHover={{
                scale: 1.3,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                },
              }}>
              <span
                className="text-2xl md:text-4xl font-bold text-white whitespace-nowrap px-4 py-2"
                style={{
                  textShadow: "0 0 20px #0f4c5c",
                }}>
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  return (
    <Section>
      <h2 className="text-3xl md:text-5xl font-bold leading-snug mb-4 mt-2">
        Projects
      </h2>
      <div className="flex w-full h-full gap-8 items-baseline justify-center">
        <button
          className="hover:text-indigo-600 transition-colors text-3xl font-bold"
          onClick={previousProject}>
          ←
        </button>
        <button
          className="hover:text-indigo-600 transition-colors text-3xl font-bold"
          onClick={nextProject}>
          →
        </button>
      </div>
    </Section>
  );
};

const ContactSection = () => {
  const [state, handleSubmit] = useForm("mvgpokzp");

  return (
    <Section>
      <h2 className="text-3xl md:text-5xl font-bold">Contact me</h2>
      <div className="mt-8 p-6 rounded-md bg-white bg-opacity-50 w-96 max-w-full">
        {state.succeeded ? (
          "Thanks for your message :)"
        ) : (
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="name"
              className="font-medium text-gray-900 block mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <label
              htmlFor="email"
              className="font-medium text-gray-900 block mb-1 mt-4">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <ValidationError
              className="mt-1 text-red-500"
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label
              htmlFor="email"
              className="font-medium text-gray-900 block mb-1 mt-4">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <ValidationError
              className="mt-1 text-red-500"
              errors={state.errors}
            />
            <button
              disabled={state.submitting}
              className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-4">
              Submit
            </button>
          </form>
        )}
      </div>
    </Section>
  );
};
