import React from "react";

const Body = () => {
  return (
    <div className="container mx-auto py-80">
      <div className="mb-8">
        <div className="bg-cover bg-center h-screen w-screen" style={{}}></div>
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-600">
          LANDING PAGE{" "}
          <span className="font-bold text-2xl">
            CREATOR Create must click landing pages{" "}
          </span>
          With Mailchimp's landing page builder, it takes just a few minutes to
          design beautiful landing pages that make visitors want to join your
          audience or buy your stuff.
        </p>
      </div>
      <div id="portfolio" className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Portfolio</h2>
      </div>
      <div id="contact" className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
      </div>
    </div>
  );
};

export default Body;
