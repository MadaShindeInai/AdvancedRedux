import * as React from 'react';
import styled from 'styled-components'

const SpinnerSpan = styled.span`
  color: green;
`

const Spinner = () => {
  return (
    <React.Fragment>
      <SpinnerSpan>SPINNER</SpinnerSpan>
    </React.Fragment>
  );
}

export default Spinner;
