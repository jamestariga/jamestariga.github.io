import React from 'react'
import {
  PostContainer,
  PostInnerContainer,
  PostTitleContainer,
  PostTitle,
  PostText,
  PostImage,
  PostDetail,
  PostLink,
} from '../Styles/Post.styles'

const Post = (props) => {
  const { title, link, img, description, tech } = props

  return (
    <>
      <PostContainer>
        <PostInnerContainer>
          <PostLink href={link}>
            <PostImage src={img} alt={img} />
          </PostLink>
        </PostInnerContainer>
        <PostTitleContainer>
          <PostTitle>{title}</PostTitle>
          <PostText>{description}</PostText>
        </PostTitleContainer>
        <PostDetail>Tech Stack: {tech}</PostDetail>
      </PostContainer>
    </>
  )
}

export default Post
