import React from 'react';
import styled from 'styled-components';

const Woof = styled.div<{ color?: string; }>`
  color: #000;
`;

class Bork extends React.Component {
  render() {
    return (
      <Woof color="black">
        BORK-BORK-BORK
      </Woof>
    );
  }
}

export default Bork;
