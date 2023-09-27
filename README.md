# Language Learning Game

Welcome to the Language Learning Game, a fun and interactive way to improve your language proficiency through exercises and quizzes.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Scoring Logic](#scoring-logic)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Language Learning Game is a web-based application that helps users learn and practice languages through interactive quizzes. This README provides an overview of the project, its features, and how to set it up and use it.

## Features

- User registration and login.
- Language selection for tailored exercises.
- Interactive quizzes with various difficulty levels.
- Scoring system based on question difficulty.
- User profiles to track progress.
- Leaderboard for healthy competition.
- Responsive design for various devices.
- Dynamic content management for administrators.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your local machine.
- MongoDB database set up and running.

### Installation

1. Clone the repository:

       git clone https://github.com/your-username/language-learning-game.git
       cd language-learning-game

2. Install frontend dependencies:

        cd client
        npm install


3. Install backend dependencies:

        cd ../server
        npm install


4. Create a .env file in the server directory and configure environment variables as needed.

5. Start the frontend and backend servers:

    # In the client directory
        npm start

    # In the server directory
        npm start

Access the application in your web browser at http://localhost:3000.

Usage
Register for an account or log in.
Select your desired language for exercises.
Complete quizzes to earn points.
Visit your user profile to track progress.
Check the leaderboard to see top performers.
Project Structure
The project is organized into the following directories:

client/: Frontend code (React).
server/: Backend code (Node.js and Express).
shared/: Shared code between frontend and backend.
API Endpoints
/api/auth/register: User registration.
/api/auth/login: User login.
/api/quiz/:language: Fetch quiz questions for the selected language.
/api/user/profile/:id: Fetch user profile information.
/api/leaderboard/:language: Fetch the leaderboard for a specific language.
Scoring Logic
The scoring system awards points to users based on the difficulty of the questions. Easy questions earn 1 point, medium questions earn 2 points, and hard questions earn 3 points.
