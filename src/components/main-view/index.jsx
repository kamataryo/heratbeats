import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AnimalPanel from '../animal-panel'
import { Main, MainTitle, AnimalsWrap } from './styled'

/**
 * map state To Props
 * @param  {object} state state props
 * @return {object}       object props
 */
const mapStateToProps = state => {
  return {
    animals: state.animals,
  }
}

/**
 * main view of app
 * @type {function}
 */
@connect(mapStateToProps)
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
    return true
  }
  /**
   * render
   * @return {ReactElement|null|false} render a React element.
   */
  render() {
    const { animals } = this.props
    return (
      <Main>
        <MainTitle>{'HOW MUCH DO WE BEAT?'}</MainTitle>
        <AnimalsWrap>
          {animals.map(animal => (
            <AnimalPanel key={ animal.academic } animal={ animal } />
          ))}
        </AnimalsWrap>
      </Main>
    )
  }
}
