import React from "react";
import { Triangle } from "react-loader-spinner";

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Triangle
        height="80"
        width="80"
        color="#FFF"
        ariaLabel="triangle-loading"
        visible={true}
      />
    </div>
  );
};

export default Loading;
