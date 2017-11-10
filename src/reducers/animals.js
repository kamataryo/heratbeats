import initialAnimalsState from 'contents/animals.json'
import update from 'immutability-helper'
import switz from 'switz'

export const TYPES = {
  SORT: 'ANIMALS.SORT',
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
        const sorting = [...state]
        sorting.sort(comparator)
        return update(state, { $set: sorting })
      })
      .default(() => state),
  )
}

export default animalsReducer
