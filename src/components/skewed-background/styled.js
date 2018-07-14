import styled from 'styled-components'

export const EndSection = styled.div`
  padding: 50px 20px;
  min-height: 480px;
  background: ${props => props.color};
`

export const SkewedSection = EndSection.extend`
  background: linear-gradient(
    ${props => props.prevColor} 50%,
    ${props => props.nextColor} 50%
  );
  position: relative;
  z-index: 1;

  &::before {
    background: ${props => props.color};
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: skewY(${props => props.slope}deg);
    z-index: 0;
  }
`

export const InsideWrap = styled.div`
  padding-bottom: 200px;
`
