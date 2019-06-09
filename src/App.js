import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import pony from "./pony.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    pony,
    clickedPony: [],
    score: 0
  };

  imageClick = event => {
    const currentPony = event.target.alt;
    const PonyAlreadyClicked = this.state.clickedPony.indexOf(currentPony) > -1;

    if (PonyAlreadyClicked) {

      this.setState({
        pony: this.state.pony.sort(function(a, b) {
          return 0.5 - Math.random();
        }),

        clickedPony: [],
        score: 0
      });

      alert("You lose. Play again?");

    } else {

      this.setState(
        {
          pony: this.state.pony.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedPony: this.state.clickedPony.concat(
            currentPony
          ),
          score: this.state.score + 1
        },
        
        () => {
          if (this.state.score === 12) {

            alert("You Win!");

            this.setState({
              pony: this.state.pony.sort(function(a, b) {
                return 0.5 - Math.random();
              }),

              clickedPony: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <div>

        <Navbar 
          score={this.state.score}
        />

        <Jumbotron />

        <div className="wrapper">
          {this.state.pony.map(pony => (
            <FriendCard
              imageClick={this.imageClick}
              id={pony.id}
              key={pony.id}
              image={pony.image}
            />
          ))}
        </div>

      </div>
    );
  }
}

export default App;