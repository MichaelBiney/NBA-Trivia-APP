// src/components/Home.js

import React from 'react';
import './Home.css';
const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to the NBA Quiz</h1>
        <p>Test your knowledge about the NBA</p>
        <button className="start-quiz-button">Start Quiz</button>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Challenging Questions</h2>
          <p>Enjoy a wide range of questions from different eras and aspects of the NBA.</p>
        </div>
        <div className="feature">
          <h2>Leaderboard</h2>
          <p>Compete with friends and see who knows the most about the NBA.</p>
        </div>
        <div className="feature">
          <h2>Fun Facts</h2>
          <p>Learn interesting facts about NBA players, teams, and history.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
