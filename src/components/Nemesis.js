import React, { Component } from 'react'
import styled, {keyframes} from 'styled-components'
import pn from '../images/pn.png'
import {fadeInLeft, fadeInRight, fadeInUp} from 'react-animations'


export default class Nemesis extends Component {
  render() {
    return (
    <InfoBox>
        <Status>
            <Picture src={pn} />
            <MoreInfo>more info </MoreInfo>
            <StatusText>
          <h4>Status:<Green> Alive </Green></h4>
          <Hr />
          <h4>Threat: <Green> None </Green> </h4>
          <Hr />
          </StatusText>
          <BigHr />
          <SecondStatus>
          <h4>Location: 50.4501°N, 30.5234°E </h4>
          <Hr2 />
          <h4>Purpose: Military Forces </h4>
          <Hr2 />
          <h4>t-Virus Tyrant </h4>
          <Hr2 />          
          <h4>Creator: NE-α Type parasite </h4>
          
          </SecondStatus>
      </Status>
      <Discription>
          <P>
          The European branch of Umbrella originally developed the Nemesis as an offshoot of the American-led Tyrant project, with the emphasis on increasing the host's intelligence and ability to follow orders without compromising the Tyrant's inherent strength and power. The breakthrough came with the creation of the NE-α Type parasite. This parasite could take control of its host's brainstem and act as a second brain replacing the host's now useless original one.
          </P>
          <P>
          The Umbrella Corporation deployed the Nemesis to hunt down and kill the surviving members of the S.T.A.R.S. team, who had been a thorn in the corporation's side since the original Mansion Incident with the company seeing a chance to deal with them in the chaos of the Raccoon City Destruction Incident.brainstem and act as a second brain replacing the host's now useless original one.
           </P>
      </Discription>
    </InfoBox>
    )
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
border: 2px solid #EF9A9A;    
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

const Green = styled.span`
color: green;
`;

const BigHr = styled.hr`
margin: 17px;
position: relative;
width:260px;
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
top: 200px;
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