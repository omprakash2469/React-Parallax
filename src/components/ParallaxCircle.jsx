import React, { useEffect, useState } from "react";

export default function ParallaxCircle() {
  const [circleSize, setCircleSize] = useState(1800);

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      // Calculate the new circle size based on scroll position
      const newSize = 1800 - window.scrollY * 1.5; // Adjust the factor to control the scroll speed
      setCircleSize(Math.max(20, newSize)); // Ensure the circle size doesn't go below a certain threshold
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  //   Update and created develop branch
  return (
    <div className="relative theme-background flex justify-center items-center overflow-hidden h-[100svh]">
      <h2 className="text-5xl font-bold absolute top-20 left-14 grid text-white font-poppins gap-y-2 z-20">
        <span>Agency - Subscription</span>
        <span>Model for fast moving</span>
        <span>brands.</span>
      </h2>
      <div
        className="absolute rounded-full transition-all theme-background-secondary z-10 drop-shadow-2xl"
        style={{ width: `${circleSize}px`, height: `${circleSize}px` }}
      ></div>
    </div>
  );
}
