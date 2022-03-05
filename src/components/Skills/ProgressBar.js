import { useEffect, useState, useRef, useMemo } from 'react'
import {
  Container, InnerContainer, MainContainer,
  ProgressContainer, Filler,
  Progress, Title, TitleContainer
} from '../Styles/ProgressBar.styles'

const ProgressBar = (props) => {
  const { bgColor, title, completed, animation } = props
  
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const callbackFunction = (entries) => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }

  const options = useMemo(() => ({
    root: null,
    rootMargin: "100px",
    threshold: 0.75
  }), []
  )

  useEffect(() => {
    let observerRefValue = null

    const observer = new IntersectionObserver(callbackFunction, options)

    if (containerRef.current) {
      observer.observe(containerRef.current)
      observerRefValue = containerRef.current
    }
    
    return () => {
      if(observerRefValue) observer.unobserve(observerRefValue)
    }
  }, [containerRef, options])
  
  return (
    <>
      <Container>
        <InnerContainer>
          <TitleContainer>
            <Title>{title}</Title>
          </TitleContainer>
          <MainContainer>
            <ProgressContainer ref={containerRef}>
              {isVisible && (<Filler backgroundColor={ bgColor } completed={ completed } animation={ animation }>
                <Progress> {`${completed}`} </Progress>
              </Filler>)}
            </ProgressContainer>
          </MainContainer>
        </InnerContainer>
      </Container>
    </>
  )
}


export default ProgressBar