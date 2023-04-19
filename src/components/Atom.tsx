import React, {useMemo} from 'react';
import { Line, Sphere } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

const Shape = () => {
    const points = useMemo(
        () =>
            new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(
                100
            ),
        []
    );
    return (
        <group>
            <Line worldUnits points={points} color="#cae6f1" lineWidth={0.1} />
            <Line
                worldUnits
                points={points}
                color="#cae6f1"
                lineWidth={0.1}
                rotation={[0, 0, 1]}
            />
            <Line
                worldUnits
                points={points}
                color="#cae6f1"
                lineWidth={0.1}
                rotation={[0, 0, -1]}
            />
            <Sphere args={[0.55, 64, 64]}>
                <meshBasicMaterial color={[4, 0.5, 2]} toneMapped={false} />
            </Sphere>
        </group>
    );
};

const Atom = () => {
    return (
        <>
            <Shape />
            <EffectComposer>
                <Bloom mipmapBlur luminanceThreshold={0.5} radius={0.3} />
            </EffectComposer>
        </>
    );
};

export default Atom;