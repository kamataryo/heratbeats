import styled from 'styled-components'
import PropTypes from 'prop-types'
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
const _Heart = styled.div`
  position: ${props =>
    props.positionX || props.positionY ? 'absolute' : 'relative'};
  left: ${props => (props.positionX ? props.positionX * 100 + '%' : 'auto')};
  top: ${props => (props.positionY ? props.positionY * 100 + '%' : 'auto')};
  width: ${props => props.size * 50}px;
  height: ${props => props.size * 80}px;
  opacity: ${props => props.alpha};
  margin-right: 20px;
  
  &:hover {
    cursor: ${props => (props.isPointer ? 'pointer' : 'auto')};
  }

  &:before {
    animation-name: ${props =>
    selectHemoTypedBeforeKeyframes(props.bloodHaemType, props.size)};
    animation-duration ${props => 60 / props.bpm}s;
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
    animation-duration ${props => 60 / props.bpm}s;
    animation-timing-function: 1, 0, 0, 1;
    animation-iteration-count: infinite; 
    animation-delay: ${props => props.delay / 1000}s;
    
    content: '';
    position: absolute;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
`

_Heart.propTypes = {
  bpm: PropTypes.number.isRequired,
  size: PropTypes.number,
  positionX: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  positionY: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  delay: PropTypes.number,
  alpha: PropTypes.number,
  isPointer: PropTypes.bool,
}

_Heart.defaultProps = {
  size: 1,
  positionX: false,
  positihoY: false,
  delay: 0,
  alpha: 1,
  isPointer: false,
}

export const Heart = _Heart
