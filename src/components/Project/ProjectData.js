import ObjectDetection from '../../Images/ObjectDetection.jpg'
import APOD from '../../Images/APOD.jpg'
import Calculator from '../../Images/calculator.jpg'
import Weather from '../../Images/weather.jpg'
import Sudoku from '../../Images/sudoku-solver.jpg'
import Ice from '../../Images/ice.jpg'
import Chatrr from '../../Images/chatrr.gif'
import Movie from '../../Images/movie.gif'
import Recipe from '../../Images/recipe.gif'

const ProjectData = [
  {
    title: 'Chatrr',
    img: Chatrr,
    description:
      '💻 A full-stack chat application. This application uses Firebase to authenticate user logins and stores their information. The chat application currently supports Google and Facebook logins.',
    tech: 'React, Firebase, React Router, Chat Engine, CSS, Axios',
    link: 'https://chatrr-jamestariga.netlify.app/',
  },

  {
    title: '7 Days 7 React Projects',
    img: Movie,
    description:
      '📖 A self improvement challenge where I challenged myself to build 7 React projects in a span of 7 days. I created 7 projects using React, React Router, Styled-Components, and TailwindCSS.',
    tech: 'React, Firebase, React Router, Styled-Components, TailwindCSS, Framer Motion, Axios',
    link: 'https://github.com/jamestariga/7-Days-7-React-Projects',
  },

  {
    title: 'React Recipe Page',
    img: Recipe,
    description:
      "🍕 A react web application that showcases recipes from spoonacular's API. The web app currently has  a carousel in the home page as well as a search menu where users can search for ingredients.",
    tech: 'React, React Router, React Splide, TailwindCSS, Framer Motion, Axios, Spoonacular API',
    link: 'https://jamestariga-recipe-app.netlify.app/',
  },

  {
    title: 'NASA APOD',
    img: APOD,
    description:
      "🚀 A simple web application that utilizes the NASA Picture of the Day API. The app currently shows all of 2022's picture of the day. This project is still underdevelopment and I will add more features on this at a later date.",
    tech: 'React, CSS, Axios',
    link: 'https://apod2022.netlify.app/',
  },

  {
    title: 'Weather App',
    img: Weather,
    description:
      "⛅ A basic weather app built using vanilla JS. The web app will ask for the user's permission to allow the browser to locate their current coordinates and then the app will send a GET request to a weather API.",
    tech: 'JavaScript, HTML, CSS, Axios',
    link: 'https://jamestariga-weather-app.netlify.app/',
  },

  {
    title: 'Object Detection',
    img: ObjectDetection,
    description:
      '🐍 An object detection project using python and OpenCV. The project utilizes preset objects using coco. In this project, I used a webcam to detect objects and display the bounding box of the object.',
    tech: 'Python, Tenserflow, COCO',
    link: 'https://github.com/jamestariga/ObjectDetection',
  },

  {
    title: 'Sudoku Solver',
    img: Sudoku,
    description:
      '📖 A sudoku solver web application where users can enter certain sudoku board patterns which is then followed by a POST request to a sudoku solver API and it will return the completed sudoku board.',
    tech: 'JavaScript, HTML, CSS, Axios',
    link: 'https://github.com/jamestariga/sudoku-solver',
  },

  {
    title: 'Ice Breaker (Hackathon)',
    img: Ice,
    description:
      '🧊 This discord bot is built for StormHacks 2022. The bot is a fun game where users can play a game of ice breaker where they try to guess the word that is hidden in the chat. The bot will also give the user a hint if they guess incorrectly.',
    tech: 'Python, Discord API',
    link: 'https://github.com/devinllu/StormHacks2022',
  },

  {
    title: 'Calculator App',
    img: Calculator,
    description:
      '📖 A simple calculator web app built using vanilla JS. The app will allow users to enter numbers and operators and it will return the result. The app currently supports the following operators: +, -, *, /, and =.',
    tech: 'JavaScript, HTML, CSS',
    link: 'https://github.com/jamestariga/Calculator',
  },
]

export default ProjectData
