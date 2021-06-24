import React, { Component } from "react";
import moviedex from "../images/moviedex.jpeg";
import weathertop from "../images/weathertop.jpeg";
import musiciandex from "../images/musiciandexresults.jpeg";
import quizapp from "../images/quizapp.jpeg";
import noteful from "../images/noteful2.jpeg";
import watchlist from "../images/Watchlist.jpeg";

class Portfolio extends Component {
  render() {
    return (
      <section className="portfolio">
        <div>
          <h2>Portfolio.</h2>
        </div>
        <div className="portfoliohead">
          <h3>Technical Skills</h3>
          <ul className="skills">
            <li className="skillsitem">React</li>
            <li className="skillsitem">Node.js</li>
            <li className="skillsitem">JavaScript</li>
            <li className="skillsitem">VS Code</li>
            <li className="skillsitem">Express</li>
            <li className="skillsitem">PostgreSQL</li>
            <li className="skillsitem">jQuery</li>
            <li className="skillsitem">RESTful API's</li>
            <li className="skillsitem">HTML/CSS</li>
            <li className="skillsitem">Agile</li>
            <li className="skillsitem">JIRA</li>
          </ul>
          <p>
            From helping you decide what movie to watch next, finding what the
            weather's like around the world, or getting some up to date
            information on how your favorite musician/band is doing and when
            they'll be coming to town next, check out a select few of my latest
            web development portfolio projects utilizing React.JS, Node.JS, JSX,
            JavaScript, Express, PostgreSQL, jQuery, RESTful API's, HTML/CSS and
            more.
          </p>
        </div>
        <ul className="portfoliogroup">
          <li className="portfolioitem">
            <h5>Moviedex</h5>
            <div className="overlayContainer">
              <a
                href="https://moviedex-client.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  id="inner"
                  src={moviedex}
                  className="portfolioimg"
                  width="200"
                  title="Moviedex"
                  alt="screenshot of Moviedex app with Star Wars results"
                />
              </a>
              <div className="projectlinks">
                <p>
                  The purpose of Moviedex is to help users decide on what movie
                  to watch, from a list of saved movies. Moviedex is a React web
                  application that allows users to call a public movie API,{" "}
                  <a
                    href="https://www.omdbapi.com/"
                    target="_blank"
                    title="OMDb API"
                    rel="noreferrer"
                  >
                    OMDb
                  </a>
                  , save/delete those movies to/from Moviedex's server, and then
                  click a button to randomly generate one of those movies as the
                  selected movie to watch.
                </p>
                <div className="projectlinksitem">
                  <div>
                    <p>
                      Repos <br />
                      <a
                        href="https://github.com/zacharyjameson/moviedex-client"
                        target="_blank"
                        title="Moviedex Client Repo"
                        rel="noreferrer"
                      >
                        Client
                      </a>{" "}
                      <br />
                      <a
                        href="https://github.com/zacharyjameson/moviedex-server"
                        target="_blank"
                        title="Moviedex Server Repo"
                        rel="noreferrer"
                      >
                        Server
                      </a>
                    </p>
                  </div>
                  <div>
                    <p>
                      Demo <br />
                      <a
                        href="https://moviedex-client.vercel.app/"
                        target="_blank"
                        title="Moviedex Demo"
                        rel="noreferrer"
                      >
                        Moviedex
                      </a>
                    </p>
                  </div>
                </div>

                <p>
                  Skills Used: <br />
                  React, JavaScript, JSX, PostgreSQL, Node.js, Express, Vercel,
                  Heroku, JIRA and HTML/CSS
                </p>
              </div>
            </div>
          </li>
          <li className="portfolioitem">
            <h5>Locksley Finance</h5>
            <div className="overlayContainer">
              <a
                href="https://locksley.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  id="inner"
                  src={watchlist}
                  className="portfolioimg"
                  width="200"
                  title="Locksley"
                  alt="screenshot of Locksley watchlist"
                />
              </a>
              <div className="projectlinks">
                <p>
                  The purpose of Locksley Finance is to give users a simple tool
                  to search, track and stay up to date on a handful of their
                  favorite stocks they'd like to keep tabs on. Locksley Finance
                  is a React web application that allows users to call a public
                  stock API,{" "}
                  <a
                    href="https://twelvedata.com/"
                    target="_blank"
                    title="twelvedata"
                    rel="noreferrer"
                  >
                    twelvedata
                  </a>
                  , Users may search for stocks by ticker symbol, save/remove
                  them to/from their watchlist as well as refresh all of the
                  data for the stocks in their watchlist in order to get the
                  latest prices and information.
                </p>
                <div className="projectlinksitem">
                  <div>
                    <p>
                      Repos <br />
                      <a
                        href="https://github.com/zacharyjameson/locksley-client"
                        target="_blank"
                        title="Locksley Client Repo"
                        rel="noreferrer"
                      >
                        Client
                      </a>{" "}
                      <br />
                      <a
                        href="https://github.com/zacharyjameson/locksley-server"
                        target="_blank"
                        title="Locksley Server Repo"
                        rel="noreferrer"
                      >
                        Server
                      </a>
                    </p>
                  </div>
                  <div>
                    <p>
                      Demo <br />
                      <a
                        href="https://locksley.vercel.app/"
                        target="_blank"
                        title="Moviedex Demo"
                        rel="noreferrer"
                      >
                        Locksley Finance
                      </a>
                    </p>
                  </div>
                </div>
                <p>
                  Skills Used: <br /> React, JavaScript, Express, PostreSQL,
                  Node.js, Vercel, Heroku, JIRA and HTML/CSS.
                </p>
              </div>
            </div>
          </li>
          <li className="portfolioitem">
            <h5>Weathertop</h5>
            <div className="overlayContainer">
              <a
                href="https://zacharyjameson.github.io/weathertop"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={weathertop}
                  width="200"
                  alt="screenshot of weathertop app with san francisco weather results"
                />
              </a>

              <div className="projectlinks">
                <p>
                  Simple web application utilizing public API,{" "}
                  <a
                    href="https://openweathermap.org/api"
                    target="_blank"
                    title="OpenWeather"
                    rel="noreferrer"
                  >
                    OpenWeather
                  </a>
                  , to find the current weather, 'feels like' temperature as
                  well as the humidity level in a queried city. Allows users to
                  return data in imperial or metric systems, but defaults to
                  kelvin if no option is selected.
                </p>
                <div className="projectlinksitem">
                  <div>
                    <p>
                      Repos <br />
                      <a
                        href="https://github.com/zacharyjameson/weathertop"
                        target="_blank"
                        title="Weathertop Client Repo"
                        rel="noreferrer"
                      >
                        Client
                      </a>{" "}
                      <br />
                    </p>
                  </div>
                  <div>
                    <p>
                      Demo <br />
                      <a
                        href="https://zacharyjameson.github.io/weathertop"
                        target="_blank"
                        title="Weathertop Demo"
                        rel="noreferrer"
                      >
                        Weathertop
                      </a>
                    </p>
                  </div>
                </div>
                <p>
                  Skills Used: <br />
                  JavaScript, React, JSX, HTML/CSS, and GH Pages
                </p>
              </div>
            </div>
          </li>
          <li className="portfolioitem">
            <h5>Musiciandex</h5>
            <div className="overlayContainer">
              <a
                href="https://zacharyjameson.github.io/musiciandex/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={musiciandex}
                  width="200"
                  alt="screenshot of musiciandex homepage"
                />
              </a>

              <div className="projectlinks">
                <p>
                  Search for a musician/band to view their upcoming shows, top
                  albums and, a brief bio about them. Built using JavaScript,
                  Web APIs, HTML, CSS.
                </p>
                <div className="projectlinksitem">
                  <div>
                    <p>
                      Repos <br />
                      <a
                        href="https://github.com/zacharyjameson/musiciandex"
                        target="_blank"
                        title="Musiciandex Client Repo"
                        rel="noreferrer"
                      >
                        Client
                      </a>
                    </p>
                  </div>
                  <div>
                    <p>
                      Demo <br />
                      <a
                        href="https://zacharyjameson.github.io/musiciandex/"
                        target="_blank"
                        title="Musiciandex Demo"
                        rel="noreferrer"
                      >
                        Musiciandex
                      </a>
                    </p>
                  </div>
                </div>
                <p>
                  Skills Used: <br />
                  JavaScript, jQuery, HTML/CSS and JIRA
                </p>
              </div>
            </div>
          </li>
          <li className="portfolioitem">
            <h5>One Quiz to Rule Them All</h5>
            <div className="overlayContainer">
              <a href="https://zacharyjameson.github.io/quiz-app/">
                <img
                  src={quizapp}
                  width="200"
                  alt="screen shot of quiz app question"
                />
              </a>
              <div className="projectlinks">
                <p>
                  A meme-based quiz app going over the trials, tribulations and,
                  overall tomfoolery in Middle Earth. Built using HTML, CSS,
                  JavaScript, and jQuery.
                </p>
                <div className="projectlinksitem">
                  <div>
                    <p>
                      Repos <br />
                      <a
                        href="https://github.com/zacharyjameson/quiz-app"
                        target="_blank"
                        rel="noreferrer"
                        title="LOTR Quiz App Repo"
                      >
                        Client
                      </a>
                    </p>
                  </div>
                  <div>
                    <p>
                      Demo <br />
                      <a
                        href="https://zacharyjameson.github.io/quiz-app/"
                        target="_blank"
                        rel="noreferrer"
                        title="LOTR Quiz Demo"
                      >
                        LOTRquiz
                      </a>
                    </p>
                  </div>
                </div>
                <p>
                  Skills Used: <br /> JavaScript, jQuery, HTML/CSS, JIRA
                </p>
              </div>
            </div>
          </li>
          <li className="portfolioitem">
            <h5>Noteful</h5>
            <div className="overlayContainer">
              <a
                href="https://noteful-inky.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={noteful} width="200" alt="noteful demo screenshot" />
              </a>
              <div className="projectlinks">
                <p>
                  Full-stack notes application that allows users to create
                  folders that contain various notes included in a given folder.
                  A server and database were built as the backend as well, which
                  can be viewed{" "}
                  <a
                    href="https://github.com/zacharyjameson/noteful-server"
                    target="_blank"
                  >
                    here
                  </a>
                  .
                </p>
                <div className="projectlinksitem">
                  <div>
                    <p>
                      Repos <br />
                      <a
                        href="https://github.com/zacharyjameson/noteful"
                        target="_blank"
                        rel="noreferrer"
                        title="Noteful Client Repo"
                      >
                        Client
                      </a>
                      <br />
                      <a
                        href="https://github.com/zacharyjameson/noteful-server"
                        target="_blank"
                        rel="noreferrer"
                        title="Noteful Server Repo"
                      >
                        Server
                      </a>
                    </p>
                  </div>
                  <div>
                    <p>
                      Demo <br />
                      <a
                        href="https://noteful-inky.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                        title="Noteful Demo"
                      >
                        Noteful
                      </a>
                    </p>
                  </div>
                </div>
                <p>
                  Skills Used: <br />
                  React, JSX, JavaScript Heroku, Vercel, PostgreSQL, Node.js,
                  Express, HTML/CSS, and JIRA.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    );
  }
}

export default Portfolio;
