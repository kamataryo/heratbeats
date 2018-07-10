import styled from 'styled-components'

export const Wrap = styled.div`
  position: relative;
  display: flex;
`

const selectDisplay = props =>
  props.display || !props.hasCharacter ? 'inline-block' : 'none'

export const Panel = styled.div`
  position: relative;
  margin: 10px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 4px;
  transition-duration: 2s;
  display: ${selectDisplay};
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
