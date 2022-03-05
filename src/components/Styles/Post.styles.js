import styled from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: auto;
  background: rgba( 255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 0, 0.18);
  color: #fff;
`

export const PostInnerContainer = styled.div`
  width: auto;
  height: 100%;
  padding: 0 2rem;

  @media (max-width: 650px) {
    padding: 0 1rem;
  }
`

export const PostTitle = styled.h3`
  font-size: 1.5rem;
  text-align: center;

  @media (max-width: 971px) {
    font-size: 1.25rem;
  }

  @media (max-width: 650px) {
    font-size: 1rem;
  }
`

export const PostText = styled.p`
  font-size: 1rem;
  text-align: center;

  @media (max-width: 650px) {
    margin: 1rem;
  }

  @media (max-width: 450px) {
    font-size: 0.7rem;
    margin: 1rem 1rem 0 1rem;
  }
`

export const PostImage = styled.img`
  width: 100%;
  height: 100%;

  @media (max-width: 450px) {
    max-width: 250px;
  }
` 

export const PostDetail = styled.h4`
  font-weight: bold;

  @media (max-width: 971px) {
    font-size: 0.9rem;
  }
  
  @media (max-width: 450px) {
    font-size: 0.7rem;
  }
`

export const PostLink = styled.a`
  text-decoration: none;
`