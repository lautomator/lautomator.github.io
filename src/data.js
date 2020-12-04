export const navData = [
    {
        name: "Projects",
        url: "index.html#projects"
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/johnmerigliano"
    },
    {
        name: "GitHub",
        url: "https://github.com/lautomator"
    },
    {
        name: "Bitbucket",
        url: "https://bitbucket.org/lautomator/"
    }
];

export const siteData = {
    name: "John Merigliano",
    title: "Full Stack Web Developer",
    description: "I am a multifaceted web applications developer with 10+ years experience in the industry. I continue to hone my skills as a programmer through ongoing education and engagement with open source communities. My analytical skills combined with persistence and motivation drive my problem-solving process. I enjoy collaborating and working as a team member to formulate cogent solutions. The process of collaboration is important to me, as it enhances education and professional growth. The projects below are an example of the scope of my work.",
    resume: "docs/merigliano-resume-2020-12-no-addr.pdf",
    footerText: "This site was created with React. See the site repository (link up top) for more information",
    siteRepo: "https://github.com/lautomator/lautomator.github.io"
};

export const ProjectData = [
    {
        name: "Calculator",
        year: "2018",
        description: "This is a simple calculator. You can employ basic math functions. You can also add console output to memory to use later. The application demonstrates a Model View Controller (MVC) design pattern.",
        repoURL: "https://github.com/lautomator/calculator",
        repoBadge: "fa fa-git-square fa-2x",
        projectURL: "apps/calculator/",
        projectImage: "img/calc-cropped.png",
        tech: [
            "HTML5",
            "CSS",
            "JavaScript"
        ]
    },
    {
        name: "Four Rooms",
        year: "2018",
        description: "Find your way out of these four rooms by picking up an using items to guide your way. Gain access to the telephone booth and teleport yourself from this dimension. This is purely a javascript exercise. The challenge was to create a map system to create the player boundaries.",
        repoURL: "https://github.com/lautomator/four-rooms",
        repoBadge: "fa fa-git-square fa-2x",
        projectURL: "apps/four-rooms",
        projectImage: "img/four-rooms.png",
        tech: [
            "HTML5",
            "CSS",
            "Javascript"
        ]
    },
    {
        name: "Some Cards",
        year: "2017",
        description: "This simple web app prompts users to enter the number of cards they want dealt from a standard deck of 52 cards. The backend uses native javascript. For this, I wanted to create something that just dealt the cards and allowed me to create my own CSS bootstrap and some randomization.",
        repoURL: "https://github.com/lautomator/some-cards/",
        repoBadge: "fa fa-git-square fa-2x",
        projectURL: "apps/some-cards/",
        projectImage: "img/some-cards.png",
        tech: [
            "HTML5",
            "CSS",
            "Javascript"
        ]
    },
    {
        name: "Simple Maze",
        year: "2018",
        description: "Get lost in a maze or find your way out by getting to the other side. This static maze's coordinates were generated from an image and a processor (built using Python code). Although this could be extended to make random mazes each time, I wanted to create a system for building the mapping (boundaries) that would later get put into a javascript data file. I developed a script in Python to facilitate this.",
        repoURL: "https://github.com/lautomator/simple-maze",
        repoBadge: "fa fa-git-square fa-2x",
        projectURL: "apps/simple-maze",
        projectImage: "img/simple-maze.png",
        tech: [
            "HTML5",
            "CSS",
            "Javascript",
            "Python"
        ]
    },
    {
        name: "Codebreaker Game",
        year: "2015",
        description: "This is a guessing game and is based on the classic Atari 2600 game of the same title. The object is for the player to guess 3 numbers between 0 and 9 in the correct order. The game provides hints to let you know if you are guessing the correct numbers and does not divulge the exact positions of those numbers. The game is written entirely in javaScript, HTML/CSS and uses a Model View Controller design pattern.",
        repoURL: "https://github.com/lautomator/codebreaker",
        repoBadge: "fa fa-git-square fa-2x",
        projectURL: "apps/codebreaker/",
        projectImage: "img/codebreaker-1.png",
        tech: [
            "HTML5",
            "CSS",
            "Sass",
            "JavaScript",
            "MVC"
        ]
    },
    {
        name: "Codebreaker Game (Command Line Version)",
        year: "2014",
        description: "This is the command line version of Codebreaker. The object of the game is for the player to guess numbers between 0 and 9 in the correct order. The game is written entirely in Python. When I set out to recreate this game, I wanted to understand the concepts behind it by making a pure text version. This version allows you to select a skill level.",
        repoURL: "https://bitbucket.org/lautomator/code-breaker/src/master/",
        repoBadge: "fa fa-git-square fa-2x",
        projectURL: "",
        projectImage: "img/codebreaker-2.png",
        tech: [
            "Python"
        ]
    },
    {
        name: "Frogger!",
        year: "2015",
        description: "This project was created, in part, to fulfill the requirements of my Udacity Web Developer Nano Degree. It uses a game engine and object oriented programming. The purpose of the game is to get the frog to the other side of the road and accumulate points. An interesting challenge with this one was the problem of how to streamline the interaction of objects and give the impression that a collision has occured without the app becoming too shakey.",
        repoURL: "https://github.com/lautomator/frogger-game",
        repoBadge: "fa fa-git-square fa-2x",
        projectURL: "apps/frogger",
        projectImage: "img/frogger.gif",
        tech: [
            "JavaScript",
            "HTML5",
            "CSS",
            "jQuery"
        ]
    },
    {
        name: "Image Controller MVC Demo",
        year: "2016",
        description: "This is an MVC design pattern demo using Knockout. The purpose of this implementation is to show how Knockout's observables by default create the separation of concerns between the object being acted upon and the logic behind it. Using Knockout is a good introduction into using the MVC design pattern.",
        repoURL: "https://github.com/lautomator/image-controller-mvc",
        repoBadge: "fa fa-git-square fa-2x",
        projectURL: "apps/image-controller-mvc",
        projectImage: "img/image-mvc.png",
        tech: [
            "HTML5",
            "CSS",
            "jQuery",
            "Knockout"
        ]
    },
    {
        name: "Cycle Plus One",
        year: "2016",
        description: "[ALPHA: IN DEVELOPMENT] Cycle Plus One is a musical pattern generator (sequencer) that can be used to explore interesting sonic experiences. Using a fixed rhythmic profile, a steady eighth note pulse, you can experiment with tonality and density within a specified cycle of beats. The application can help composers create a matrix of tones that can be exported as MIDI or musical XML. From there, the material can be worked with further in a sequencing or music notation program. Cycle Plus One is meant to be a starting point for experimentation, allowing the composer to play with variation using a minimal amount of musical material.",
        repoURL: "https://sourceforge.net/p/cycle-plus-one/code/ci/master/tree/",
        repoBadge: "fa fa-git-square fa-2x",
        projectURL: "https://sourceforge.net/projects/cycle-plus-one/",
        projectImage: "img/cycle_plus_one_icon_alt.jpg",
        tech: [
            "Python",
            "GUI"
        ]
    },
    {
        name: "Line Processor",
        year: "2018",
        description: "Enter any amount of text and get some relevant information. This was mostly just a challenge to do some line processing with javascript and present the results in the DOM. I created this with the idea that I could use various string methods to calculate the information returned. Over the yeas, I have done these types of small exercises in languages like PHP and Python. It's a neat way to learn about string modules and you can keep adding things to this to make it more robust.",
        repoURL: "https://github.com/lautomator/line-processor",
        repoBadge: "fa fa-git-square fa-2x",
        projectURL: "apps/line-processor",
        projectImage: "img/line-processor.png",
        tech: [
            "HTML5",
            "CSS",
            "Javascript"
        ]
    }
];
