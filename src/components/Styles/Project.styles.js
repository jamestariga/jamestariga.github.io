import styled from "styled-components"

export const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
  padding: 5rem;
  margin: 5rem 10rem;
  background: rgba( 255, 255, 255, 0.1 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 2.5px );
  -webkit-backdrop-filter: blur( 2.5px );
  border-radius: 20px;
  border: 1px solid rgba( 255, 255, 0, 0.18 );

  @media (max-width: 970px) {
    margin: 10rem 5rem;
  }

  @media (max-width: 450px) {
    margin: 5rem 2rem;
  }
`

export const ProjectInnerContainer = styled.div`

`