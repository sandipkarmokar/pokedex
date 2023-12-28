import React from "react";

const Footer = () => {
  return (
    <div className="bg-red-900">
      <div className="container mx-auto flex items-center justify-center text-center p-10">
        <div>
          <p className="text-[20px] text-red-100">
            Coded with 💓💞💖 by{" "}
            <a
              rel="noopener noreferrer"
              href="https://www.sandipkmk.tech/"
              target="_blank"
              className="underline decoration-wavy"
            >
              Sandip Karmokar
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
