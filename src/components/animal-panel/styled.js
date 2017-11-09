import styled from 'styled-components'

export const Panel = styled.div`
  background-color: lightpink;
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 3px 0 darkorange;
  transition-duration: 2s;
  display: inline-block;
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
