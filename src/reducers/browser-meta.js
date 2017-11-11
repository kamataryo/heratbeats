const initialBrowserMetaState = {
  isTouchDevice: window.ontouchstart === null,
  isMouseDevice: window.onmousedown === null,
}

/**
 * [browser meta description]
 * @param  {object} [state=initialBrowserMetaState] old state
 * @param  {object} action                 action
 * @return {object}                        new state
 */
const browserMetaReducer = (state = initialBrowserMetaState) => {
  return state
}

export default browserMetaReducer
