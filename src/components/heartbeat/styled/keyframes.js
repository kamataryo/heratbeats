import { keyframes } from 'styled-components'

export const selectHemoTypedBeforeKeyframes = (hemoType, size) => {
  if (hemoType === 'hemocyanin') {
    return createTransition('before', '#4a8392', 'dodgerblue', size)
  } else {
    return createTransition('before', 'red', 'darkorange', size)
  }
}

export const selectHemoTypedAfterKeyframes = (hemoType, size) => {
  if (hemoType === 'hemocyanin') {
    return createTransition('after', '#4a8392', 'dodgerblue', size)
  } else {
    return createTransition('after', 'red', 'darkorange', size)
  }
}

/**
 * animation keyframes definitions for left side of heart
 * @type {string}
 */
const createTransition = (which, inflatedColor, deflatedColor, size) => {
  const offset = 25 * size
  return keyframes`
    0%,
    100% {
      left: ${which === 'after' ? -offset : offset}px;
      top: 0;
      width: ${size * 50}px;
      height: ${size * 80}px;
      background-color: ${deflatedColor};
      border-radius: ${size * 50}px ${size * 50}px 0 0;
    }

    50% {
      left: ${which === 'after' ? 0 : offset}px;
      top: 0;
      width: ${size * 25}px;
      height: ${size * 40}px;
      background-color: ${inflatedColor};
      border-radius: ${size * 50}px ${size * 50}px 0 0;
    }
  `
}
