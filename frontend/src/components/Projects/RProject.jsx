import React from "react";
import { useScramble } from "use-scramble";

const RProject = () => {
  const { ref, replay } = useScramble({
    text: "Here are a few projects I've worked on recently.",
    range: [65, 125],
    speed: 0.5,
    tick: 1,
    step: 1,
    scramble: 2,
    seed: 0,
    chance: 1,
    overdrive: false,
    overflow: false,
  });

  return (
    <p ref={ref} onMouseOver={replay} style={{ cursor: "pointer" }}>
      Here are a few projects I've worked on recently.
    </p>
  );
};

export default RProject;
