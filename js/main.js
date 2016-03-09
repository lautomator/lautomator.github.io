var data = {
    // site data
    name: 'John Merigliano',
    role: 'Full Stack Web Developer',
    intro: 'I am a multifaceted web applications developer. My 10+ years experience in the industry have given me a unique and robust scope. I continue to perfect my skills as a web programmer through ongoing education and engagement with the web development community.',
    urls: [
        {
            name: 'projects',
            url: 'index.html#projects',
            cat: 'nav'
        },
        {
            name: 'resume',
            url: 'index.html#resume',
            cat: 'nav'
        },
        {
            name: 'linkedin',
            url: 'https://www.linkedin.com/in/johnmerigliano',
            cat: 'social'
        },
        {
            name: 'github',
            url: 'https://github.com/lautomator',
            cat: 'social'
        },
        {
            name: 'bitbucket',
            url: 'https://bitbucket.org/lautomator/',
            cat: 'social'
        }
    ],
    projects: [
        {
            name: 'Neighborhood Map',
            year: '2016',
            description: 'This is a single page application featuring a map of restaurant locations in my area. Additional functionality includes highlighted locations, third-party data about those locations and various ways to browse the content. Some of those include filtering results and getting additional info from the map markers.',
            repoURL: 'https://github.com/lautomator/udacity-fe-nano/tree/master/P5',
            repoBadge: 'fa fa-git-square fa-2x',
            projectURL: 'apps/neighborhood-map/',
            projectImage: 'img/neighborhood-map.gif',
            tech: [
                'HTML5',
                'CSS',
                'jQuery',
                'Knockout',
                'FourSquare API',
                'Google Maps API'
            ]
        },
        {
            name: 'Codebreaker Game',
            year: '2015',
            description: 'This is a guessing game. This game is based on the classic Atari 2600 game of the same title. The object of the game is for the player to guess 3 numbers between 0 and 9 in the correct order. The game is written entirely in javaScript, HTML/CSS.',
            repoURL: 'https://github.com/lautomator/codebreaker',
            repoBadge: 'fa fa-git-square fa-2x',
            projectURL: 'apps/codebreaker/',
            projectImage: 'img/cb-01.png',
            tech: [
                'HTML5',
                'CSS',
                'Sass',
                'JavaScript',
                'MVC'
            ]
        },
        {
            name: 'Collections',
            year: '2016',
            description: 'Keep track of things and write journal entries.',
            repoURL: 'https://github.com/lautomator/collections',
            repoBadge: 'fa fa-git-square fa-2x',
            projectURL: 'https://github.com/lautomator/collections',
            projectImage: 'img/collections-login.png',
            tech: [
                'Python',
                'Django',
                'HTML5',
                'CSS',
                'PostgreSQL'
            ]
        },
        {
            name: 'My Wiki',
            year: '2015',
            description: 'Project created as part of coursework for Udacity\'s Web Development Course. The site is created using Python and Google App Engine; Users can create their own account and make Wiki pages that include images and HTML formatting.',
            repoURL: 'https://github.com/lautomator/my_wiki',
            repoBadge: 'fa fa-git-square fa-2x',
            projectURL: 'http://t-decoder-840.appspot.com/',
            projectImage: 'img/my-wiki.jpg',
            tech: [
                'Python',
                'Google App Engine',
                'HTML5',
                'CSS',
                'jQuery',
                'Jinja Templating'
            ]
        },
        {
            name: 'Frogger!',
            year: '2015',
            description: 'This project was created, in part, to fulfill the requirements of my Udacity Web Developer Nano Degree. It uses a game engine and object oriented programming.',
            repoURL: 'https://github.com/lautomator/my_wiki',
            repoBadge: 'fa fa-git-square fa-2x',
            projectURL: 'apps/frogger',
            projectImage: 'img/frogger.gif',
            tech: [
                'HTML5',
                'CSS',
                'jQuery'
            ]
        },
        {
            name: 'Cycle Plus One',
            year: '2016',
            description: '[IN DEVELOPMENT] Cycle Plus One is a musical pattern generator that can be used to explore interesting sonic experiences. Using a fixed rhythmic profile, a steady eighth note pulse, you can experiment with tonality and density within a specified cycle of beats. The application can help composers create a matrix of tones that can be exported as MIDI or musical XML. From there, the material can be worked with further in a sequencing or music notation program. Cycle Plus One is meant to be a starting point for experimentation, allowing the composer to play with variation using a minimal amount of musical material.',
            repoURL: 'https://sourceforge.net/p/cycle-plus-one/code/ci/master/tree/',
            repoBadge: 'fa fa-git-square fa-2x',
            projectURL: 'https://sourceforge.net/projects/cycle-plus-one/',
            projectImage: 'img/cycle_plus_one_icon.jpg',
            tech: [
                'Python',
                'GUI'
            ]
        },
        {
            name: 'Losang Samten Website',
            year: '2015',
            description: 'This is the website for Tibetan Mandala artist, Losang Samten. It uses the Knockout JS MVC library.',
            repoURL: 'https://bitbucket.org/lautomator/losang-samten-website/',
            repoBadge: 'fa fa-bitbucket-square fa-2x',
            projectURL: 'http://www.losangsamten.com/',
            projectImage: 'img/samten-site.jpg',
            tech: [
                'HTML5',
                'CSS',
                'jQuery',
                'Knockout'
            ]
        },
        {
            name: 'Image Controller MVC Demo',
            year: '2016',
            description: "This is an MVC design pattern demo using Knockout. The purpose of this implementation is to show how Knockout's observables by default create the separation of concerns between the object being acted upon and the logic behind it. Using Knockout is a good introduction into using the MVC design pattern.",
            repoURL: 'https://github.com/lautomator/image-controller-mvc',
            repoBadge: 'fa fa-git-square fa-2x',
            projectURL: 'http://23.92.19.42/',
            projectImage: 'img/image-mvc.png',
            tech: [
                'HTML5',
                'CSS',
                'jQuery',
                'Knockout'
            ]
        },
    ],
    resume: 'files/merigliano_resume_02_2016_sans_v2.pdf',
    status: 'getting data ...'
};

var viewModel = {
    siteData: ko.observableArray(),
    pageStatus: ko.observable(),
    pages: ko.observableArray(),
    badges: ko.observableArray(),
    projects: ko.observableArray(),

    // app functions
    getDate: function() {
        // returns current year
        var year = new Date().getFullYear();
        return year;
    },
    getNav: function(d) {
        // defines the site's main navigation page names
        // takes in the site data and returns an array
        var nav = [],
            index = 0,
            urls = d,
            len = urls.length;

        while (index < len) {
            // get the nav data only
            if (urls[index].cat === 'nav') {
                nav.push(urls[index]);
            }
            index += 1;
        }

        return nav;
    },
    getSocNav: function(d) {
        // defines the site's social navigation items
        // takes in the site data and returns an array
        var soc = [],
            index = 0,
            urls = d,
            len = urls.length;

        while (index < len) {
            // get the social data only
            if (urls[index].cat === 'social') {
                soc.push(urls[index]);
            }
            index += 1;
        }

        return soc;
    },
    init: function() {
        // define the site data
        this.siteData(data);
        // define status
        this.pageStatus(data.status);
        // deifne the navigation
        this.pages(this.getNav(data.urls));
        // define the social media badges
        this.badges(this.getSocNav(data.urls));
        // define the projects
        this.projects(data.projects);

    }
};

ko.applyBindings(viewModel);
viewModel.init();