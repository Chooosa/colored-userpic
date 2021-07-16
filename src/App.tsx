import React from 'react';

import { Wrapper } from './App.styles'
import ColoredUserpic from './components/ColoredUserpic/colored-userpick.component';
import avatarImg from './assets/avatar.jpg'

function App() {
  return (
    <Wrapper>
      <ColoredUserpic
        src={avatarImg}
        size={150}
        margin={4}
        backgroundColor='red'
        colors={['green', 'blue']}
        hoverColors={['blue', 'green']}
        colorWidth={6}
      />
    </Wrapper>
  );
}

export default App;
