import styled from "styled-components"

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
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
  width: 100%;
  height: 100%;
  border: 1px solid;
  padding: 2rem;

  @media (max-width: 970px) {
    padding: 1rem;
  }
  
  @media (max-width: 650px) {
    padding: 0.5rem;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  border: 1px solid;
  height: 100%;
  margin: 0 1rem;
`

export const DescriptionContainer = styled.div`
  width: 50%;
  border: 1px solid;
  height: 100%;
  margin: 0 1rem;
`

export const ImageDisplay = styled.img`
  max-width: 100%;
  height: 100%;
`