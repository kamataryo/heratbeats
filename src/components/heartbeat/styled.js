import styled, { keyframes } from 'styled-components'

/**
 * animation keyframes definitions for left side of heart
 * @type {string}
 */
const afterTransition = keyframes`
0%,
100% {
  left: -25px;
  top: 0;
  width: 50px;
  height: 80px;
  background-color: darkorange;
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

/**
 * animation keyframes definitions for right side of heart
 * @type {string}
 */
const beforeTransition = keyframes`
  0%,
  100% {
    left: 25px;
    top: 0;
    width: 50px;
    height: 80px;
    background-color: darkorange;
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

/**
 * styled heart component
 * @type {function}
 */
export const Heart = styled.div`
  position: relative;
  width: 100px;
  height: 80px;

  &:before {
    animation-name: ${beforeTransition};
    animation-duration ${props => 60 / props.perMin}s;
    animation-timing-function: 1, 0, 0, 1;
    animation-iteration-count: infinite;
    
    content: '';
    position: absolute;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }
  &:after {
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
