import { connect } from 'react-redux'
import MainView from './'
import { TYPES as ANIMALS_ACTION_TYPES } from 'reducers/animals'

/**
 * map state To Props
 * @param  {object} state state
 * @return {object}       state props
 */
export const mapStateToProps = state => {
  return {
    animals: state.animals.data,
  }
}

/**
 * map dispatch to props
 * @param  {function} dispatch dispatcher
 * @return {object}            dispatch props
 */
export const mapDispatchToProps = dispatch => {
  const getAveBpm = animal => {
    const bpm = animal.biometrix.heart.bpm
    return typeof bpm === 'number' ? bpm : (bpm.max + bpm.min) / 2
  }

  return {
    sortDescend: () =>
      dispatch({
        type: ANIMALS_ACTION_TYPES.SORT,
        payload: {
          comparator: (a, b) => getAveBpm(a) - getAveBpm(b),
        },
      }),
    sortAscend: () =>
      dispatch({
        type: ANIMALS_ACTION_TYPES.SORT,
        payload: {
          comparator: (a, b) => -getAveBpm(a) + getAveBpm(b),
        },
      }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainView)
