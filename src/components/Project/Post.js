import React from 'react'
import {
  PostContainer, PostInnerContainer, PostTitle,
  PostText, PostImage, PostDetail
} from '../Styles/Post.styles'

const Post = (props) => {
  const { title, img, description, tech } = props

  return (
    <>
      <PostContainer>
        <PostTitle>{ title }</PostTitle>
        <PostInnerContainer>
          <PostImage src={ img } alt={ img }></PostImage>
        </PostInnerContainer>
          <PostText>{description}</PostText>
          <PostDetail>Tech Stack: { tech }</PostDetail>
      </PostContainer>
    </>
  )
}

export default Post