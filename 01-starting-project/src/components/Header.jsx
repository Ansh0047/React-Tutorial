// to import the images from assets using default exports
import { useImperativeHandle } from "react";
import reactImg from "../assets/react-core-concepts.png";

import './Header.css'

const arr = ["Fundamental", "Core", "Crucial"];
function getRandomInt(len) {
  return Math.floor(Math.random() * len);
}

// creating custom component
export default function Header() {
    // we can use this way, other than writing the whole code to create chaos
    const dynamicContent = arr[getRandomInt(arr.length)];
    return (
      <header>
        {/* curly brace for dynamic content */}
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {/* Here in the curly braces we have added the dynamic content */}
          {dynamicContent} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }