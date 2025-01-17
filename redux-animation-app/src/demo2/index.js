import React from "react";
import { Canvas } from "@react-vertex/core";
import { useViewportSize } from "@react-vertex/dom-hooks";
import Scene from "./Scene";

function Example() {
  const { width, height } = useViewportSize();

  return (
    <Canvas width={width} height={height}>
      <Scene />
    </Canvas>
  );
}

export default Example;

/* NOTE TO FUTURE SELF

  I added this to index.html:
  
  <style>
    html, body, div {
      margin: 0;
      padding: 0;
      border: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  </style>
*/
