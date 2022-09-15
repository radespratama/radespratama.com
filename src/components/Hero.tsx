import React from "react";
import wtl from "windsplit";

const Hero: React.FC = () => {
  const tw = {
    container: wtl(`
      max-w-screen-xl mx-auto
    `),
  };

  return <article className={tw.container}>Hero</article>;
};

export default Hero;
