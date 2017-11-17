import React, { Component } from 'react'
import styled, {keyframes} from 'styled-components'
import prq from '../images/prq.jpg'
import {fadeInLeft, fadeInRight} from 'react-animations'


export default class RedQueen extends Component {
  render() {
    return (
    <InfoBox>
        <Status>
            <Picture src={prq} />
            <MoreInfo>more info </MoreInfo>
            <StatusText>
          <h4>Status:<Green> Active </Green></h4>
          <Hr />
          <h4>Threat: <Green> None </Green> </h4>
          <Hr />
          </StatusText>
          <BigHr />
          <SecondStatus>
          <h4>Location: Hive </h4>
          <Hr2 />
          <h4>Creator: Dr. A.Asaacs </h4>
          <Hr2 />
          <h4>Template: Alicia Marcus </h4>
          <Hr2 />
          <h4>Artificial Intelligence </h4>
          </SecondStatus>
      </Status>
      <Discription>
          <P>
          17 months before the events of Resident Evil, the Red Queen received a secret file to her memory banks from Alicia Marcus, co-owner of the Umbrella Corporation and whom she was based on. The file was a recording of Dr. Isaacs convincing the Umbrella High Command to release the T-Virus into the world to kill off every other human that didn't work for them; thus the world's overpopulation and the strain on its resources would be solved, albeit in an extreme and gruesome manner.
          </P>
          <P>
Though programmed to obey the Umbrella Corporation and never harm its employees, the Red Queen had also been programmed to value human life. Thus she began to undermine her creators by secretly using indirect methods to stop them. When operatives were needed to protect the secondary entrance to the Hive at the Looking Glass House, the Red Queen.
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
left: 50px;
border-radius: 4px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
border: 2px solid #EF9A9A;    
background-color: #eaf2ef;
animation: 1.7s ${fadeInLeftAnimation}

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


const fadeInRightAnimation = keyframes`${fadeInLeft}`


const Discription = styled.div`
position: relative;
width: 29%;
margin: 10px;
top: 200px;
left: 330px;
display: flex;
flex-direction:column;
justify-content: center;
overflow: auto;
flex-shrink: 0;
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