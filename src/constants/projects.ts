const projects = [
  {
    title: 'i-on CodeGarten Server',
    description: "The main goal of the project is to improve the academic life for both students and teachers, regarding GitHub repository management. To that end, this project uses Spring Boot to expose an Hypermedia API for all the clients, and a PostgreSQL database to store relevant client and user information. This server application is responsible for communicating with the GitHub API in order to execute actions on behalf of the authenticated user. For this project, we implemented an authentication process based on OAuth. Currently deployed on Heroku.",
    images: "codegarten-logo",
    technologies: ['Kotlin', 'Spring', 'PostgreSQL', 'Docker', 'OAuth'],
    gitHubUrl: 'https://github.com/i-on-project/codegarten',
    liveUrl: 'https://i-on-codegarten-server.herokuapp.com/'
  },
  {
    title: 'i-on CodeGarten Web',
    description: "The front-end of the i-On CodeGarten project, and a client of the server application. Built using Typescript and Express, using Handlebars as the template engine and Bootstrap as the CSS framework. Also implemented client browser JavaScript code to allow for user interaction. Currently deployed on Heroku.",
    images: "codegarten",
    technologies: ['TypeScript', 'NodeJS', 'ExpressJS', 'Bootstrap', 'JavaScript'],
    gitHubUrl: 'https://github.com/i-on-project/codegarten',
    liveUrl: 'https://i-on-codegarten.herokuapp.com/'
  },
  
  {
    title: 'Draw and Guess',
    description: "An Android drawing and guessing game based on the broken telephone game. Implemented using Kotlin and Android Studio. Also used Firestore for matchmaking and game status management.",
    images: "drag_icon",
    technologies: ['Kotlin', 'Android', 'FireStore'],
    gitHubUrl: 'https://github.com/PTKickass/DrawAndGuess',
  }
]

export default projects