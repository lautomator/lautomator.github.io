import React from 'react';
import ReactDOM from 'react-dom';
import {navData, siteData, ProjectData} from './data';
import './index.css';

function NavItem(props) {
    if (props.name === 'Projects') {
        return (
            <li>
                <a
                    className='nav-link'
                    href={props.url}>
                    {props.name}
                </a>
            </li>
        );
    } else {
        return (
            <li>
                <a
                    className='nav-link'
                    href={props.url}
                    target="_blank"
                    rel="noopener noreferrer">
                    {props.name}
                </a>
            </li>
        );
    }
}

function MobileNav(props) {
    return (
        <div className="navbar-header">
            <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar"
                aria-expanded="false"
                aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
        </div>
    );
}

class MainNav extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <MobileNav />
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul>
                            {navData.map((data, key) => {
                                return (
                                    <NavItem
                                        key={key}
                                        url={data.url}
                                        name={data.name}
                                    />
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

function SiteTitle(props) {
    return (
        <h2 className="site-title">{props.siteTitle}</h2>
    );
}

function SiteRole(props) {
    return (
        <h3>{props.title}</h3>
    );
}

function IntroText(props) {
    return (
        <p className="intro-text">{props.introText}</p>
    );
}

function Button(props) {
    return (
        <p className='cta-button'>
            <a
                className="btn btn-default btn-sm"
                role="button"
                target="_blank"
                rel="noopener noreferrer"
                href={props.buttonUrl}>
                {props.buttonTxt}
            </a>
        </p>
    );
}

class Hero extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <SiteTitle siteTitle={siteData.name} />
                    <SiteRole title={siteData.title} />
                    <IntroText introText={siteData.description} />
                    <Button 
                        buttonUrl={siteData.resume}
                        buttonTxt='my resum&eacute; &raquo;'
                    />
                    <Button 
                        buttonUrl={siteData.siteRepo}
                        buttonTxt='site repository  &raquo;'
                    />
                </div>
            </div>
        );
    }
}

function ProjectImage(props) {
    if (props.imgUrl === "") {
        return (
            <p>                
                <img
                    className="img-responsive project-img"
                    src={props.imgImage}
                    alt={props.imgName}
                />
            </p>
        ); 
    } else {
        return (
            <p>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={props.imgUrl}
                    title={props.imgName}>
                    <img
                        className="img-responsive project-img"
                        src={props.imgImage}
                        alt={props.imgName}
                    />
                </a>
            </p>
        );
    }
}

function TechTags(props) {
    return (
        <span className="tech-category bg-info">{props.language}</span>
    );
}

function ProjectText(props) {
    const languages = props.projTextTech;

    return (
        <div>
            <h3>{props.projTextName}</h3>
            <p>{props.projTextYear}</p>
            <p>{props.projTextDescription}</p>
            <p>
                {languages.map((data, key) => {
                    return (
                        <TechTags
                            key={key}
                            language={data}
                        />
                    );
                })}
            </p>
        </div>
    );
}

function ProjectLinks(props) {
    if (props.linksProjectURL === "") {
        return (
            <p>
                <a
                    href={props.linksRepoURL}
                    title={props.linksTitle}
                    target="_blank"
                    rel="noopener noreferrer">

                    <span className={props.linksRepoBadge}></span>
                </a>&nbsp;
            </p>
        );
    } else {
        return (
            <p>
                <a
                    href={props.linksRepoURL}
                    title={props.linksTitle}
                    target="_blank"
                    rel="noopener noreferrer">

                    <span className={props.linksRepoBadge}></span>
                </a>&nbsp;
                <a
                    href={props.linksProjectURL}
                    title={props.linksName}
                    target="_blank"
                    rel="noopener noreferrer">

                    <span className="fa fa-arrow-circle-right fa-2x"></span>
                </a>
            </p>
        );
    }
}

function Project(props) {
    return (
        <div className="width-33 a-project">
            <ProjectImage
                imgUrl={props.projectURL}
                imgName={props.name}
                imgImage={props.projectImage}
            />
            <ProjectText
                projTextTech={props.tech}
                projTextName={props.name}
                projTextYear={props.year}
                projTextDescription={props.description}
            />
            <ProjectLinks
                linksRepoURL={props.repoURL}
                linksTitle={props.name}
                linksRepoBadge={props.repoBadge}
                linksProjectURL={props.projectURL}
                linksName={props.name}
            />
        </div>
    );
}

class AllProjects extends React.Component {
    render() {
        return (
            <div className="container" id="projects">
                <h3>Projects</h3>
                <div className="row">
                    {ProjectData.map((data, key) => {
                        return (
                            <Project
                                key={key}
                                projectURL={data.projectURL}
                                projectImage={data.projectImage}
                                name={data.name}
                                tech={data.tech}
                                year={data.year}
                                description={data.description}
                                repoURL={data.repoURL}
                                repoBadge={data.repoBadge}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

function Footer() {
    let date = new Date();
    const year = date.getFullYear();
    return (
        <div className="container">
            <hr />
            <footer>
                <p>
                    &copy;&nbsp;<span>{year}</span>&nbsp;
                    <span>{siteData.name} :: {siteData.footerText}</span>
                </p>
            </footer>
        </div>
    );
}


// MAIN ==================
function Main() {
    return (
        <div>
            <MainNav />
            <Hero />
            <AllProjects />
            <Footer />
        </div>
    );
}


// DOM ===================
ReactDOM.render(
    <Main />,
    document.getElementById('root')
);
