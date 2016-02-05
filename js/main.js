var data = {
    // site data
    name: 'John Merigliano',
    role: 'Full Stack Web Developer',
    urls: [
        {
            name: 'apps',
            url: 'index.html#apps',
            cat: 'nav'
        },
        {
            name: 'resume',
            url: 'index.html#resume',
            cat: 'nav'
        },
        {
            name: 'contact',
            url: 'index.html#contact',
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
            name: 'Collections',
            year: '2016',
            description: 'Keep track of things and write journal entries.',
            repoURL: 'https://github.com/lautomator/collections',
            projectURL: '',
            projectImage: 'img/',
            tech: [
                'Python',
                'Django',
                'HTML5',
                'CSS',
                'PostgreSQL'
            ]
        },
        {
            name: 'Neighborhood Map',
            year: '2016',
            description: 'This is a single page application featuring a map of restaurant locations in my area. Additional functionality includes highlighted locations, third-party data about those locations and various ways to browse the content. Some of those include filtering results and getting additional info from the map markers.',
            repoURL: 'https://github.com/lautomator/udacity-fe-nano/tree/master/P5',
            projectURL: 'apps/neighborhood-map/',
            projectImage: 'img/mw-01.png',
            tech: [
                'HTML5',
                'CSS',
                'jQuery',
                'Knockout',
                'FourSquare API',
                'Google MAps API'
            ]
        },
        {
            name: 'Codebreaker Game',
            year: '2015',
            description: 'This is a guessing game. This game is based on the classic Atari 2600 game of the same title. The object of the game is for the player to guess 3 numbers between 0 and 9 in the correct order. The game is written entirely in javaScript, HTML/CSS.',
            repoURL: 'https://github.com/lautomator/codebreaker',
            projectURL: 'apps/codebreaker/',
            projectImage: 'img/cb-01.png',
            tech: [
                'HTML5',
                'CSS',
                'JavaScript'
            ]
        },
        {
            name: 'My Wiki',
            year: '2015',
            description: 'Project created as part of coursework for Udacity\'s Web Development Course. The site is created using Python and Google App Engine; Users can create their own account and make Wiki pages that include images and HTML formatting.',
            repoURL: 'https://github.com/lautomator/my_wiki',
            projectURL: 'http://t-decoder-840.appspot.com/login',
            projectImage: 'img/mw-01.png',
            tech: [
                'Python',
                'Google App Engine',
                'HTML5',
                'CSS',
                'Jinja Templates'
            ]
        },
        {
            name: 'Frogger!',
            year: '2015',
            description: 'This project was created, in part, to fulfill the requirements of my Udacity Web Developer Nano Degree. It uses a game engine and object oriented programming.',
            repoURL: 'https://github.com/lautomator/my_wiki',
            projectURL: 'apps/frogger',
            projectImage: 'img/mw-01.png',
            tech: [
                'HTML5',
                'CSS',
                'jQuery'
            ]
        },
        {
            name: 'Losang Samten Website',
            year: '2015',
            description: 'This is the website for Tibetan Mandala artist, Losang Samten.',
            repoURL: 'https://bitbucket.org/lautomator/losang-samten-website/',
            projectURL: 'http://www.losangsamten.com/',
            projectImage: 'img/mw-01.png',
            tech: [
                'HTML5',
                'CSS',
                'jQuery',
                'Knockout'
            ]
        }
    ],
    resume: 'files/merigliano_resume_09_2015_sans.pdf',
    status: 'getting data ...'
};

var viewModel = {
    siteData: ko.observableArray(),
    pageStatus: ko.observable(),
    pages: ko.observableArray(),

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
    init: function() {
        // define the site data
        this.siteData(data);
        // define status
        this.pageStatus(data.status);
        // deifne the navigation
        this.pages(this.getNav(data.urls));

    }
};

ko.applyBindings(viewModel);
viewModel.init();