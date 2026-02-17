import React, { useState } from "react";

const Slides = ({ slide }) => {
  const { title, subtitle, image } = slide;

  return (
    <div className="hero bg-base-200 py-4">
      <div className="hero-content flex-col  lg:flex-row-reverse">
        <div className="flex-1">
          <img src={image} className="w-full h-full rounded-lg shadow-2xl " />
        </div>

        <div className="flex-1">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">{subtitle}</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Slides;
