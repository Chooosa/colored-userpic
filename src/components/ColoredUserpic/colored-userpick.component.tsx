import React from 'react'

import {
   GradientWrapper,
   BackgroundContainer,
   Image
} from './colored-userpick.styles'

interface ColoredUserpicProps {
   src: string
   size: number
   margin: number
   backgroundColor: string
   colors: Array<string>
   hoverColors: Array<string>
   colorWidth: number
}

const ColoredUserpic: React.FC<ColoredUserpicProps> = ({
   src,
   size,
   margin,
   backgroundColor,
   colors,
   hoverColors,
   colorWidth
}) => {
   return (
      <GradientWrapper
         size={size}
         colors={colors}
         hoverColors={hoverColors}
         colorWidth={colorWidth}
      >
         <BackgroundContainer
            backgroundColor={backgroundColor}
            margin={margin}
         >
            <Image
               src={src}
               maxSize={size - margin - colorWidth}
            />
         </BackgroundContainer>
      </GradientWrapper>
   )
}

export default ColoredUserpic