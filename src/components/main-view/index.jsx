import React from 'react'
import PropTypes from 'prop-types'
import AnimalRow from '../animal-row/container'
import { Main, Button, MainTitle, AnimalsWrap } from './styled'

/**
 * main view of app
 * @type {function}
 */
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
            return (
              <div key={ `animals-${index}-${animal.academic}` }>
                <AnimalRow animal={ animal } />
              </div>
            )
          })}
        </AnimalsWrap>
      </Main>
    )
  }
}
