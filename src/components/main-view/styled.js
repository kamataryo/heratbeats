import styled from 'styled-components'
import { gray, paleGray } from 'colors'

/**
 * main view wrap
 * @type {function}
 */
export const Main = styled.main`
  width: 100%;
  margin: auto;
`

/**
 * main title
 * @type {function}
 */
export const MainTitle = styled.h1`
  background: ${gray};
  color: ${paleGray};
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
  height: 40px;
  margin: 10px;
  background-color: white;
  border: 1px solid gray;
  border-radius: 10px;
  color: gray;
  font-size: 20px;

  &:active {
    transform: translate3d(0, 3px, 0);
    box-shadow: none;
  }
`

export const Surface = styled.div`
  z-index: 999;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
`
