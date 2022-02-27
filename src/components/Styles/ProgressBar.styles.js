import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

export const InnerContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: auto;
`

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  /* border: 1px solid; */
  padding: 0 1rem;
`

export const ProgressContainer = styled.div`
  height: 1.25rem;
  width: 100%;
  background: rgba( 255, 255, 255, 0.1 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 2.5px );
  -webkit-backdrop-filter: blur( 2.5px );
  border-radius: 50px;
  margin: 0.5rem;

  @media (max-width: 650px) {
    height: 1rem;
  }
`

export const Filler = styled.div`
  display: flex;
  justify-content: right;
  transition: width 1s ease-in-out;
  align-items: center;
  height: 100%;
  width: ${props => props.completed};
  background-color: ${props => props.backgroundColor};
  border-radius: inherit;
`

export const Progress = styled.span`
  padding: 5px;
  color: #fff;
  font-weight: bold;
  
  @media (max-width: 970px) {
    font-size: smaller;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  justify-content: flex-start;
  padding: 0 2rem;
`

export const Title = styled.h5`
  font-size: 1.5rem;
  color: #fff;

  @media (max-width: 970px) {
    font-size: 1rem;
  }
`