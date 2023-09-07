import { View, Text, Dimensions } from "react-native";
import React, { useEffect, useRef } from "react";
import { Canvas, act, useFrame, useThree } from "@react-three/fiber";
import { useState } from "react";
import { useSharedValue } from "react-native-reanimated";
import { MeshLambertMaterial, OrthographicCamera, Vector3 } from "three";
const { width, height } = Dimensions.get("window");
const gravity = 1;
import THREE, { Color } from "three"; 
import { forwardRef } from "react";



const blockHeight = 0.2;
const App = () => {
    const [elements, setElements] = useState([]);
    const can = useRef();
    const ee = useRef();


    let touchHandler = (e) => {
        console.log(ee);
        console.log(can);
        ee.touchHandler(e);
    };

    let reset = () => {
        setElements(<Slab color="hsl(30,100%,100%)" position={[0, 0, 0]} />);
    };


    return (
        <Canvas
            onTouchStart={() => touchHandler()}
            ref={can}
            orthographic={true}
            lookAt={[0, 0, 0]}
            camera={{
                position: [4, 4, 4],
                left: -100,
                right: 100,
                bottom: -100,
                top: 100,
                zoom: 100,
            }}
            style={{ flex: 1, backgroundColor: "white" }}
        >
            <EverythingElse
                ref={ee}
                elements={elements}
                setElements={setElements}
            />
        </Canvas>
    );
};


let EverythingElse = forwardRef(({elements,setElements}, ref)) => {
    useFrame((state, delta) => {


    });

      useImperativeHandle(ref, () => ({
        touchHandler = (e) => {
        console.log("rocued");
        color = new Color(`hsl(${30 + elements.length * 4},100%,50%)`);
        setElements((prevElements) => [
            ...prevElements,
            <Slab
                color={color}
                position={[0, (elements.length + 1) * blockHeight, 0]}
                moving={true}
                key={elements.length}
            />
        ]);
    };

  }));
    const touchHandler1 = (e) => {
        console.log("rocued");
        color = new Color(`hsl(${30 + elements.length * 4},100%,50%)`);
        setElements((prevElements) => [
            ...prevElements,
            <Slab
                color={color}
                position={[0, (elements.length + 1) * blockHeight, 0]}
                moving={true}
                key={elements.length}
            />,
        ]);
    };

    return (
        <>
            <ambientLight intensity={0.8} />
            <directionalLight intensity={0.6} position={[10, 20, 0]} />
            {/* <Slab color="green" /> */}
            {/* <Slab color="red" /> */}
            {/* <Slab color="hsl(30,100%,100%)" position={[0,0,0]}/> */}
            <CameraHelper />
            {/* Render all elements in the elements array */}
            {elements}
        </>
    );
}

function CameraHelper(){
    const cam = new OrthographicCamera();

        useFrame((state, delta) => {
            // state.camera.position.y+=blockHeight;
        });

    return( <></>
    );
}

function Slab(props){
    const customHSLColor = { h: 0.5, s: 1, l: 0.5 };
    const mesh = useRef();

    useFrame((state, delta) => {
        if(props.moving)
        mesh.current.position.x-=delta*gravity;
    });

    return (
        <mesh position={props.position} ref={mesh}>
            <boxGeometry args={[1, blockHeight, 1]} />
            <meshLambertMaterial color={props.color} />
        </mesh>
    );
}

function Box(props) {
    const [active, setActive] = useState(false);
    const mesh = useRef();
    let scale_max = 1.5;
    let scale_min = 1;
    let time_factor = 2.2;

    useFrame((state, delta) => {
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
