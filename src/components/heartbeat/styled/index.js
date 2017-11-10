import styled from 'styled-components'
import {
  selectHemoTypedBeforeKeyframes,
  selectHemoTypedAfterKeyframes,
} from './keyframes'

export const HeartbeatsWrap = styled.div`
  display: flex;
`

/**
 * styled heart component
 * @type {function}
 */
export const Heart = styled.div`
  position: relative;
  width: ${props => props.size * 100}px;
  height: ${props => props.size * 80}px;

  &:before {
    animation-name: ${props =>
    selectHemoTypedBeforeKeyframes(props.bloodHaemType, props.size)};
    animation-duration ${props => 60 / props.perMin}s;
    animation-timing-function: 1, 0, 0, 1;
    animation-iteration-count: infinite;
    animation-delay: ${props => props.delay / 1000}s;
    
    content: '';
    position: absolute;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }
  &:after {
    animation-name: ${props =>
    selectHemoTypedAfterKeyframes(props.bloodHaemType, props.size)};
    animation-duration ${props => 60 / props.perMin}s;
    animation-timing-function: 1, 0, 0, 1;
    animation-iteration-count: infinite; 
    animation-delay: ${props => props.delay / 1000}s;
    
    content: '';
    position: absolute;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
`