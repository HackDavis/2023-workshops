import React, { useEffect, useState } from "react";
import "./style.css";
import Card from "./Card.js";

function Header() {
  return (
    <div class="marginEffect">
      <h1>hi, welcome!</h1>
      <div class="nav-links">
        <a href="https://www.linkedin.com/in/trishnasharma/" class="nav-items">
          LinkedIn
        </a>
        <a href="mailto:tksharma@ucdavis.edu" class="nav-items">
          Email
        </a>
      </div>
    </div>
  );
}

function Alert() {
  return (
    <div>
      <button
        onClick={() => {
          alert("Your computer has been compromised.");
        }}
      >
        Click me for an alert!
      </button>
    </div>
  );
}

export default function App() {
  const [count, setCount] = useState(0);
  const [isEven, setIsEven] = useState("Yes");

  const profiles = [
    {
      name: "Cameron",
      favoriteClass: "ECS 152a",
    },
    { 
      name: "Justin",
      favoriteClass: "ECS 140a" 
    },
  ];

  let increaseCount = () => {
    let newCount = count + 1;
    setCount(newCount);
  };

  useEffect(() => {
    if (count % 2 === 0) {
      setIsEven("Yes");
    } else {
      setIsEven("No");
    }
  }, [count]);

  return (
    <div>
      <Header />
      <div class="stateExampleContainer">
        <div
          onClick={() => {
            increaseCount();
          }}
        >
          Click this to increase the count
        </div>
        <p>The count: {count}</p>
        <p>Is the count divisible by 2: {isEven}</p>
      </div>
      <div class="profiles">
        <Card name="Cameron" favoriteClass="ECS 152a" />
        <Card name="Justin" favoriteClass="ECS 140a" />
      </div>
      <div class="profiles">
        {profiles.map((profile) => {
          return(
            <Card name={profile.name} favoriteClass={profile.favoriteClass}/>
          )
        })}
      </div>
    </div>
  );
}


