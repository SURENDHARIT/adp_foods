import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
// import uuidv4 from "uuid";
import { config } from "react-spring";
import './Carousel.css'

import img1 from '../../images/1.png'
import img2 from '../../images/2.png'
import img3 from '../../images/3.png'
import img4 from '../../images/4.png'
import img5 from '../../images/5.png'


const getTouches = (evt) => {
  return (
    evt.touches || evt.originalEvent.touches // browser API
  );
};

export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    enableSwipe: true,
    config: config.gentle
  };

  slides = [
    {
      
      content: <div className="carousel-img"><img  src={img1} alt="1" /> <h2>CHICKEN HEART WINGS</h2> </div>
    },
    {
      
      content: <div className="carousel-img"><img  src={img4} alt="1" /> <h2>CHICKEN NUGGETS</h2> </div>
    },
    {
      
      content:  <div className="carousel-img"><img  src={img3} alt="1" /> <h2>CHICKEN FINGERS</h2> </div>
    },
    {
      
      content:  <div className="carousel-img"><img  src={img4} alt="1" /> <h2>CHICKEN NUGGETS</h2> </div>
    },
    {
      
      content:  <div className="carousel-img"><img  src={img5} alt="1" /> <h2>CHICKEN KIVES</h2> </div>
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  handleTouchStart = (evt) => {
    if (!this.state.enableSwipe) {
      return;
    }

    const firstTouch = getTouches(evt)[0];
    this.setState({
      ...this.state,
      xDown: firstTouch.clientX,
      yDown: firstTouch.clientY
    });
  };

  handleTouchMove = (evt) => {
    if (!this.state.enableSwipe || (!this.state.xDown && !this.state.yDown)) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = this.state.xDown - xUp;
    let yDiff = this.state.yDown - yUp;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        /* left swipe */
        this.setState({
          goToSlide: this.state.goToSlide + 1,
          xDown: null,
          yDown: null
        });
      } else {
        /* right swipe */
        this.setState({
          goToSlide: this.state.goToSlide - 1,
          xDown: null,
          yDown: null
        });
      }
    }
  };

  render() {
    return (
      <div className="carousel"
        style={{ width: "80%", height: "200px", margin: "0 auto" }}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
      >
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={500}
          showNavigation={false}
          animationConfig={this.state.config}
        />
        <div
          style={{
            margin: "0 auto",
            marginTop: "2rem",
            width: "20%",
            display: "flex",
            justifyContent: "space-around"
          }}
        >
          {/* <div>
            <label>Go to slide: </label>
            <input name="goToSlide" onChange={this.onChangeInput} />
          </div>
          <div>
            <label>Offset Radius: </label>
            <input name="offsetRadius" onChange={this.onChangeInput} />
          </div>
          <div>
            <label>Show navigation: </label>
            <input
              type="checkbox"
              checked={this.state.showNavigation}
              name="showNavigation"
              onChange={(e) => {
                this.setState({ showNavigation: e.target.checked });
              }}
            />
          </div>
          <div>
            <label>Enable swipe: </label>
            <input
              type="checkbox"
              checked={this.state.enableSwipe}
              name="enableSwipe"
              onChange={(e) => {
                this.setState({ enableSwipe: e.target.checked });
              }}
            />
          </div>
          <div>
            <button
              onClick={() => {
                this.setState({ config: config.gentle });
              }}
              disabled={this.state.config === config.gentle}
            >
              Gentle Transition
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                this.setState({ config: config.slow });
              }}
              disabled={this.state.config === config.slow}
            >
              Slow Transition
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                this.setState({ config: config.wobbly });
              }}
              disabled={this.state.config === config.wobbly}
            >
              Wobbly Transition
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                this.setState({ config: config.stiff });
              }}
              disabled={this.state.config === config.stiff}
            >
              Stiff Transition
            </button>
          </div> */}
        </div>
      </div>
    );
  }
}
