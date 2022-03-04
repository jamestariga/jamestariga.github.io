import React from 'react'
import Particles from 'react-tsparticles'
// import { HeroContainer, HeroInnerContainer } from '../Styles/Hero.styles'

const Parts = () => {
  
  return (
    <>
      <Particles
        options={{
          background: {
            color: 'transparent',
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: 'canvas',
            events: {
              onHover: {
                enable: true,
                mode: 'bubble'
              },
              onClick: {
                enable: true,
                mode: 'repulse'
              },
              resize: true
            },
          },
          particles: {
            color: {
              value: '#ff9966'
            },
            links: {
              enable: true,
              color: '#fff',
              width: 3,
              opacity: 1,
            },
            number: {
              density: {
                enable: true,
                area: 1080
              },
              limit: 0,
              value: 30,
            },
            size: {
              value: 10
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.05,
                speed: 1,
                sync: true,
              },
              random: {
                enable: true,
                minimumValue: 0.05,
              },
              value: 1
            },
            move: {
              enable: true,
              speed: 1,
              direction: 'none'
            }
          },
          // fullScreen: {
          //   enable: false,
          //   zIndex: 0
          // },
          
          detectRetina: true,
        }}
      />
    </>
  )
}

export default Parts