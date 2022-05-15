import * as React from "react";

const Gradient = (props) => (
  <svg
    className="gradient-bg"
    viewBox="0 0 1080 720"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    {...props}
  >
    <defs>
      <linearGradient
        id="a"
        x1={0}
        y1={0}
        x2={1080}
        y2={0}
        gradientUnits="userSpaceOnUse"
      >
        <stop className="first" stopColor="currentColor" />
        <stop className="second" offset={1} stopColor="currentColor" />
      </linearGradient>
    </defs>
    <path d="M0 0H1080V720H0V0Z" fill="url(#a)" />
  </svg>
);

export default Gradient;
