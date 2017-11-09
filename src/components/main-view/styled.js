import styled from 'styled-components'

/**
 * main view wrap
 * @type {function}
 */
export const Main = styled.main`
  max-width: 640px;
  margin: auto;
  padding: 40px;
`

/**
 * main title
 * @type {function}
 */
export const MainTitle = styled.h1`
  font-style: italic;
  font-size: 40px;
  font-weight: 100;
  text-align: center;
`

/**
 * wrapper for animal panels
 * @type {function}
 */
export const AnimalsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: stretch;
`
