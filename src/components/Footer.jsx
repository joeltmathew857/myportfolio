import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-800 py-12 mt-8">
        <div className="container mx-auto text-center text-gray-400">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
