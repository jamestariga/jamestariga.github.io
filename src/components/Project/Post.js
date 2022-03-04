import React from 'react'
import {
  PostContainer, PostInnerContainer, PostTitle,
  PostText, PostImage, PostDetail, PostLink
} from '../Styles/Post.styles'

const Post = (props) => {
  const { title, link, img, description, tech } = props

  return (
    <>
      
      <PostContainer>
        <PostTitle>{ title }</PostTitle>
        <PostInnerContainer>
          <PostLink href={ link }><PostImage src={ img } alt={ img } /></PostLink>
        </PostInnerContainer>
          <PostText>{description}</PostText>
          <PostDetail>Tech Stack: { tech }</PostDetail>
      </PostContainer>
      
    </>
  )
}

export default Post