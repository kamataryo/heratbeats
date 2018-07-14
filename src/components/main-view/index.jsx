import React from 'react'
import PropTypes from 'prop-types'
import AnimalPanel from '../animal-panel/container'
import { Main, Surface } from './styled'
import SkewedBackground from 'components/skewed-background'
import { bgWhite, bgGray } from 'colors'

// const bgColors = [bgAqua, bgGreen, bgGray, bgWhite, bgBrown,bgYellow]
const bgColors = [bgGray, bgWhite]

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
  }

  /**
   * shouldComponentUpdate
   * @param  {object} nextProps next props
   * @param  {object} nextState next state
   * @return {boolean}          should component update
   */
  shouldComponentUpdate() {
    return false
  }
  /**
   * render
   * @return {ReactElement|null|false} render a React element.
   */
  render() {
    const {
      // stateProps
      animals,
    } = this.props
    return (
      <Main>
        <SkewedBackground colors={ bgColors } slope={ 10 }>
          {animals.map((animal, index) => (
            <Surface key={ `animals-${index}-${animal.academic}` }>
              <AnimalPanel animal={ animal } />
            </Surface>
          ))}
        </SkewedBackground>
      </Main>
    )
  }
}
