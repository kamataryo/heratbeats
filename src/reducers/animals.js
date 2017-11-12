import data from 'contents/animals.json'
import update from 'immutability-helper'
import switz from 'switz'

const initialAnimalsState = {
  data,
  scale: {
    enabled: true,
    ppm: 200, // pixel per meter
  },
}

export const TYPES = {
  SORT: 'ANIMALS.SORT',
  SWITCH_SCALING: 'ANIMALS.SWITCH_SCALING',
  SET_PPM: 'ANIMALS.SET_PPM',
}

/**
 * [animalsReducer description]
 * @param  {object} [state=initialAnimalsState] old state
 * @param  {object} action                 action
 * @return {object}                        new state
 */
const animalsReducer = (state = initialAnimalsState, action) => {
  const { type, payload = {} } = action
  return switz(type, s =>
    s
      .case(TYPES.SORT, () => {
        const { comparator } = payload
        const sorting = [...state.data]
        sorting.sort(comparator)
        return update(state, { data: { $set: sorting } })
      })
      .case(TYPES.SWITCH_SCALING, () => {
        const { enabled } = payload
        return update(state, { scale: { enabled: { $set: enabled } } })
      })
      .case(TYPES.SET_PPM, () => {
        const { ppm } = payload
        return update(state, { scale: { ppm: { $set: ppm } } })
      })
      .default(() => state),
  )
}

export default animalsReducer
