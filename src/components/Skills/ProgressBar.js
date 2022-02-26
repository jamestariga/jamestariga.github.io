import {
  Container, InnerContainer, MainContainer,
  ProgressContainer, Filler,
  Progress, Title, TitleContainer
} from '../Styles/ProgressBar.styles'
import SkillsData from './SkillsData'

const ProgressBar = (props) => {
  const { bgColor, title, completed } = props

  return (
    <>
      <Container>
        <InnerContainer>
          <TitleContainer>
            <Title>{title}</Title>
          </TitleContainer>
          <MainContainer>
            <ProgressContainer>
              <Filler backgroundColor={ bgColor } completed={ completed } >
                <Progress> {`${completed}`} </Progress>
              </Filler>
            </ProgressContainer>
          </MainContainer>
        </InnerContainer>
      </Container>
    </>
  )
}

export default ProgressBar