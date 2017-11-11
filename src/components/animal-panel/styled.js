import styled from 'styled-components'

export const Wrap = styled.div`
  position: relative;
`

export const Panel = styled.div`
  position: absolute;
  background-color: lightpink;
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 3px 0 darkorange;
  transition-duration: 2s;
  display: ${props => (props.isHovered ? 'inline-block' : 'none')};
  z-index: 100;
`

export const Presentable = styled.div('')

export const Dl = styled.dl`
  display: table-row;

  & > dt,
  & > dd {
    display: table-cell;
    padding: 2px 5px;
  }

  & > dt {
    font-weight: bolder;
  }
`

export const Academic = styled.span`
  font-style: italic;
`
