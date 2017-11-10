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
 * button
 * @type {function}
 */
export const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  outline: none;
  appearance: none;
  width: 100px;
  height: 100px;
  margin: 10px;
  border: 0;
  background-color: ${props =>
    props.direction === 'high' ? '#80273F' : 'brown'};
  border-radius: 50px;
  color: white;
  font-weight: bold;
  font-size: 20px;
`

/**
 * wrapper for animal panels
 * @type {function}
 */
export const AnimalsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
