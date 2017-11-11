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
  cursor: pointer;
  outline: none;
  appearance: none;
  width: 100px;
  height: 100px;
  margin: 10px;
  border: 0;
  background-color: ${props =>
    props.direction === 'high' ? '#80273F' : 'brown'};
  border-radius: 10px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  box-shadow: 0 5px Chocolate;

  &:active {
    transform: translate3d(0, 5px, 0);
    box-shadow: none;
  }
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
