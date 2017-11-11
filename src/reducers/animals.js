import data from 'contents/animals.json'
import update from 'immutability-helper'
import switz from 'switz'

const initialAnimalsState = {
  data,
  propagation: [],
}

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
        const sorting = [...state.data]
        sorting.sort(comparator)
        return update(state, { data: { $set: sorting } })
      })
      .default(() => state),
  )
}

export default animalsReducer
