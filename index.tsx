import React from 'react';
import styled from 'styled-components';

interface IBark {
  color: string;
}

const Woof = styled.div<{ color?: string; }>`
  color: #000;
`;

const Bark = styled.div<IBark>`
  color: #000;
`;

class Bork extends React.Component {
  render() {
    return (
      <>
        <Bark color="red">
          WOOF-WOOF-WOOF
        </Bark>

        <Woof color="black">
          BORK-BORK-BORK
        </Woof>
      </>
    );
  }
}

export default Bork;
