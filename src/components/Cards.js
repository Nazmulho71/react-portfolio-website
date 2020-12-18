import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these BEST React Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <a href="https://netflix-clone-2-3ab58.web.app">
              <CardItem
                src="images/img-9.jpg"
                text="Netflix Clone | My first Project... Like the real Netflix"
                label="Movie"
                path="/"
              />
            </a>
            <a href="https://covid-19-tracker-1f703.web.app">
              <CardItem
                src="images/img-2.jpg"
                text="Covid 19 Tracker App | Really track Covid 19 in this app."
                label="Tracker"
                path="/"
              />
            </a>
          </ul>
          <ul className="cards__items">
            <a href="https://twitter-clone-d5bca.web.app">
              <CardItem
                src="images/img-3.jpg"
                text="Twitter Clone | Fully made with React JS looking like the real one"
                label="Social"
                path="/"
              />
            </a>
            <a href="https://clone-a5d06.web.app">
              <CardItem
                src="images/img-4.jpg"
                text="Full Stack Amazon Clone | You can also buy product's on this amazon-clone"
                label="Ecommerce"
                path="/"
              />
            </a>
            <a href="https://imessage-clone-17697.web.app">
              <CardItem
                src="images/img-8.jpg"
                text="Instagram Clone | Post, Comment, Sign up/in, message and more"
                label="Social"
                path="/"
              />
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
