import { Sphere, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import * as THREE from "three";
export const Background = () => {
    const material = useRef();
    const color = useRef({
        color: "#fdf0d5",
    });
    const data = useScroll();

    const tl = useRef(null);

    useFrame(() => {
        if (tl.current && scroll) {
            tl.current.progress(data.scroll.current);
            material.current.color = new THREE.Color(color.current.color);
        }
    });

    useEffect(() => {
        tl.current = gsap.timeline();
        tl.current.to(color.current, {
            color: "#6b9080",
        });
        tl.current.to(color.current, {
            color: "#f4f1de",
        });
        tl.current.to(color.current, {
            color: "#fdf0d5",
        });
    }, []);

    return (
        <group>
            <Sphere scale={[30, 30, 30]}>
                <meshBasicMaterial
                    ref={material}
                    side={THREE.BackSide}
                    toneMapped={false}
                />
            </Sphere>
        </group>
    );
};
