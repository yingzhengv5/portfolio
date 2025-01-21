import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";

import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";

export const projects = [
  {
    title: "Github",
    url: "https://github.com/yingzhengv5",
    image: "projects/github.png",
    description: "Explore my GitHub to see my code and projects.",
  },
  {
    title: "Pet Calender",
    url: "https://calendar-ying.vercel.app/",
    image: "projects/calendar.png",
    description: "A cute calendar app that integrates with the Unsplash API.",
  },
  {
    title: "Yelp Camp",
    url: "https://yelpcamp-995u.onrender.com",
    image: "projects/yelpcamp.png",
    description:
      "YelpCamp is a campground management app built with Node.js, Express.js, and MongoDB. It enables users to view, create, and review campgrounds.",
  },
  {
    title: "Tree Talk",
    url: "https://yingzheng01.pythonanywhere.com/",
    image: "projects/tree.png",
    description:
      "This app helps homeowners resolve tree and hedge disputes peacefully, avoiding drastic measures like chainsaws. Join to communicate and find friendly solutions to tree-related conflicts.",
  },
  // {
  //   title: "Voice of Nature",
  //   url: "https://etaproject02.pythonanywhere.com/",
  //   image: "projects/nature.png",
  //   description:
  //     "This is a 'competition as a service' platform that allows users to run their own competitions without technical requirements.",
  // },
  // {
  //   title: "Voting System",
  //   url: "https://639eta.pythonanywhere.com/",
  //   image: "projects/beach.png",
  //   description:
  //     'This website enables users to participate in a "Beach of the Year" competition, with multiple roles implementing different functions.',
  // },
  // {
  //   title: "Order System",
  //   url: "https://yingzheng1161174.pythonanywhere.com/login",
  //   image: "projects/order.png",
  //   description:
  //     "This is an order system that allows users to order products online. The system is built based on the MVC architecture.",
  // },
];

const Project = (props) => {
  const { project, highlighted } = props;

  const background = useRef();
  const bgOpacity = useMotionValue(0.4);

  useEffect(() => {
    animate(bgOpacity, highlighted ? 0.8 : 0.4);
  }, [highlighted]);

  useFrame(() => {
    background.current.material.opacity = bgOpacity.get();
  });

  return (
    <group {...props}>
      <mesh
        position={[0, 0, -0.001]}
        onClick={() => window.open(project.url, "_blank")}
        ref={background}
        onPointerOver={(e) => {
          e.stopPropagation();
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          document.body.style.cursor = "default";
        }}>
        <planeGeometry args={[3, 4]} />
        <meshBasicMaterial color="#415a77" opacity={0.4} />
      </mesh>
      <Image
        scale={[2.8, 1.5, 1]}
        url={project.image}
        toneMapped={false}
        position-y={1.15}
      />
      <Text
        maxWidth={3}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.3}
        position={[-1.4, 0.19, 0]}>
        {project.title.toUpperCase()}
      </Text>
      <Text
        maxWidth={2.8}
        anchorX="left"
        anchorY="top"
        fontSize={0.2}
        position={[-1.4, -0.2, 0]}>
        {project.description}
      </Text>
    </group>
  );
};

export const currentProjectAtom = atom(Math.floor(projects.length / 2));

export const Projects = () => {
  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);

  return (
    <group position-y={-viewport.height * 2.33 + 1}>
      {projects.map((project, index) => (
        <motion.group
          key={"project_" + index}
          position={[index * 2.5, 0, -3]}
          animate={{
            x: 0 + (index - currentProject) * 3.6,
            y: currentProject === index ? 0 : -0.1,
            z: currentProject === index ? -2 : -3,
            rotateX: currentProject === index ? 0 : -Math.PI / 3,
            rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
          }}>
          <Project project={project} highlighted={index === currentProject} />
        </motion.group>
      ))}
    </group>
  );
};
