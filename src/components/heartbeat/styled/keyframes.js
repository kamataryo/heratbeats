import { keyframes } from 'styled-components'

export const selectHemoTypedBeforeKeyframes = hemoType => {
  if (hemoType === 'hemocyanin') {
    return createTransition('before', 'darkcyan', 'dodgerblue')
  } else {
    return createTransition('before', 'red', 'darkorange')
  }
}

export const selectHemoTypedAfterKeyframes = hemoType => {
  if (hemoType === 'hemocyanin') {
    return createTransition('after', 'darkcyan', 'dodgerblue')
  } else {
    return createTransition('after', 'red', 'darkorange')
  }
}

/**
 * animation keyframes definitions for left side of heart
 * @type {string}
 */
const createTransition = (which, inflatedColor, deflatedColor) => keyframes`
0%,
100% {
  left: ${which === 'after' ? -25 : 25}px;
  top: 0;
  width: 50px;
  height: 80px;
  background-color: ${deflatedColor};
  border-radius: 50px 50px 0 0;
}
50%  {
  left: ${which === 'after' ? 0 : 25}px;
  top: 0;
  width: 25px;
  height: 40px;
  background-color: ${inflatedColor};
  border-radius: 12.5px 12.5px 0 0;
}
`
