import React from "react";

const Footer = () => {
  const myDate = new Date();
  const currentYear = myDate.getFullYear();
  return (
    <footer>
      <p>Copyright © {currentYear}</p>
    </footer>
  );
};

export default Footer;
