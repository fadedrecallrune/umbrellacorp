import React, { Component } from "react";
import { Motion, spring } from "react-motion";
import { fadeIn } from "react-animations";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import umb from "./images/umb.jpg";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      username: ""
    };
  }

  Change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="landing">
        <Img src={umb} />
        <div className="textshrink">
          <Motion
            defaultStyle={{
              letterSpacing: 45,
              opacity: 0
            }}
            style={{
              letterSpacing: animate(5),
              opacity: animate(1)
            }}
          >
            {({ letterSpacing, opacity }) => (
              <h1
                style={{
                  letterSpacing,
                  opacity
                }}
              >
                Umbrella Corp.
              </h1>
            )}
          </Motion>
        </div>
        <FadeInDiv className="loginForm">
          <form className="ModalForm">
            <Input
              name="username"
              value={this.state.username}
              onChange={e => this.Change(e)}
              placeholder="login..."
            />
            <Input
              name="password"
              value={this.state.password}
              type="password"
              onChange={e => this.Change(e)}
              placeholder="password..."
            />
            <Link className="but" to="main">
              {" "}
              <button className="button">
                {" "}
                Log In <i className="fa fa-fw fa-chevron-right" />
              </button>
            </Link>
          </form>
        </FadeInDiv>
      </div>
    );
  }
}
export default Landing;

class Input extends Component {
  render() {
    return (
      <div className="Input">
        <input
          className="input"
          id={this.props.name}
          autocomplete="false"
          required
          type={this.props.type}
          placeholder={this.props.placeholder}
        />
        <label className="label" for={this.props.name} />
      </div>
    );
  }
}

const animate = val =>
  spring(val, {
    stiffness: 33,
    damping: 27
  });

const LoginFadeIn = keyframes`${fadeIn}`;

const FadeInDiv = styled.div`animation: 2s ${LoginFadeIn};`;

const Img = styled.img`
  width: 270px;
  position: relative;
  height: 220px;
  text-align: center;
  top: -80px;
`;
