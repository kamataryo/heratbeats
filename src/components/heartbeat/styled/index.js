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
  position: ${props => (props.pos ? 'absolute' : 'relative')};
  left: ${props => (props.pos ? props.pos[0] * 100 + '%' : 'auto')};
  top: ${props => (props.pos ? props.pos[1] * 100 + '%' : 'auto')};
  width: ${props => props.size * 50}px;
  height: ${props => props.size * 80}px;
  ${'' /* border: 1px solid blue; */}
  margin-right: 20px;
  
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
