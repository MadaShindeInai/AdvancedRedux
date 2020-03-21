import React, { Component } from 'react'
import styled from 'styled-components'
import ErrorIndicator from '../ErrorIndicator';


class ErrorBoundry extends React.Component {

  state = {
    hasError: false
  }

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }
  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />
    }
    return this.props.children;
  }
}

export default ErrorBoundry;