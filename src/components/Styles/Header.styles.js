import styled from 'styled-components'

export const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 10rem;

  @media (max-width: 1198px) {
    margin: 0 5rem;
  }

  @media (max-width: 650px) {
    margin: 0 2rem;
  }
`

export const TitleText = styled.h2`
  font-size: 2rem;
  color: #ff9966;
  /* background-image: linear-gradient(45deg, #f3ec78, #af4261);
  background-size: 100%;
  background-repeat: repeat;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-background-clip: text;
  -moz-text-fill-color: transparent; */
`