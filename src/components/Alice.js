import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import pa1 from "../images/pa1.jpg";
import { fadeInLeft, fadeInRight } from "react-animations";

export default class Alice extends Component {
  render() {
    return (
      <InfoBox>
        <Status>
          <Picture src={pa1} />
          <MoreInfo>more info </MoreInfo>
          <StatusText>
            <h4>
              Status:<Green> Alive </Green>
            </h4>
            <Hr />

            <h4>
              Threat: <Red> High </Red>{" "}
            </h4>
            <Hr />
          </StatusText>
          <BigHr />
          <SecondStatus>
            <h4>Location: Unknown </h4>
            <Hr2 />
            <h4>Creator: Umbrella Corp. </h4>
            <Hr2 />
            <h4>Purpose: Military Forces </h4>
            <Hr2 />
            <h4>Creator: NE-α Type parasite </h4>
          </SecondStatus>
        </Status>
        <Discription>
          <P>
            Alice was created by Umbrella as a clone of Alicia Marcus, the
            daughter of co-founder James Marcus. Alice's purpose was to protect
            the Looking Glass House and she remained unaware of her true nature
            as a clone, thinking that she was the original as all Umbrella
            clones were created to believe. To the public, she was married to
            Spence; however, their marriage was a shame for the sake of guarding
            the mansion. They became romantically involved at some point down
            the line.
          </P>
          <P>
            In 2002, Alice began talking to an Umbrella researcher named Lisa
            Addison, who was secretly a mole working for former FBI agent Matt
            Addison. Rather than arrest her, Alice offered to help Lisa expose
            Umbrella's bio-weapons research through a plan to disable the Red
            Queen security system and allow the theft of a T-virus sample. Alice
            had likely been influenced by Alicia's innate sense of compassion.
          </P>
        </Discription>
      </InfoBox>
    );
  }
}

const InfoBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const fadeInLeftAnimation = keyframes`${fadeInRight}`;

const Status = styled.div`
  position: relative;
  height: 250px;
  width: 270px;
  top: 310px;
  left: 60px;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border: 2px solid #ef9a9a;
  background-color: #eaf2ef;
  animation: 1.7s ${fadeInLeftAnimation};
`;

const Picture = styled.img`
  width: 120px;
  height: 90px;
  position: absolute;
  top: -30px;
  left: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border: 2px solid #ef9a9a;
  border-radius: 4px;
`;

const StatusText = styled.div`
  position: relative;
  top: -30px;
  left: 150px;
`;

const Hr = styled.hr`
  margin: -15px;
  padding: 0px;
  position: relative;
  width: 60px;
  left: 35px;
  border: 0;
  border-top: 1px solid grey;
`;

const Green = styled.span`color: green;`;
const Red = styled.span`color: red;`;

const BigHr = styled.hr`
  margin: 17px;
  position: relative;
  width: 260px;
  left: -14px;
  top: -14px;
  border-top: 1px solid red;
`;
const MoreInfo = styled.h4`
  position: relative;
  top: 50px;
  left: 30px;
`;

const SecondStatus = styled.div`
  position: relative;
  text-align: center;
  margin: -18px;
`;

const Hr2 = styled.hr`
  margin: -14px;
  position: relative;
  width: 100px;
  left: 115px;
  border: 0;
  border-top: 1px solid grey;
`;

const fadeInRightAnimation = keyframes`${fadeInLeft}`;

const Discription = styled.div`
  position: relative;
  width: 29%;
  margin: 10px;
  top: 180px;
  left: 330px;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border: 2px solid #ef9a9a;
  background-color: #fff;
  animation: 1.7s ${fadeInRightAnimation};
`;

const P = styled.p`
  font-weight: normal;
  padding: 0 7px;
  font-size: 13px;
`;
