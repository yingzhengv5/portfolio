import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";

import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";

export const projects = [
    {
        title: "Resume",
        url: "https://drive.google.com/file/d/1r1OpMzNJv9emJBukCruhrHg2_Btk6lVA/view?usp=sharing",
        image: "projects/resume.png",
        description: "Check more information about me",
    },
    {
        title: "Campground",
        url: "http://yingzheng1161174.pythonanywhere.com/",
        image: "projects/campground.png",
        description:
            "School Project - Selwyn Campground Internal System: Flask backend, Bootstrap frontend, MySQL storage. Features include bookings, customer info management, and operational data viewing for staff.",
    },
    {
        title: "Yelp Camp",
        url: "https://yelpcamp-nznf.onrender.com/",
        image: "projects/yelpcamp.png",
        description:
            "YelpCamp is a campground management app built with Node.js, Express.js, and MongoDB. It enables users to view, create, and review campgrounds.",
    },
    {
        title: "Github",
        url: "https://github.com/yingzhengv5",
        image: "projects/github.png",
        description: "Explore my GitHub to see my code and projects.",
    },
    {
        title: "Linkedin",
        url: "https://www.linkedin.com/in/ying-zheng-v5/",
        image: "projects/linkedin.png",
        description: "Connect with me on Linkedin.",
    },
];

const Project = (props) => {
    const { project, highlighted } = props;

    const background = useRef();
    const bgOpacity = useMotionValue(0.4);

    useEffect(() => {
        animate(bgOpacity, highlighted ? 0.7 : 0.4);
    }, [highlighted]);

    useFrame(() => {
        background.current.material.opacity = bgOpacity.get();
    });

    return (
        <group {...props}>
            <mesh
                position={[0, 0, -0.001]}
                onClick={() => window.open(project.url, "_blank")}
                ref={background}>
                <planeGeometry args={[3, 4]} />
                <meshBasicMaterial color="black" opacity={0.4} />
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
                    <Project
                        project={project}
                        highlighted={index === currentProject}
                    />
                </motion.group>
            ))}
        </group>
    );
};
