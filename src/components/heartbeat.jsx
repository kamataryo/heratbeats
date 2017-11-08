import React from 'react'
import PropTypes from 'prop-types'
import update from 'immutability-helper'
import styled, { keyframes } from 'styled-components'

const afterTransition = keyframes`
0%,
100% {
  left: -25px;
  top: 0;
  width: 50px;
  height: 80px;
  background-color: orange;
  border-radius: 50px 50px 0 0;
}
50%  {
  left: 0;
  top: 0;
  width: 25px;
  height: 40px;
  background-color: red;
  border-radius: 12.5px 12.5px 0 0;
}
`

const beforeTransition = keyframes`
  0%,
  100% {
    left: 25px;
    top: 0;
    width: 50px;
    height: 80px;
    background-color: orange;
    border-radius: 25px 25px 0 0;
  }
  50%  {
    left: 25px;
    top: 0;
    width: 25px;
    height: 40px;
    background-color: red;
    border-radius: 12.5px 12.5px 0 0;
  }  
`

const Heart = styled.div`
  position: relative;
  width: 100px;
  height: 80px;

  &::before {
    animation-name: ${beforeTransition};
    animation-duration ${props => 60 / props.perMin}s;
    animation-timing-function: 1, 0, 0, 1;
    animation-iteration-count: infinite;
    
    content: '';
    position: absolute;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }
  &::after {
    animation-name: ${afterTransition};
    animation-duration ${props => 60 / props.perMin}s;
    animation-timing-function: 1, 0, 0, 1;
    animation-iteration-count: infinite; 
    content: '';
    position: absolute;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
`

export default class Hearbeat extends React.Component {
  /**
   * propTypes
   * @type {object}
   */
  static propTypes = {
    // ownProps
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
  }

  /**
   * constructor
   * @param  {object} props React props.
   * @return {void}
   */
  constructor(props) {
    super(props)
    this.state = { counter: 0, timerId: false }
  }

  /**
   * componentWillMount
   * @return {void}
   */
  componentWillMount() {
    const timerId = setInterval(
      () =>
        this.setState(
          update(this.state, { counter: { $set: this.state.counter + 1 } }),
        ),
      1000,
    )
    this.setState(update(this.state, { timerId: { $set: timerId } }))
  }

  /**
   * shouldComponentUpdate
   * @param  {object} nextProps next props
   * @param  {object} nextState next state
   * @return {boolean}          should component update
   */
  shouldComponentUpdate() {
    return false
  }

  /**
   * componentWillUnmount
   * @return {void}
   */
  componentWillUnmount() {
    // please stop
    clearInterval(this.state.timerId)
  }

  /**
   * render
   * @return {ReactElement|null|false} render a React element.
   */
  render() {
    // const { counter } = this.state
    const { min, max } = this.props
    const average = (min + max) / 2

    return (
      <div>
        <Heart perMin={ average } />
      </div>
    )
  }
}
