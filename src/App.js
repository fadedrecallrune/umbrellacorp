import React, { Component } from "react";
import styled from "styled-components";
import pn from "./images/pn.png";
import prq from "./images/prq.jpg";
import pa1 from "./images/pa1.jpg";
import RedQueen from "./components/RedQueen";
import Alice from "./components/Alice";
import { Route } from "react-router-dom";
import Nemesis from "./components/Nemesis";
import PickShell from "./components/PickShell";
import Link from "react-router-dom/Link";
import "./App.css";


class App extends Component {
  render() {
    return (
      <MainBox className="App">
        <PickBox>
          <Route path="/main/nemesis" component={PickShell(Nemesis)} />
          <Route path="/main/redqueen" component={PickShell(RedQueen)} />
          <Route path="/main/alice" component={PickShell(Alice)} />

          <Link className="but" to="/main/nemesis">
            {" "}
            <div class="card">
              <div class="card-header">Nemesis</div>
              <div class="card-main">
                <PickImage src={pn} />
              </div>
            </div>
          </Link>
          <Link className="but" to="/main/redqueen">
            {" "}
            <div class="card">
              <div class="card-header">Red Queen</div>
              <div class="card-main">
                <PickImage src={prq} />
              </div>
            </div>
          </Link>
          <Link className="but" to="/main/alice">
            {" "}
            <div class="card">
              <div class="card-header">Alice</div>
              <div class="card-main">
                <PickImage src={pa1} />
              </div>
            </div>
          </Link>
        </PickBox>
      </MainBox>
    );
  }
}

export default App;

const MainBox = styled.div`
  width: 100vw;
  height: 100vh;
`;

const PickImage = styled.img`
  width: 100px;
  height: 70px;
`;

const PickBox = styled.div`
  position: relative;
  height: 20vh;
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  right: 20px;
  top: 10px;
`;
