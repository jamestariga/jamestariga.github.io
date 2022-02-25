import styled from "styled-components"
import { AiOutlineGithub } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
import { SiDevpost } from 'react-icons/si'

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 5rem;
  margin: 10rem 10rem 20rem 10rem;
  background: rgba( 255, 255, 255, 0.1 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 2.5px );
  -webkit-backdrop-filter: blur( 2.5px );
  border-radius: 20px;
  border: 1px solid rgba( 255, 255, 0, 0.18 );

  @media (max-width: 970px) {
    margin: 10rem 5rem;
    padding: 3rem 1.5rem;
  }
  
  @media (max-width: 650px) {
    margin: 10rem 2rem;
    padding: 2rem;
  }
`

export const AboutInnerContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  /* border: 1px solid; */

  @media (max-width: 1128px) {
    flex-wrap: wrap;
  }  
`

export const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30%;
  /* border: 1px solid; */
  height: auto;
  padding: 2em 2em 0 2em;

  @media (max-width: 1128px) {
    width: 100%;
  }
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  /* border: 1px solid; */
  height: auto;
  padding: 2rem;

  @media (max-width: 1128px) {
    width: 100%;
  }
`

export const ImageDisplay = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;

  @media (max-width: 450px) {
    max-width: 150px;
  }
`

export const Title = styled.h4`
  font-size: 1.5em;
  color: #fff;

  @media (max-width: 850px) {
    text-align: center;
  }

  @media (max-width: 450px) {
    font-size: 1em;
  }
`

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const IconsGitHub = styled(AiOutlineGithub)`
  color: #000;
  transform: scale(2);
  margin: 0.5rem;
  padding: 0 1em;

  @media (max-width: 652px) {
    transform: scale(1.75);
    margin: 0.25rem;
  }
`

export const IconsLinkedIn = styled(BsLinkedin)`
  color: #0e76a8;
  transform: scale(2);
  margin: 0.5rem;
  padding: 0 1em;

  @media (max-width: 652px) {
    transform: scale(1.75);
    margin: 0.25rem;
  }
`

export const IconsDev = styled(SiDevpost)`
  color: #003E54;
  transform: scale(2);
  margin: 0.5rem;
  padding: 0 1em;

  @media (max-width: 652px) {
    transform: scale(1.75);
    margin: 0.25rem;
  }
`

export const Text = styled.p`
  font-size: 1.25em;
  color: #fff;
  text-align: left;
  letter-spacing: 0.01em;

  @media (max-width: 850px) {
    font-size: 1em;
  }

  @media (max-width: 652px) {
    font-size: 0.85em;
    text-align: center;
  }
`