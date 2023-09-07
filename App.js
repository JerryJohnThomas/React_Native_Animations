import { View, Text } from "react-native";
import React, { useRef } from "react";
import { Canvas, act, useFrame } from "@react-three/fiber";
import { useState } from "react";
import { useSharedValue } from "react-native-reanimated";

const App = () => {
    return (
        <Canvas>
            {/* <mesh>
              <sphereGeometry />
              <meshStandardMaterial color="orange" />
          </mesh> */}
            <Box position={[0, 0, 0]} color="orange" />
            {/* <Box position={[0, 1.2, 0]} color="green" /> */}
            <ambientLight />
            {/* <pointLight position={[10, 10, 10]} /> */}
        </Canvas>
    );
};

function Box(props) {
    const [active, setActive] = useState(false);
    const mesh = useRef();
    let scale_max = 1.5;
    let scale_min = 1;
    let time_factor = 2.2;

    useFrame((state, delta) => {
        // console.log(active, mesh.current.scale.x);
        mesh.current.rotation.y += delta;
        if (active && mesh.current.scale.x < scale_max) {
            mesh.current.scale.x += delta * time_factor;
            mesh.current.scale.y += delta * time_factor;
            mesh.current.scale.z += delta * time_factor;
        } else if (active == false && mesh.current.scale.x > scale_min) {
            mesh.current.scale.x -= delta * time_factor;
            mesh.current.scale.y -= delta * time_factor;
            mesh.current.scale.z -= delta * time_factor;
        }
        });

    return (
        <mesh
            ref={mesh}
            {...props}
            onClick={(event) => setActive(!active)}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={props.color} />
        </mesh>
    );
}

export default App;
