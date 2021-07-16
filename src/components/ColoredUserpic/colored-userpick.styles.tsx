import styled from 'styled-components'

interface GradientWrapperProps {
   size: number
   colors: Array<string>
   hoverColors: Array<string>
   colorWidth: number
}

export const GradientWrapper = styled.div<GradientWrapperProps>`
   width: ${props => props.size}px;
   height: ${props => props.size}px;
   padding: ${props => props.colorWidth}px;

   border-radius: 50%;
   background: linear-gradient(to right, ${props => props.colors[0]}, ${props => props.colors[1]});
   transition-duration: 0.5s;

   display: flex;
   justify-content: center;
   align-items: center;

   :hover {
      background: linear-gradient(to right, ${props => props.hoverColors[0]}, ${props => props.hoverColors[1]});
      transition-duration: 0.5s;
   }
`

interface BackgroundContainerProps {
   backgroundColor: string
   margin: number
}

export const BackgroundContainer = styled.div<BackgroundContainerProps>`
   width: 100%;
   height: 100%;

   background-color: ${props => props.backgroundColor};
   padding: ${props => props.margin}px;

   border-radius: 50%;
   display: flex;
   justify-content: center;
   align-items: center;
`

interface ImageProps {
   maxSize: number
}

export const Image = styled.img<ImageProps>`
   width: 100%;
   height: 100%;
   /* max-width: ${props => props.maxSize}px; */
   /* max-height: ${props => props.maxSize}px; */

   border-radius: 50%;
`