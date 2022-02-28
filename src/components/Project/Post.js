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
        <PostInnerContainer>
          <PostTitle>{ title }</PostTitle>
          <PostImage src={ img } alt={ img }></PostImage>
          <PostText>{description}</PostText>
          <PostDetail>Tech Stack: { tech }</PostDetail>
        </PostInnerContainer>
      </PostContainer>
    </>
  )
}

export default Post