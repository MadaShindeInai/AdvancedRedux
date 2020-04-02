import * as React from 'react';
import { ErrorSpan } from './styled'

const ErrorIndicator: React.FC = () => {
  return (
    <React.Fragment>
      <ErrorSpan>ERRROR</ErrorSpan>
    </React.Fragment>
  );
}

export default ErrorIndicator;
