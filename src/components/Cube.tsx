import React, {useRef} from 'react';
import {PerspectiveCamera, RenderTexture, Text} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";

const Cube = () => {
    const MyRenderTexture = RenderTexture as any;
    const textRef = useRef<any | string>();
    useFrame(
        (state) =>
            (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 4)
    );
    return (
        <mesh>
            <boxGeometry/>
            <meshStandardMaterial>
                <MyRenderTexture attach="map">
                    <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                    <color attach="background" args={["#dc9dcd"]} />
                    <Text ref={textRef} fontSize={4} color="#555">
                        hello
                    </Text>
                </MyRenderTexture>
            </meshStandardMaterial>
        </mesh>

    );
};

export default Cube;