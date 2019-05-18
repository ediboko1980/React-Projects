import React, { Component } from 'react'

export default class AboutSection extends Component {
  render() {
    return (
      <div>
  <React.Fragment>   
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-sm-6 col-md-5">
                        <div className="about-img">
                          <img src="assets/img/hansmcmurdy.png" className="img-fluid rounded b-shadow-a" style={{height: '9em'}} alt />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-7">
                        <div className="about-info">
                          <p><span className="title-s">Name: </span> <span>Hans McMurdy</span></p>
                          <a href="https://github.com/hansuxdev" className=" fa fa-github-square" />
                          <a href="https://www.linkedin.com/in/brett-hans-mcmurdy-0a44a641/" className=" fa fa-linkedin-square" />
                          <a href="https://codepen.io/HansUXdev/" className=" fa fa-codepen" />
                          <a href="https://medium.com/@HansOnConsult" className=" fa fa-medium" />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      <p className="title-s">Skills</p>
                      <span>HTML/CSS</span> <span className="pull-right">99%</span>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '99%'}} aria-valuenow={99} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <span>JAVASCRIPT</span> <span className="pull-right">90%</span>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '90%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <span>PHP</span> <span className="pull-right">50%</span>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <span>WordPress/Custom CMS</span> <span className="pull-right">90%</span>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '90%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <span>DevOp/Cloud Ops</span> <span className="pull-right">90%</span>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '90%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <span>Much more</span> <span className="pull-right">100%</span>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      {/*  */}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">
                          About me
                        </h5>
                      </div>
                      <p className="lead">
                        This is the hardest part of the whole site. I'd rather talk to people in person about various projects, startups, etc than editing a personal website.
                      </p>
                      <p className="lead">
                        <b>Verbs</b> that describe me: <br />
                        Code, Make, Build, Game
                      </p>
                      <p className="lead">
                        I try to live passionately which is way when I get things done and here are just a few examples.
                        <br />
                        Coding - I've build multiple CLI tools for fun. Most of it pretty hacky but they've gotten the job done. Check out my github.
                        <br />
                        Make/Build - I don't just code and game, I make stuff like metal smelters, jewerly for wife, simple circuit boards and other fun stuff.
                        <br />
                        Gaming - I've been in the top 200 global leadership boards in Battlefield Bad company 2, Battlefield 1, 3, 4, 5 and Medal of honor. In multiple categories, knife kills, longest headshot, tank kills, jet kills, etc. 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-counter paralax-mf bg-image" style={{backgroundImage: 'url(img/counters-bg.jpg)'}}>
        <div className="overlay-mf" />
        <div className="container">
          <div className="row">
            <div className="col-sm-3 col-lg-3">
              <div className="counter-box counter-box pt-4 pt-md-0">
                <div className="counter-ico">
                  <span className="ico-circle"><i className="ion-checkmark-round" /></span>
                </div>
                <div className="counter-num">
                  <p className="counter">5</p>
                  <span className="counter-text">YEARS OF EXPERIENCE</span>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-lg-3">
              <div className="counter-box pt-4 pt-md-0">
                <div className="counter-ico">
                  <span className="ico-circle"><i className="ion-ios-calendar-outline" /></span>
                </div>
                <div className="counter-num">
                  <p className="counter">50</p>
                  <span className="counter-text">PROJECTS</span>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-lg-3">
              <div className="counter-box pt-4 pt-md-0">
                <div className="counter-ico">
                  <span className="ico-circle"><i className="ion-ios-people" /></span>
                </div>
                <div className="counter-num">
                  <p className="counter">20</p>
                  <span className="counter-text">TOTAL CLIENTS</span>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-lg-3">
              <div className="counter-box pt-4 pt-md-0">
                <div className="counter-ico">
                  <span className="ico-circle"><i className="ion-ribbon-a" /></span>
                </div>
                <div className="counter-num">
                  <p className="counter">4</p>
                  <span className="counter-text">AWARD WON</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


  </React.Fragment>
  <style jsx>{`
.about-mf .box-shadow-full {
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.about-mf .about-img {
  margin-bottom: 2rem;
}

.about-mf .about-img img {
  margin-left: 10px;
}

.skill-mf span {
  color: #4e4e4e;
}

.skill-mf .progress {
  background-color: #cde1f8;
  margin: .5rem 0 1.2rem 0;
  border-radius: 0;
  height: .7rem;
}

.skill-mf .progress .progress-bar {
  height: .7rem;
  background-color: #0078ff;
}

/*======================================
//--//-->   COUNTER
======================================*/

.counter-box {
  color: #fff;
  text-align: center;
}

.counter-ico {
  margin-bottom: 1rem;
}

.counter-ico .ico-circle {
  height: 60px;
  width: 60px;
  line-height: 1.8;
  box-shadow: 0 0 0 10px #cde1f8;
}

.counter-num .counter {
  font-size: 2rem;
  margin-bottom: 0;
}
@media (min-width: 577px) {
  .counter-box {
    margin-bottom: 1.8rem;
  }
}

.overlay-mf {
  background-color: #0078ff;
}

.overlay-mf {
  position: absolute;
  top: 0;
  left: 0px;
  padding: 0;
  height: 100%;
  width: 100%;
  opacity: .7;
}


  `}</style>
      </div>
    )
  }
}