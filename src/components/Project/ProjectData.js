import ObjectDetection from '../../Images/ObjectDetection.jpg'
import APOD from '../../Images/APOD.jpg'
import Calculator from '../../Images/calculator.jpg'
import Weather from '../../Images/weather.jpg'
import Sudoku from '../../Images/sudoku-solver.jpg'
import Ice from '../../Images/ice.jpg'

const ProjectData = [
  {
    title: 'NASA APOD',
    img: APOD,
    description: 'A web app that displays Nasa\'s astronomy picture of the day',
    tech: 'React, CSS, Axios',
    link: 'https://apod2022.netlify.app/'
  },

  {
    title: 'Weather App',
    img: Weather,
    description: 'A weather app that utilizes the openweathermap API',
    tech: 'JavaScript, HTML, CSS, Axios',
    link: 'https://jamestariga-weather-app.netlify.app/'
  },

  {
    title: 'Object Detection', img: ObjectDetection,
    description: 'A Python script that detects objects',
    tech: 'Python, Tenserflow, COCO',
    link: 'https://github.com/jamestariga/ObjectDetection'
  },

  {
    title: 'Sudoku Solver', img: Sudoku,
    description: 'A JavaScript app that uses a sudoku solver API',
    tech: 'JavaScript, HTML, CSS, Axios',
    link: 'https://github.com/jamestariga/sudoku-solver'
  },

  {
    title: 'Ice Breaker (Hackathon)',
    img: Ice,
    description: 'This discord bot project is built for StormHacks 2022',
    tech: 'Python, Discord API',
    link: 'https://github.com/devinllu/StormHacks2022'
  },

  {
    title: 'Calculator App',
    img: Calculator,
    description: 'A simple calculator web app',
    tech: 'JavaScript, HTML, CSS',
    link: 'https://github.com/jamestariga/Calculator'
  }

]

export default ProjectData