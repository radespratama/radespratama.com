import React from "react";

const Footer: React.FC<{ isFooter?: boolean }> = ({ isFooter }) => {
  if (isFooter) {
    return <div></div>;
  }

  return <div>Footer</div>;
};

export default Footer;
