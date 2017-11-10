import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AnimalPanel from '../animal-panel'
import { Main, Button, MainTitle, AnimalsWrap } from './styled'
import Charcters from '../animals'
import { TYPES as ANIMALS_ACTION_TYPES } from 'reducers/animals'

/**
 * map state To Props
 * @param  {object} state state
 * @return {object}       state props
 */
const mapStateToProps = state => {
  return {
    animals: state.animals,
  }
}

/**
 * map dispatch to props
 * @param  {function} dispatch dispatcher
 * @return {object}            dispatch props
 */
const mapDispatchToProps = dispatch => {
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
/**
 * main view of app
 * @type {function}
 */
@connect(mapStateToProps, mapDispatchToProps)
export default class MainView extends React.Component {
  /**
   * propTypes
   * @type {object}
   */
  static propTypes = {
    // stateProps
    animals: PropTypes.array.isRequired,
    // dispatchProps
    sortAscend: PropTypes.func.isRequired,
    sortDescend: PropTypes.func.isRequired,
  }

  /**
   * shouldComponentUpdate
   * @param  {object} nextProps next props
   * @param  {object} nextState next state
   * @return {boolean}          should component update
   */
  shouldComponentUpdate() {
    return true
  }
  /**
   * render
   * @return {ReactElement|null|false} render a React element.
   */
  render() {
    const {
      // stateProps
      animals,
      // dispatchProps
      sortAscend,
      sortDescend,
    } = this.props
    return (
      <Main>
        <MainTitle>{'HOW MUCH DO WE BEAT?'}</MainTitle>
        <Button direction={ 'high' } onClick={ sortAscend }>
          {'high'}
        </Button>
        <Button direction={ 'low' } onClick={ sortDescend }>
          {'low'}
        </Button>

        <AnimalsWrap>
          {animals.map((animal, index) => {
            const Character = Charcters[animal.slug] || (() => null)
            return (
              <div key={ `animals-${index}-${animal.academic}` }>
                <AnimalPanel animal={ animal } />
                <Character />
              </div>
            )
          })}
        </AnimalsWrap>
      </Main>
    )
  }
}
