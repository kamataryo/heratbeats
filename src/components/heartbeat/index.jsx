import React from 'react'
import PropTypes from 'prop-types'
import update from 'immutability-helper'
import { Heart } from './styled'

export default class Hearbeat extends React.Component {
  /**
   * propTypes
   * @type {object}
   */
  static propTypes = {
    // ownProps
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
  }

  /**
   * constructor
   * @param  {object} props React props.
   * @return {void}
   */
  constructor(props) {
    super(props)
    this.state = { counter: 0, timerId: false }
  }

  /**
   * componentWillMount
   * @return {void}
   */
  componentWillMount() {
    const timerId = setInterval(
      () =>
        this.setState(
          update(this.state, {
            counter: {
              $set: this.state.counter + 1,
            },
          }),
        ),
      1000,
    )
    this.setState(
      update(this.state, {
        timerId: {
          $set: timerId,
        },
      }),
    )
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
   * componentWillUnmount
   * @return {void}
   */
  componentWillUnmount() {
    // please stop
    clearInterval(this.state.timerId)
  }

  /**
   * render
   * @return {ReactElement|null|false} render a React element.
   */
  render() {
    // const { counter } = this.state
    const { min, max } = this.props
    const average = (min + max) / 2

    return (
      <div>
        <Heart perMin={ average } />
      </div>
    )
  }
}
